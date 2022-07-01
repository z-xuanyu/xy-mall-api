/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-07-01 17:05:02
 * @LastEditTime: 2022-07-01 17:12:21
 * @Description: 用户标签
 */

import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { User } from './user.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    customName: 'user_label',
  },
})
export class UserLabel {
  @ApiProperty({ name: '名称' })
  @prop({ required: true })
  name: string;

  @ApiProperty({
    name: '类型',
    type: Number,
    enum: [1, 2],
    description: '1: 手动添加，2: 自动添加',
  })
  @prop({ enum: [1, 2], default: 1, type: Number })
  type: number;

  @ApiProperty({ name: '用户数' })
  @prop({ type: Number, default: 0 })
  userCount: number;

  @ApiProperty({ name: '用户id' })
  @prop({ ref: () => User })
  userId?: Ref<User>;
}
