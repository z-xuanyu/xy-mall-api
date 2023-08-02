/*
 * @Author: xuanyu
 * @LastEditors: xuanyu 969718197@qq.com
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-15 11:02:01
 * @LastEditTime: 2023-08-02 15:25:16
 * @Description: 添加购物车
 */
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

export class CreateUserCartDto {
  userId?: ObjectId;

  @ApiProperty({ title: '商品id' })
  productId: string;

  @ApiProperty({ title: '商品标题' })
  productName?: string;

  @ApiProperty({ title: '商品封面图' })
  productPic?: string;

  @ApiProperty({ title: '选购数量' })
  num: number;

  @ApiProperty({ title: '选购规格名称' })
  skuName?: string;

  @ApiProperty({ title: 'skuId' })
  skuId?: string;

  @ApiProperty({ title: '选购金额' })
  price: number;
}
