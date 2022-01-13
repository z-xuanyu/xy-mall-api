/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 15:01:54
 * @LastEditTime: 2022-01-13 11:21:09
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

  @ApiProperty({ title: '产品价格' })
  @IsNotEmpty({ message: '价格不能为空' })
  price: number;

  @ApiProperty({ title: '产品库存' })
  inventory: number;

  @ApiProperty({ title: '产品销量' })
  sales: number;

  @ApiProperty({ title: '产品浏览量' })
  views: number;

  @ApiProperty({ title: '产品规格', type: [SkuDto] })
  @IsNotEmpty({ message: '产品规格不能为空' })
  sku: Array<SkuDto>;

  @ApiProperty({ title: '产品排序' })
  sort: number;

  @ApiProperty({ title: '产品状态' })
  status: boolean;
}
