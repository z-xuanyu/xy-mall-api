/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-04 10:01:38
 * @LastEditTime: 2022-03-04 12:18:47
 * @Description: Modify here please
 */
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsResponse,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Server } from 'ws';

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
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('MessageGateway');

  // 发送信息
  @SubscribeMessage('msgToServer')
  public handleMessage(client: Socket, payload: any): void {
    this.server.to(payload.room).emit('msgToClient', payload);
  }

  /**
   * 链接单聊
   *
   * @param {Socket} client Socket
   * @param {string} data 传过来数据
   * @memberof MessageGateway
   */
  @SubscribeMessage('joinRoom')
  public joinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ): void {
    const roomId = data.userId + data.adminId;
    client.join(roomId);
    client.emit('joinRoomSocket', {
      massage: '单聊链接成功',
      roomId,
    });
  }

  // 断开聊天
  /**
   * @param {Socket} client Socket
   * @param {string} room 房间id
   * @memberof MessageGateway
   */
  @SubscribeMessage('leaveRoom')
  public leaveRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ): void {
    client.leave(data._id);
    client.emit('leftRoom', data._id);
    console.log('断开连接');
  }

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
