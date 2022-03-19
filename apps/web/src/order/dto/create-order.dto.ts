/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-19 00:45:38
 * @LastEditTime: 2022-03-19 14:16:48
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

// 选购商信息
class BuyProduct {
  @ApiProperty({ title: '商品id' })
  productId: string;

  @ApiProperty({ title: '商品选购数量' })
  num: number;

  @ApiProperty({ title: '商品价格' })
  price: number;

  @ApiProperty({ title: '商品规格名' })
  skuName: string;
}

export class CreateOrderDto {
  @ApiProperty({ title: '选购商品集合', type: [BuyProduct] })
  products: Array<BuyProduct>;

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

  @ApiProperty({ title: '备注' })
  remark: string;
}
