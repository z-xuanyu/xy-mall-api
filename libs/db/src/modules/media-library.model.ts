/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-07 10:47:10
 * @LastEditTime: 2022-01-08 14:30:17
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { LibraryCategory } from './library-category.model';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class MediaLibrary {
  @ApiProperty({ title: '名称' })
  @prop()
  name: string;

  @ApiProperty({ title: '文件分类' })
  @prop({ ref: () => LibraryCategory, default: null })
  categoryId: Ref<LibraryCategory>;

  @ApiProperty({ title: '文件地址' })
  @prop({ required: true })
  url: string;
}
