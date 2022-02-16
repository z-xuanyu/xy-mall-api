/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-04 10:23:58
 * @LastEditTime: 2022-02-16 11:42:10
 * @Description: Modify here please
 */

import { BannerStatus, BannerType } from '@app/common/enum/banner.enum';
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Product } from './product.model';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Banner {
  @ApiProperty({ title: '名称' })
  @prop({ required: true })
  name: string;

  @ApiProperty({ title: 'banner排序', description: '整数数字类型' })
  @prop({ default: 1 })
  sort: number;

  @ApiProperty({ title: 'banner图片' })
  @prop({ required: true })
  image: string;

  @ApiProperty({ title: '链接' })
  @prop()
  url: string;

  @ApiProperty({ title: '类型' })
  @prop({ enum: BannerType, type: Number, default: BannerType.None })
  type: BannerType;

  @ApiProperty({ title: '状态' })
  @prop({ enum: BannerStatus, type: Number, default: BannerStatus.Normal })
  status: BannerStatus;

  @ApiProperty({ title: '关联产品id' })
  @prop({ ref: () => Product, default: null })
  product?: Ref<Product>;
}
