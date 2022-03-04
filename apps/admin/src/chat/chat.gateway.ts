/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-04 10:01:38
 * @LastEditTime: 2022-03-04 17:56:21
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
    @InjectModel(ChatMessages)
    private chatMessagesModel: ReturnModelType<typeof ChatMessages>,
  ) {}

  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('MessageGateway');

  // 发送信息
  @SubscribeMessage('sendMessage')
  public handleMessage(client: Socket, @MessageBody() payload: any): any {
    this.chatMessagesModel
      .create({
        userId: payload.userId,
        adminId: payload.adminId,
        content: payload.content,
      })
      .then(() => {
        this.server.emit('onMessage', payload);
        // client.emit('onMessage', payload);
      });
  }

  // 获取目标用户聊天记录
  @SubscribeMessage('getUserChatData')
  public async getUserChatDate(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: any,
  ) {
    if (!payload.adminId || !payload.userId) {
      return client.emit('onUserChatData', {
        code: 101,
        message: 'id不能为空',
      });
    }

    const res = await this.chatMessagesModel.find({
      userId: payload.userId,
      adminId: payload.adminId,
    });
    client.emit('onUserChatData', res);
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
    return this.logger.log('Init');
  }

  public handleDisconnect(client: Socket): void {
    return this.logger.log(`Client disconnected: ${client.id}`);
  }

  public handleConnection(client: Socket): void {
    return this.logger.log(`Client connected: ${client.id}`);
  }
}
