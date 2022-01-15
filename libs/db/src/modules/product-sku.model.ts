/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-15 11:30:46
 * @LastEditTime: 2022-01-15 14:24:52
 * @Description: 产品规格模型
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Severity } from '@typegoose/typegoose';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class ProductSku {
  @ApiProperty({ title: '规格名称' })
  @prop({ required: true })
  name: string;

  @ApiProperty({ title: '规格数值' })
  @prop({ required: true })
  sku: string[];
}
