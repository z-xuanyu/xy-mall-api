/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-04 10:01:38
 * @LastEditTime: 2022-04-28 14:29:48
 * @Description: Modify here please
 */
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Server } from 'ws';
import { ChatMessages } from 'libs/db/modules/chat-messages.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { CustomerService } from 'libs/db/modules/customer-service.model';
import { ChatConversationRecord } from 'libs/db/modules/chat-conversation-record.model';

@WebSocketGateway({
  namespace: '/chat',
  // 解决跨域
  allowEIO3: true,
  cors: {
    origin: /.*/,
    credentials: true,
  },
})
export class MessageGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  // 注入
  constructor(
    // 客服
    @InjectModel(CustomerService)
    private customerServiceModel: ReturnModelType<typeof CustomerService>,
    // 聊天记录
    @InjectModel(ChatMessages)
    private chatMessagesModel: ReturnModelType<typeof ChatMessages>,
    @InjectModel(ChatConversationRecord)
    private chatConversationRecordModel: ReturnModelType<
      typeof ChatConversationRecord
    >,
  ) {}

  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('MessageGateway');

  @SubscribeMessage('connectedCustomerService')
  public async handleConnectedCustomerService(
    @MessageBody() payload: any,
  ): Promise<any> {
    // 建立会话关系
    const hasRecord = await this.chatConversationRecordModel.findOne({
      userId: payload.userId,
      customerServiceId: payload.customerServiceId,
    });
    // 是否有会话记录
    if (!hasRecord) {
      this.chatConversationRecordModel.create({
        userId: payload.userId,
        customerServiceId: payload.customerServiceId,
      });
    }
  }

  // 发送信息
  @SubscribeMessage('sendMessage')
  public async handleMessage(
    client: Socket,
    @MessageBody() payload: any,
  ): Promise<any> {
    // 目标用户是否为客服
    const hasCuservice = await this.customerServiceModel.findById(
      payload.targetId,
    );
    // 存储聊天记录
    const res = await this.chatMessagesModel.create({
      user: payload.userId,
      target: payload.targetId,
      content: payload?.content ?? '',
      messageType: payload.messageType,
      userRef: hasCuservice ? 'User' : 'CustomerService',
      targetRef: hasCuservice ? 'CustomerService' : 'User',
      product: payload?.product,
    });

    // 获取存储成功的信息
    const messageContent = await this.chatMessagesModel
      .findById(res._id)
      .populate({ path: 'user', select: ['name', 'avatar'] })
      .populate({ path: 'target', select: ['name', 'avatar'] });
    // 更新目标用户会话最后一条消息
    await this.chatConversationRecordModel.findOneAndUpdate(
      {
        $or: [
          {
            userId: payload.userId,
            customerServiceId: payload.targetId,
          },
          {
            userId: payload.targetId,
            customerServiceId: payload.userId,
          },
        ],
      },
      { messageContent: messageContent.content, $inc: { unreadNum: 1 } },
    );
    // 消息监听
    this.server.emit('onMessage', messageContent);
    // client.emit('onMessage', payload);
  }
  // /**
  //  * 房间单聊
  //  *
  //  * @param {Socket} client Socket
  //  * @param {string} data 传过来数据
  //  * @memberof MessageGateway
  //  */
  // @SubscribeMessage('joinRoom')
  // public joinRoom(
  //   @ConnectedSocket() client: Socket,
  //   @MessageBody() data: any,
  // ): void {
  //   const roomId = data.userId + data.adminId;
  //   client.join(roomId);
  //   client.emit('joinRoomSocket', {
  //     massage: '单聊链接成功',
  //     roomId,
  //   });
  // }

  // // 断开聊天
  // /**
  //  * @param {Socket} client Socket
  //  * @param {string} room 房间id
  //  * @memberof MessageGateway
  //  */
  // @SubscribeMessage('leaveRoom')
  // public leaveRoom(
  //   @ConnectedSocket() client: Socket,
  //   @MessageBody() data: any,
  // ): void {
  //   client.leave(data._id);
  //   client.emit('leftRoom', data._id);
  //   console.log('断开连接');
  // }

  // 初始化
  public afterInit(server: Server): void {
    return this.logger.log(`Init: ${server}`);
  }

  // 断开连接
  public handleDisconnect(client: Socket): void {
    return this.logger.log(`Client disconnected: ${client.id}`);
  }

  // 连接
  public handleConnection(client: Socket): void {
    return this.logger.log(`Client connected: ${client.id}`);
  }
}
