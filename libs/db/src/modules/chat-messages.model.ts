/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-04 09:50:34
 * @LastEditTime: 2022-04-28 14:28:42
 * @Description: 聊天对话记录模型
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { CustomerService } from './customer-service.model';
import { User } from './user.model';

class PushProductType {
  @ApiProperty({ title: '商品标题' })
  @prop()
  title: string;

  @ApiProperty({ title: '商品id' })
  @prop()
  id: string;

  @ApiProperty({ title: '商品封面图' })
  @prop()
  pic: string;

  @ApiProperty({ title: '商品价格' })
  @prop()
  price: number;

  @ApiProperty({ title: '商品库存' })
  @prop()
  inventory: number;

  @ApiProperty({ title: '商品销量' })
  @prop()
  sales: number;
}
// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ChatMessages {
  @ApiProperty({ title: '发送人关联表' })
  @prop({ enum: ['User', 'CustomerService'], required: true })
  userRef: string;

  @ApiProperty({ title: '接受人关联表' })
  @prop({ enum: ['User', 'CustomerService'], required: true })
  targetRef: string;

  @ApiProperty({ title: '发送人id' })
  @prop({ required: true, refPath: 'userRef' })
  user: Ref<User | CustomerService>;

  @ApiProperty({ title: '接收人id' })
  @prop({ required: true, refPath: 'targetRef' })
  target: Ref<User | CustomerService>;

  @ApiProperty({ title: '是否已读' })
  @prop({ type: Boolean, default: false })
  isRead: false;

  @ApiProperty({ title: '信息内容' })
  @prop({ type: String })
  content?: string;

  @ApiProperty({ title: '是否为游客' })
  @prop({ type: Boolean, default: false })
  isTourist: false;

  @ApiProperty({
    title: '信息类型',
    description: '1: 文本，2: 表情，3: 图片, 4: 语音，5：商品推送',
  })
  @prop({ text: Number, default: 1 })
  messageType: number;

  @ApiProperty({ title: '推送商品信息' })
  @prop({ type: PushProductType })
  product?: PushProductType;
}
