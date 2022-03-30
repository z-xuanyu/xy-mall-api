/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-30 14:03:22
 * @LastEditTime: 2022-03-30 16:03:40
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryOrderDto extends PaginationParametersDto {
  @ApiProperty({ required: false, name: '用户名称' })
  userName?: string;

  @ApiProperty({ required: false, name: '商品名称' })
  productName?: string;

  @ApiProperty({
    type: Number,
    required: false,
    name: '订单类型',
  })
  type?: number;

  @ApiProperty({
    type: Number,
    required: false,
    name: '订单状态',
  })
  status?: number;

  @ApiProperty({
    type: Number,
    required: false,
    name: '支付方式',
  })
  paymentType?: number;

  @ApiProperty({ required: false, name: '订单来源' })
  source?: string;
}
