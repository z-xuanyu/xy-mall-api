/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-19 00:45:38
 * @LastEditTime: 2022-06-30 12:20:22
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

// 选购商信息
class BuyProduct {
  @ApiProperty({ title: '商品id' })
  productId: string;

  @ApiProperty({ title: '商品标题' })
  productName: string;

  @ApiProperty({ title: '商品封面图' })
  productPic: string;

  @ApiProperty({ title: '商品选购数量' })
  num: number;

  @ApiProperty({ title: '商品价格' })
  price: number;

  @ApiProperty({ title: '商品规格id' })
  skuId?: string;

  @ApiProperty({ title: '商品规格名' })
  skuName: string;
}

export class CreateOrderDto {
  userId: string;

  @ApiProperty({
    title: '创建方式',
    description: '0: 购物车，1: 立即购买',
    default: 0,
  })
  way: number;

  @ApiProperty({ title: '选购商品集合', type: [BuyProduct] })
  products?: Array<BuyProduct>;

  @ApiProperty({ title: '购物车记录id集合', default: [] })
  cartIds: Array<string>;

  @ApiProperty({ title: '地址id' })
  addressId: string;

  @ApiProperty({ title: '支付方式' })
  paymentType: number;

  @ApiProperty({ title: '订单来源' })
  source: string;

  @ApiProperty({ title: '订单总额' })
  totalPrice: number;

  @ApiProperty({ title: '实际付款' })
  payment: number;

  @ApiProperty({
    title: '优惠券id',
    description: '用户优惠券id，有就使用就传，则无',
  })
  couponId?: string;

  @ApiProperty({ title: '备注' })
  remark: string;
}
