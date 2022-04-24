/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-04 10:01:38
 * @LastEditTime: 2022-04-24 15:24:57
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
