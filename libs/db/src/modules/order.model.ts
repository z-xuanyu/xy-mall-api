/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-16 17:18:29
 * @LastEditTime: 2022-06-30 14:45:37
 * @Description: 订单相关实体模型
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { OrderStatus } from 'libs/common/enum/orderStatus.enum';
import { ProductSku } from './product-sku.model';
import { Product } from './product.model';
import { UserAddress } from './user-address.model';
import { User } from './user.model';

class BuyProduct {
  @ApiProperty({ title: '商品id' })
  @prop({ ref: () => Product })
  productId: Ref<Product>;

  @ApiProperty({ title: '商品标题' })
  @prop()
  productName: string;

  @ApiProperty({ title: '商品封面图' })
  @prop()
  productPic: string;

  @ApiProperty({ title: '商品选购数量' })
  @prop()
  num: number;

  @ApiProperty({ title: '商品价格' })
  @prop()
  price: number;

  @ApiProperty({ title: '商品规格id' })
  @prop({ ref: () => ProductSku })
  skuId?: Ref<ProductSku>;

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
  @ApiProperty({
    title: '订单编号',
    default: String(new Date().getFullYear) + String(new Date().getTime()),
  })
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
  @prop({ type: Number, default: OrderStatus.PENDING_PAY, enum: OrderStatus })
  status: OrderStatus;

  @ApiProperty({ title: '订单类型' })
  @prop({ type: Number, default: 1 })
  type: number;

  @ApiProperty({ title: '支付方式' })
  @prop({ type: Number, default: 0 })
  paymentType: number;

  @ApiProperty({ title: '支付编号' })
  @prop({ type: String })
  payNumber: string;

  @ApiProperty({ title: '订单收货人地址' })
  @prop({ ref: () => UserAddress })
  addressId: Ref<UserAddress>;

  @ApiProperty({ title: '支付时间' })
  @prop({ type: Date })
  payTime: Date;

  @ApiProperty({ title: '发货时间' })
  @prop({ type: Date })
  sendTime: Date;

  @ApiProperty({ title: '收货时间' })
  @prop({ type: Date })
  receivedTime: Date;

  @ApiProperty({ title: '评价时间' })
  @prop({ type: Date })
  evaluateTime: Date;

  @ApiProperty({ title: '完成时间' })
  @prop({ type: Date })
  finishTime: Date;

  @ApiProperty({ title: '订单来源' })
  @prop({ type: String })
  source: string;

  @ApiProperty({ title: '备注' })
  @prop({ type: String })
  remark: string;

  @ApiProperty({ title: '是否已经删除' })
  @prop({ type: Boolean, default: false })
  isDelete: boolean;
}
