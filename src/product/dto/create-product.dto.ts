/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 15:01:54
 * @LastEditTime: 2021-12-28 16:08:40
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class SkuDto {
  @ApiProperty({ title: '规格id' })
  id: number;

  @ApiProperty({ title: '规格名称' })
  name: string;
}

export class CreateProductDto {
  @ApiProperty({ title: '产品标题' })
  @IsNotEmpty({ message: '产品标题不能为空' })
  title: string;

  @ApiProperty({ title: '产品图片' })
  @IsNotEmpty({ message: '产品图片不能为空' })
  pic: string;

  @ApiProperty({ title: '产品描述' })
  @IsNotEmpty({ message: '产品描述不能为空' })
  description: string;

  @ApiProperty({ title: '产品分类' })
  @IsNotEmpty({ message: '产品分类不能为空' })
  category: string;

  @ApiProperty({ title: '产品标签', type: Array })
  @IsNotEmpty({ message: '产品标签不能为空' })
  tags: Array<string>;

  @ApiProperty({ title: '产品规格', type: [SkuDto] })
  @IsNotEmpty({ message: '产品规格不能为空' })
  sku: Array<SkuDto>;

  @ApiProperty({ title: '产品排序' })
  sort: number;
}
