/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-22 16:26:17
 * @LastEditTime: 2022-03-22 16:35:44
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class QueryUserOrderDto {
  @ApiProperty({ title: '订单状态' })
  status: number;
}
