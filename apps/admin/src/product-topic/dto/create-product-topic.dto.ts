/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 16:45:17
 * @LastEditTime: 2021-12-28 17:30:31
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductTopicDto {
  @ApiProperty({ title: '标题' })
  @IsNotEmpty({ message: '标题不能为空' })
  title: string;

  @ApiProperty({ title: '大标题' })
  @IsNotEmpty({ message: '大标题不能为空' })
  bigTitle: string;

  @ApiProperty({ title: '描述' })
  @IsNotEmpty({ message: '描述不能为空' })
  description: string;

  @ApiProperty({ title: '图片' })
  @IsNotEmpty({ message: '图片不能为空' })
  pic: string;

  @ApiProperty({ title: '产品分类id' })
  @IsNotEmpty({ message: '分类id不能为空' })
  category: string;
}
