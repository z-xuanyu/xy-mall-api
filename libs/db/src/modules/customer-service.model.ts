/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-21 18:15:07
 * @LastEditTime: 2022-04-21 18:24:21
 * @Description: 客服实体模型
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';
import { hashSync } from 'bcryptjs';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class CustomerService {
  @ApiProperty({ title: '客服名称' })
  @prop({ type: String })
  name: string;

  @ApiProperty({ title: '手机号' })
  @prop({ type: String })
  phone: string;

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

  @ApiProperty({ title: '头像' })
  @prop({ type: String })
  avatar: string;

  @ApiProperty({ title: '状态' })
  @prop({ type: Boolean })
  status: boolean;
}
