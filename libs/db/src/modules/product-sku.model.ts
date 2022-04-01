/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-15 11:30:46
 * @LastEditTime: 2022-04-01 14:54:43
 * @Description: 产品规格模型
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref, Severity } from '@typegoose/typegoose';
import { Product } from './product.model';

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
  @ApiProperty({ title: '商品id' })
  @prop({ ref: () => Product, required: true })
  productId: Ref<Product>;

  @ApiProperty({ title: '规格商品图片' })
  @prop()
  image: string;

  @ApiProperty({ title: '规格商品库存' })
  @prop({ required: true, type: Number })
  inventory: number;

  @ApiProperty({ title: '规格商品原价' })
  @prop({ required: true, type: Number })
  costPrice: number;

  @ApiProperty({ title: '规格商品价格' })
  @prop({ required: true, type: Number })
  price: number;

  @ApiProperty()
  @prop({ required: true })
  weight: number | string;

  @ApiProperty({ title: '货号' })
  @prop()
  artNo: number | string;

  @ApiProperty({ title: '规格属性值集' })
  @prop()
  skuNames: string[];
}
