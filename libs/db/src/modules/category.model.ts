/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 16:13:19
 * @LastEditTime: 2021-12-27 16:15:55
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Category {
  @ApiProperty({ title: '名称' })
  @prop({ required: true })
  name: string;

  @ApiProperty({ title: '类别排序', description: '整数数字类型' })
  @prop({ default: 1 })
  sort: number;

  @ApiProperty({ title: '分类状态', example: true })
  @prop({ default: true })
  status: boolean;

  @ApiProperty({ title: '上级分类', default: null })
  @prop({ ref: () => Category, default: null })
  parentId: Ref<Category> | null;
}
