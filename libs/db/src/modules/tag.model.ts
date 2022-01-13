/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-13 14:54:54
 * @LastEditTime: 2022-01-13 14:57:50
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Tag {
  @ApiProperty({ title: '名称' })
  @prop({ required: true, trim: true })
  name: string;

  @ApiProperty({ title: '描述' })
  @prop({ required: true, trim: true })
  description: string;

  @ApiProperty({ title: '状态' })
  @prop({ required: true, default: true })
  status: boolean;
}
