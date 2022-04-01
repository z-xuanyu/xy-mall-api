/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 14:45:35
 * @LastEditTime: 2022-04-01 15:47:25
 * @Description: 产品模型
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref, Severity } from '@typegoose/typegoose';
import { ProductSkuSelectType } from 'libs/common/enum/product.enum';
import { Category } from './category.model';
import { Tag } from './tag.model';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
class SkuDataType {
  @ApiProperty({ title: '规格价格' })
  @prop()
  price: number;

  @ApiProperty({ title: '库存' })
  @prop()
  inventory: number;

  @ApiProperty({ title: '成本价' })
  @prop()
  costPrice: number;

  @ApiProperty({ title: '重量' })
  @prop()
  weight: number;

  @ApiProperty({ title: '规格图片' })
  @prop()
  image: number;

  @ApiProperty({ title: '货号' })
  @prop()
  artNo: number;

  @ApiProperty({ title: '规格名称集合' })
  @prop({ type: [String] })
  skuNames: string[];
}

class SkuAttrType {
  @ApiProperty({ title: '规格属性名称' })
  @prop()
  name: string;

  @ApiProperty({ title: '规格属性名称' })
  @prop({ type: [String] })
  values: string[];
}
export class Product {
  @ApiProperty({ title: '商品标题' })
  @prop({ required: true })
  title: string;

  @ApiProperty({ title: '副标题' })
  @prop({ required: true })
  subTitle: string;

  @ApiProperty({ title: '商品图片' })
  @prop({ required: true })
  pic: string;

  @ApiProperty({ title: '商品轮播图' })
  @prop({ type: [String] })
  bannerImg: string[];

  @ApiProperty({ title: '商品描述' })
  @prop({ required: true })
  description: string;

  @ApiProperty({ title: '商品分类' })
  @prop({ ref: () => Category })
  category: Ref<Category>;

  @ApiProperty({ title: '商品标签' })
  @prop({ type: [Tag], ref: () => Tag })
  tags?: Ref<Tag>[];

  @ApiProperty({ title: '商品价格' })
  @prop({ default: 0, required: true })
  price: number;

  @ApiProperty({ title: '折扣价' })
  @prop({ type: Number, default: 0 })
  costPrice: number;

  @ApiProperty({ title: '商品库存' })
  @prop({ default: 0, required: true })
  inventory: number;

  @ApiProperty({ title: '商品销量' })
  @prop({ default: 0, required: true })
  sales: number;

  @ApiProperty({ title: '商品浏览量' })
  @prop({ default: 0, required: true })
  views: number;

  @ApiProperty({ title: '规格类型' })
  @prop({
    default: ProductSkuSelectType.SINGLE,
    type: Number,
    enum: ProductSkuSelectType,
  })
  skuType: ProductSkuSelectType;

  @ApiProperty({ title: '商品规格' })
  @prop({ type: [SkuDataType] })
  skus: SkuDataType[];

  @ApiProperty({ title: '规格属性' })
  @prop({ type: [SkuAttrType] })
  skuAttrs: SkuAttrType[];

  @ApiProperty({ title: '商品排序', description: '整数数字类型' })
  @prop({ default: 1 })
  sort: number;

  @ApiProperty({ title: '分类状态', example: true })
  @prop({ default: true })
  status: boolean;

  @ApiProperty({ title: '是否限时精选', example: false })
  @prop({ default: false })
  isTimeLimit: boolean;

  @ApiProperty({ title: '是否热门推荐', example: false })
  @prop({ default: false })
  isHot: boolean;

  @ApiProperty({ title: '分享数', example: 0 })
  @prop({ default: 0 })
  shareCount: number;

  @ApiProperty({ title: '收藏数', example: 0 })
  @prop({ default: 0 })
  collectionCount: number;
}
