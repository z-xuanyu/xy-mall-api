/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-02 16:59:13
 * @LastEditTime: 2022-07-01 10:57:07
 * @Description: 商品单位
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    customName: 'product_unit',
  },
})
export class ProductUnit {
  @ApiProperty({ title: '商品单位名称' })
  @prop()
  name: string;

  @ApiProperty({ title: '商品单位名称' })
  @prop({ default: 1 })
  sort: number;
}
