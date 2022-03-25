/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:46:06
 * @LastEditTime: 2022-03-23 16:24:02
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCommentDto {
  @ApiProperty({ title: '订单id' })
  orderId: string;

  userId: string;

  @ApiProperty({ title: '商品id' })
  productId: string;

  @ApiProperty({ title: '评价星级', type: Number })
  rate: number;

  @ApiProperty({ title: '评论内容' })
  content: string;

  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  images: Array<string>;
}
