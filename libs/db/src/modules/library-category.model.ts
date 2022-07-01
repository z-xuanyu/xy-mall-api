/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-07 10:48:42
 * @LastEditTime: 2022-07-01 11:07:23
 * @Description: 媒体文件分类
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    customName: 'library_category',
  },
})
export class LibraryCategory {
  @ApiProperty({ title: '分类名称' })
  @prop({ required: true })
  name: string;

  @ApiProperty({ title: '上级分类' })
  @prop({ ref: () => LibraryCategory, default: null })
  parentId: Ref<LibraryCategory>;
}
