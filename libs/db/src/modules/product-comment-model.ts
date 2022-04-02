/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-20 10:56:11
 * @LastEditTime: 2022-03-29 17:47:23
 * @Description: 商品评价
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Product } from './product.model';
import { User } from './user.model';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ProductComment {
  @ApiProperty({ title: '用户ID' })
  @prop({ ref: () => User })
  userId: Ref<User>;

  @ApiProperty({ title: '商品ID' })
  @prop({ ref: () => Product })
  productId: Ref<Product>;

  @ApiProperty({ title: '评分星级' })
  @prop({ type: Number, default: 0 })
  rate: number;

  @ApiProperty({ title: '内容' })
  @prop({ type: String })
  content: string;

  @ApiProperty({ title: '评论商品图片' })
  @prop({ type: [String] })
  images: Array<string>;

  @ApiProperty({ title: '回复内容' })
  @prop({ type: String })
  replyContent?: string;
}