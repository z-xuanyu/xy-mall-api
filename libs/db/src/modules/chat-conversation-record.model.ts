/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-24 14:46:55
 * @LastEditTime: 2022-04-26 18:01:30
 * @Description: 客服聊天会话列表
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { CustomerService } from './customer-service.model';
import { User } from './user.model';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ChatConversationRecord {
  @ApiProperty({ title: '用户d' })
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  @ApiProperty({ title: '客服id' })
  @prop({ required: true, ref: () => CustomerService })
  customerServiceId: Ref<CustomerService>;

  @ApiProperty({ title: '是否为游客' })
  @prop({ type: Boolean, default: false })
  isTourist: boolean;

  @ApiProperty({ title: '是否在线', default: false })
  @prop({ type: String })
  isOnline: string;

  @ApiProperty({
    title: '信息来源设备',
    description: '1: pc, 2: 微信(公众号), 3: 小程序 4: h5',
  })
  @prop({ type: Number, default: 4 })
  source: number;

  @ApiProperty({ title: '消息未读数' })
  @prop({ type: Number, default: 0 })
  unreadNum: number;

  @ApiProperty({ title: '最新一条消息内容' })
  @prop({ type: String, default: '' })
  messageContent: string;

  @ApiProperty({
    type: '消息类型',
    description: '1: 文本，2: 表情，3: 图片, 4: 语音，5：商品推送',
  })
  @prop({ type: Number, default: 1 })
  messageType: number;
}
