/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-02 16:59:13
 * @LastEditTime: 2022-04-02 17:01:49
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
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
