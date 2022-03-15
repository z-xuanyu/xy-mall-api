/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-15 10:53:19
 * @LastEditTime: 2022-03-15 11:08:48
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Product } from './product.model';
import { User } from './user.model';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class UserCart {
  @ApiProperty({ title: '用户id' })
  @prop({ ref: () => User })
  userId: Ref<User>;

  @ApiProperty({ title: '商品id' })
  @prop({ ref: () => Product })
  productId: Ref<Product>;

  @ApiProperty({ title: '选购数量' })
  @prop({ type: Number })
  num: number;

  @ApiProperty({ title: '选购规格名称' })
  @prop({ type: String })
  skuName: string;

  @ApiProperty({ title: '选购规格价格' })
  @prop({ type: Number })
  price: number;
}
