/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 15:01:54
 * @LastEditTime: 2022-02-14 10:39:47
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class SkuDataType {
  @ApiProperty({ title: '规格值' })
  value: string;

  @ApiProperty({ title: '规格值' })
  price: number;

  @ApiProperty({ title: '库存' })
  inventory: number;

  @ApiProperty({ title: '成本价' })
  costPrice: number;

  @ApiProperty({ title: '重量' })
  weight: number;

  @ApiProperty({ title: '规格图片' })
  image: number;

  @ApiProperty({ title: '货号' })
  artNo: number;
}

class SkuType {
  @ApiProperty({ title: '规格名称' })
  skuName: string;

  @ApiProperty({ title: '规格值集合', type: [SkuDataType] })
  skuValues: SkuDataType[];
}

export class CreateProductDto {
  @ApiProperty({ title: '产品标题' })
  @IsNotEmpty({ message: '产品标题不能为空' })
  title: string;

  @ApiProperty({ title: '副标题' })
  @IsNotEmpty({ message: '副标题不能为空' })
  subTitle: string;

  @ApiProperty({ title: '产品图片' })
  @IsNotEmpty({ message: '产品图片不能为空' })
  pic: string;

  @ApiProperty({ title: '产品轮播图', type: [String] })
  bannerImg: Array<string>;

  @ApiProperty({ title: '产品描述' })
  @IsNotEmpty({ message: '产品描述不能为空' })
  description: string;

  @ApiProperty({ title: '产品分类' })
  @IsNotEmpty({ message: '产品分类不能为空' })
  category: string;

  @ApiProperty({ title: '产品标签', type: [String] })
  @IsNotEmpty({ message: '产品标签不能为空' })
  tags: Array<string>;

  @ApiProperty({ title: '产品价格' })
  price: number;

  @ApiProperty({ title: '产品库存' })
  inventory: number;

  @ApiProperty({ title: '产品销量' })
  sales: number;

  @ApiProperty({ title: '产品浏览量' })
  views: number;

  @ApiProperty({
    title: '规格选择',
    default: 1,
    description: '1: 单规格，2: 多规格，3: 无',
  })
  skuType: number;

  @ApiProperty({ title: '产品规格', type: [SkuType] })
  sku: Array<SkuType>;

  @ApiProperty({ title: '产品排序' })
  sort: number;

  @ApiProperty({ title: '产品状态' })
  status: boolean;
}
