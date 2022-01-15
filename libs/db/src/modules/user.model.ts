/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:03:28
 * @LastEditTime: 2022-01-15 15:25:20
 * @Description: Modify here please
 */
import { Gender } from '@app/common/enum/user.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  prop,
  ModelOptions,
  DocumentType,
  Severity,
} from '@typegoose/typegoose';

import { hashSync } from 'bcryptjs';
export type UserDocument = DocumentType<User>;
// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
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

  @ApiProperty({ title: '头像' })
  @prop()
  avatar: string;

  @ApiProperty({ title: '性别', enum: Gender, type: Number })
  @prop()
  gender?: Gender;

  @ApiProperty({ title: '手机号' })
  @prop({ trim: true, type: String, unique: true })
  phone?: string;

  @ApiProperty({ title: '登录次数' })
  @prop({ default: 0 })
  loginCount: number;

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

  @ApiProperty({ title: '消费金额' })
  @prop({ default: 0 })
  consumptionAmount: number;

  @ApiProperty({ title: '消费次数' })
  @prop({ default: 0 })
  consumptionCount: number;

  @ApiProperty({ title: '状态' })
  @prop({ default: true })
  status: boolean;
}
