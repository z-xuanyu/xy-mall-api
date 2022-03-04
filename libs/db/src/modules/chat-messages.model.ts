/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-04 09:50:34
 * @LastEditTime: 2022-03-04 13:55:15
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Admin } from './admin.model';
import { User } from './user.model';
// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ChatMessages {
  @ApiProperty({ title: '用户id' })
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  @ApiProperty({ title: '目标id' })
  @prop({ required: true, ref: () => Admin })
  targetId: Ref<Admin>;

  @ApiProperty({ title: '是否已读' })
  @prop()
  isRead: false;

  @ApiProperty({ title: '信息内容' })
  @prop({ type: String })
  content: string;
}
