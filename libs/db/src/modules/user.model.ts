/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:03:28
 * @LastEditTime: 2022-06-28 10:52:24
 * @Description: 会员模型
 */
import { ApiProperty } from '@nestjs/swagger';
import { prop, ModelOptions, DocumentType, Severity } from '@typegoose/typegoose';

import { hashSync } from 'bcryptjs';
import { Gender } from 'libs/common/enum/user.enum';
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
  @ApiProperty({ title: '用户昵称' })
  @prop()
  nickName?: string;

  @ApiProperty({ title: '邮箱' })
  @prop({
    index: true,
    unique: true,
    trim: true,
  })
  email?: string;

  @ApiProperty({ title: '头像' })
  @prop()
  avatarUrl?: string;

  @ApiProperty({ title: '性别', enum: Gender, type: Number })
  @prop()
  gender?: Gender;

  @ApiProperty({ title: '手机号' })
  @prop({ trim: true, type: String, unique: true })
  phone?: string;

  @ApiProperty({ title: '登录次数' })
  @prop({ default: 0 })
  loginCount?: number;

  @ApiProperty({ title: '密码' })
  @prop({
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

  @ApiProperty({ title: '小程序用户openid' })
  @prop({
    type: String,
  })
  openid?: string;

  @ApiProperty({ title: '小程序sessionkey' })
  @prop({
    type: String,
  })
  sessionKey?: string;

  @ApiProperty({ title: '消费金额' })
  @prop({ default: 0 })
  consumptionAmount?: number;

  @ApiProperty({ title: '消费次数' })
  @prop({ default: 0 })
  consumptionCount?: number;

  @ApiProperty({ title: '状态' })
  @prop({ default: true, type: Boolean })
  status: boolean;

  @ApiProperty({ title: '是否在线' })
  @prop({ type: Boolean, default: false })
  isOnline: boolean;
}
