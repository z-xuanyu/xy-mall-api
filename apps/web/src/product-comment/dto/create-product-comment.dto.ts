/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:46:06
 * @LastEditTime: 2022-03-21 18:12:03
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCommentDto {
  userId: string;

  @ApiProperty({ title: '商品id' })
  productId: string;

  @ApiProperty({ title: '评价星级' })
  rate: string;

  @ApiProperty({ title: '评论内容' })
  content: string;

  @ApiProperty({ title: '评论图片', type: [String] })
  images: Array<string>;
}
