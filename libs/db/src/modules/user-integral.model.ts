/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-07-01 09:59:12
 * @LastEditTime: 2022-07-01 10:34:28
 * @Description: 用户积分
 */
import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { User } from './user.model';

@modelOptions({
  options: {
    customName: 'user_integral',
  },
  schemaOptions: {
    timestamps: true,
  },
})
export class UserIntegral {
  @ApiProperty({ title: '用户id' })
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  @ApiProperty({ title: '积分' })
  @prop({ required: true })
  integral: number;
}
