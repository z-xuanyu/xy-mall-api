/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-16 17:18:29
 * @LastEditTime: 2022-03-17 10:51:44
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Product } from './product.model';
import { UserAddress } from './user-address.model';
import { User } from './user.model';

class BuyProduct {
  @ApiProperty({ title: '商品id' })
  @prop({ ref: () => Product })
  productId: Ref<Product>;

  @ApiProperty({ title: '商品选购数量' })
  @prop()
  num: number;

  @ApiProperty({ title: '商品价格' })
  @prop()
  price: number;

  @ApiProperty({ title: '商品规格名' })
  @prop()
  skuName: string;
}
// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Order {
  @ApiProperty({ title: '订单编号' })
  @prop()
  orderNo: string;

  @ApiProperty({ title: '订单选购商品集合' })
  @prop({ type: [BuyProduct] })
  products: Array<BuyProduct>;

  @ApiProperty({ title: '下单人' })
  @prop({ ref: () => User })
  userId: Ref<User>;

  @ApiProperty({ title: '订单总额' })
  @prop({ type: Number })
  totalPrice: number;

  @ApiProperty({ title: '实际付款' })
  @prop({ type: Number })
  payment: number;

  @ApiProperty({ title: '支付状态' })
  @prop({ type: Number })
  status: number;

  @ApiProperty({ title: '订单类型' })
  @prop({ type: Number })
  type: number;

  @ApiProperty({ title: '支付方式' })
  @prop({ type: Number })
  paymentType: number;

  @ApiProperty({ title: '订单收货人地址' })
  @prop({ ref: () => UserAddress })
  addressId: Ref<UserAddress>;

  @ApiProperty({ title: '订单来源' })
  @prop({ type: String })
  source: string;
}
