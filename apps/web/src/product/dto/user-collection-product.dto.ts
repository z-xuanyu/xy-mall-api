/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 15:10:46
 * @LastEditTime: 2022-03-03 15:12:39
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class UserCollectionProductDto {
  @ApiProperty({ title: '用户id' })
  userId: string;

  @ApiProperty({ title: '商品id' })
  productId: string;
}
