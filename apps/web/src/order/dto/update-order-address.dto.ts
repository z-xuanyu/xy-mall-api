/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-30 17:27:41
 * @LastEditTime: 2022-06-30 17:28:43
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderAddressDto {
  @ApiProperty({ title: '收货地址id' })
  addressId: string;

  @ApiProperty({ title: '订单id' })
  orderId: string;
}
