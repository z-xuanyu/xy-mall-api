/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:03:28
 * @LastEditTime: 2021-12-28 10:40:09
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { prop, ModelOptions, DocumentType } from '@typegoose/typegoose';

import { hashSync } from 'bcryptjs';
export type UserDocument = DocumentType<User>;
// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ title: '名称' })
  @prop({ required: true, trim: true })
  name: string;

  @ApiProperty({ title: '邮箱' })
  @prop({
    index: true,
    required: true,
    unique: true,
    trim: true,
  })
  email: string;

  @ApiProperty({ title: '密码' })
  @prop({
    required: true,
    select: false,
    trim: true,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;

  @ApiProperty({ title: '状态' })
  @prop({ default: true })
  status: boolean;
}
