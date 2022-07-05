/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-20 10:56:11
 * @LastEditTime: 2022-07-05 15:43:05
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
  options: {
    customName: 'product_comment',
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

  @ApiProperty({ title: '物流星级' })
  @prop({ type: Number, default: 0 })
  logisticsRate: number;

  @ApiProperty({ title: '服务星级' })
  @prop({ type: Number, default: 0 })
  serviceRate: number;

  @ApiProperty({ title: '是否匿名' })
  @prop({ type: Boolean, default: false })
  anonymous: boolean;

  @ApiProperty({ title: '回复数' })
  @prop({ type: Number, default: 0 })
  replyCount: number;

  @ApiProperty({ title: '点赞数' })
  @prop({ type: Number, default: 0 })
  like: number;

  @ApiProperty({ title: '评论视频' })
  @prop()
  videos: [{ mainUrl: string; videoUrl: string }];

  @ApiProperty({ title: '评论人购买的商品规格' })
  @prop({ type: String })
  size: string;

  @ApiProperty({ title: '追评内容' })
  @prop({ type: String, default: '' })
  followContent: string;

  @ApiProperty({ title: '追评图片' })
  @prop({ type: [String] })
  followImages?: Array<string>;

  @ApiProperty({ title: '追评天数' })
  @prop({ type: Number, default: 0 })
  followDays: number;
}
