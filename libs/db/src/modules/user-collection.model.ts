/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-25 16:47:09
 * @LastEditTime: 2022-02-25 16:51:58
 * @Description: 用户收藏
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Product } from './product.model';
import { User } from './user.model';

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class UserCollection {
  @ApiProperty({ title: '用户id' })
  @prop({ ref: () => User, required: true })
  userId: Ref<User>;

  @ApiProperty({ title: '商品id' })
  @prop({ ref: () => Product, required: true })
  productId: Ref<Product>;
}
