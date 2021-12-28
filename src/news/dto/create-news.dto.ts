/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 11:32:42
 * @LastEditTime: 2021-12-28 11:37:01
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateNewsDto {
  @ApiProperty({ title: '文章标题' })
  @IsNotEmpty({ message: '名称不能为空' })
  title: string;

  @ApiProperty({ title: '文章标签', type: Array })
  @IsNotEmpty({ message: '标签不能为空' })
  tags: Array<string>;

  @ApiProperty({ title: '文章内容' })
  @IsNotEmpty({ message: '文章内容不能为空' })
  content: string;
}
