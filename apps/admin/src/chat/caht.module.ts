/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-04 10:19:29
 * @LastEditTime: 2022-03-04 10:20:05
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { MessageGateway } from './chat.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [MessageGateway],
})
export class ChatMessageModule {}
