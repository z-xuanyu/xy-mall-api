/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-13 15:00:59
 * @LastEditTime: 2022-02-14 10:47:08
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({ title: '名称' })
  @IsNotEmpty({ message: '名称不能为空' })
  name: string;

  @ApiProperty({
    title: '名称',
    type: Number,
    example: '1: 产品标签, 2: 文章标签',
  })
  @IsNotEmpty({ message: '类型不能为空' })
  type: number;

  @ApiProperty({ title: '描述' })
  @IsNotEmpty({ message: '描述不能为空' })
  description: string;
}
