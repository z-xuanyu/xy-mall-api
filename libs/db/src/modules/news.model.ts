/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 11:26:08
 * @LastEditTime: 2022-01-06 11:28:58
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
export class News {
  @ApiProperty({ title: '文章标题' })
  @prop({ required: true })
  title: string;

  @ApiProperty({ title: '文章标签' })
  @prop({ required: true, type: Array })
  tags: Array<string>;

  @ApiProperty({ title: '文章内容' })
  @prop({ required: true })
  content: string;
}
