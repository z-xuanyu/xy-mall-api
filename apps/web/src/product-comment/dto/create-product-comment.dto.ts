/*
 * @Author: xuanyu
 * @LastEditors: xuanyu 969718197@qq.com
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:46:06
 * @LastEditTime: 2023-08-02 15:17:55
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCommentDto {
  @ApiProperty({ title: '订单id' })
  orderId: string;

  userId: string | unknown;

  @ApiProperty({ title: '商品id' })
  productId: string;

  @ApiProperty({ title: '评价星级', type: Number })
  rate: number;

  @ApiProperty({ title: '评论内容' })
  content: string;

  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  images: Array<string>;

  @ApiProperty({ title: '物流星级' })
  logisticsRate: number;

  @ApiProperty({ title: '服务星级' })
  serviceRate: number;

  @ApiProperty({ title: '是否匿名' })
  anonymous: boolean;
}
