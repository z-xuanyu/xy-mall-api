/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-25 15:42:08
 * @LastEditTime: 2022-02-25 15:58:07
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { User } from './user.model';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class UserAddress {
  @ApiProperty({ title: '收货名字' })
  @prop({ required: true })
  name: string;

  @ApiProperty({ title: '收货人手机号' })
  @prop({ required: true })
  phone: string;

  @ApiProperty({ title: '收货人地址' })
  @prop({ required: true })
  address: string;

  @ApiProperty({ title: '详细地址' })
  @prop({ required: true })
  detail: string;

  @ApiProperty({ title: '备注' })
  @prop({ type: String })
  remark: string;

  @ApiProperty({ title: '是否为默认' })
  @prop({ default: false })
  isDefault: boolean;

  @ApiProperty({ title: '关联用户id' })
  @prop({ ref: () => User })
  userId: Ref<User>;
}
