/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-31 17:08:29
 * @LastEditTime: 2022-07-01 10:58:06
 * @Description: 商品sku属性
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Product } from './product.model';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    customName: 'product_sku_attr',
  },
})
export class ProductSkuAttr {
  @ApiProperty({ title: '属性名称' })
  @prop()
  name: string;

  @ApiProperty({ title: '商品id' })
  @prop({ ref: () => Product, default: null })
  productId: Ref<Product>;

  @ApiProperty({ title: '属性值' })
  @prop({ type: [String] })
  values: string[];
}
