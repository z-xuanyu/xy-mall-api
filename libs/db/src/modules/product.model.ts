/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 14:45:35
 * @LastEditTime: 2021-12-28 15:42:52
 * @Description: 产品模型
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
export class Product {
  @ApiProperty({ title: '产品名称' })
  @prop({ required: true })
  title: string;

  @ApiProperty({ title: '产品图片' })
  @prop({ required: true })
  pic: string;

  @ApiProperty({ title: '产品描述' })
  @prop({ required: true })
  description: string;

  @ApiProperty({ title: '产品分类' })
  @prop({ ref: () => Category })
  category: Ref<Category>;

  @ApiProperty({ title: '产品标签' })
  @prop({ type: Array })
  tags: Array<string>;

  @ApiProperty({ title: '产品规格' })
  @prop({ type: Array })
  sku: Array<{ id: number; name: string }>;

  @ApiProperty({ title: '产品排序', description: '整数数字类型' })
  @prop({ default: 1 })
  sort: number;

  @ApiProperty({ title: '分类状态', example: true })
  @prop({ default: true })
  status: boolean;
}
