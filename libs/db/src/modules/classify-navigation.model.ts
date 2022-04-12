/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-16 17:06:37
 * @LastEditTime: 2022-04-12 14:57:46
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ClassifyNavigation {
  @ApiProperty({ title: '导航名称' })
  @prop({ required: true, trim: true })
  name: string;

  @ApiProperty({ title: '导航图片' })
  @prop({ required: true })
  pic: string;

  @ApiProperty({ title: '导航图片' })
  @prop({ required: true, default: 1 })
  type: number;

  @ApiProperty({ title: '页面路径' })
  @prop()
  pagePath: string;

  @ApiProperty({ title: '网页url' })
  @prop()
  url: string;

  @ApiProperty({ title: '状态' })
  @prop({ default: true })
  status: boolean;

  @ApiProperty({ title: '排序' })
  @prop({ type: Number, default: 1 })
  sort: number;

  @ApiProperty({ title: '备注' })
  @prop()
  remark: string;
}
