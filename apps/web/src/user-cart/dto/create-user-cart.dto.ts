/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-15 11:02:01
 * @LastEditTime: 2022-04-14 17:21:02
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserCartDto {
  @ApiProperty({ title: '用户id' })
  userId?: string;

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

  @ApiProperty({ title: '选购金额' })
  price: number;
}
