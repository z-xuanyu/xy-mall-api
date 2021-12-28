/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 16:26:23
 * @LastEditTime: 2021-12-28 16:43:00
 * @Description: 产品专题
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Category } from './category.model';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ProductTopic {
  @ApiProperty({ title: '产品专题标题' })
  @prop({ required: true })
  title: string;

  @ApiProperty({ title: '产品专题大标题' })
  @prop({ required: true })
  bigTitle: string;

  @ApiProperty({ title: '产品专题描述' })
  @prop({ required: true })
  description: string;

  @ApiProperty({ title: '产品专题图片' })
  @prop({ required: true })
  pic: string;

  @ApiProperty({ title: '产品分类id' })
  @prop({ ref: () => Category, required: true })
  category: Ref<Category>;
}
