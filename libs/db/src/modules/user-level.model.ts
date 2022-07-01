/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-15 16:48:45
 * @LastEditTime: 2022-07-01 10:44:32
 * @Description: 会员等级
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    customName: 'user_level',
  },
})
export class UserLevel {
  @ApiProperty({ title: '会员等级' })
  icon: string;

  @ApiProperty({ title: '等级背景图' })
  @prop({ type: String })
  bgUrl: string;

  @ApiProperty({ title: '等级名称' })
  @prop({ type: String })
  name: string;

  @ApiProperty({ title: '等级' })
  @prop({ type: Number })
  level: number;

  @ApiProperty({ title: '享受折扣' })
  @prop({ type: Number })
  discount: number;

  @ApiProperty({ title: '解锁经验值' })
  @prop({ type: Number })
  unlockExperience: number;

  @ApiProperty({ title: '等级说明' })
  @prop({ type: String })
  remark: string;

  @ApiProperty({ title: '等级状态' })
  @prop({ type: Boolean })
  status: boolean;
}
