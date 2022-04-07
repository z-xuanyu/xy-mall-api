/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-07 12:00:38
 * @LastEditTime: 2022-04-07 14:58:06
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryUserOrdersDto extends PaginationParametersDto {
  @ApiProperty({ name: '会员id' })
  userId: string;

  @ApiProperty({ name: '订单id' })
  orderId: string;

  @ApiProperty({ name: '收货人名称' })
  addressName: string;
}
