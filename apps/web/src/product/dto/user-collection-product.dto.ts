/*
 * @Author: xuanyu
 * @LastEditors: xuanyu 969718197@qq.com
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 15:10:46
 * @LastEditTime: 2023-08-02 15:27:36
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

export class UserCollectionProductDto {
  @ApiProperty({ title: '用户id' })
  userId: ObjectId;

  @ApiProperty({ title: '商品id' })
  productId: string;
}
