/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:55:35
 * @LastEditTime: 2022-03-28 17:22:00
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { prop, ModelOptions, DocumentType, Ref } from '@typegoose/typegoose';

import { hashSync } from 'bcryptjs';
import { Role } from './role.model';
export type AdminDocument = DocumentType<Admin>;
// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Admin {
  @ApiProperty({ title: '名称' })
  @prop({ required: true })
  name: string;

  @ApiProperty({ title: '邮箱' })
  @prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ title: '密码' })
  @prop({
    required: true,
    select: false,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;

  @ApiProperty({ title: '关联角色' })
  @prop({ ref: () => Role, type: [Role] })
  roleIds: Ref<Role>[];

  @ApiProperty({ title: '状态' })
  @prop({ default: true })
  status: boolean;

  @ApiProperty({ title: '是否在线' })
  @prop({ type: Boolean, default: false })
  isOnline: boolean;
}
