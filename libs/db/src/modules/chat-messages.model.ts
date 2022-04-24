/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-04 09:50:34
 * @LastEditTime: 2022-04-24 14:41:14
 * @Description: 聊天对话记录模型
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ChatMessages {
  @ApiProperty({ title: '发送人id' })
  @prop({ required: true, type: ObjectId })
  userId: ObjectId;

  @ApiProperty({ title: '接收人id' })
  @prop({ required: true, type: ObjectId })
  targetId: ObjectId;

  @ApiProperty({ title: '是否已读' })
  @prop({ type: Boolean, default: false })
  isRead: false;

  @ApiProperty({ title: '信息内容' })
  @prop({ type: String })
  content: string;

  @ApiProperty({ title: '是否为游客' })
  @prop({ type: Boolean, default: false })
  isTourist: false;

  @ApiProperty({
    title: '信息类型',
    description: '1: 文本，2: 表情，3: 图片, 4: 语音，5：商品推送',
  })
  @prop({ text: Number, default: 1 })
  messageType: number;
}
