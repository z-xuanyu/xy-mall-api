/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-07 15:02:08
 * @LastEditTime: 2022-05-07 15:34:26
 * @Description: 优惠券模型
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Product } from './product.model';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Coupon {
  @ApiProperty({ title: '优惠券名称' })
  @prop({ required: true })
  name: string;

  @ApiProperty({ title: '优惠券类型', description: '1:通用 2:满减券 3:折扣券' })
  @prop({ required: true, default: 1 })
  type: number;

  @ApiProperty({ title: '优惠券金额' })
  @prop({ required: true })
  amount: number;

  @ApiProperty({ title: '优惠券有效期', description: '单位:天' })
  @prop({ required: true, type: Number, default: 0 })
  validTime: number;

  @ApiProperty({ title: '优惠券使用条件' })
  @prop({ required: true })
  condition: number;

  @ApiProperty({ title: '优惠券使用说明' })
  @prop({ required: true })
  description: string;

  @ApiProperty({ title: '优惠券状态' })
  @prop({ required: true, default: 1 })
  status: number;

  @ApiProperty({ title: '优惠券关联商品' })
  @prop({ required: true, ref: () => Product, type: [Product] })
  productId: Ref<Product>[];

  @ApiProperty({ title: '排序' })
  @prop({ required: true, default: 1 })
  sort: number;
}
