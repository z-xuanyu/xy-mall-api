/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 15:22:10
 * @LastEditTime: 2022-07-01 10:44:46
 * @Description: 用户浏览记录
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
  options: {
    customName: 'user_view_history',
  },
})
export class UserViewsHistory {
  @ApiProperty({ title: '用户id' })
  @prop({ ref: () => User, required: true })
  userId: Ref<User>;

  @ApiProperty({ title: '商品id' })
  @prop({ ref: () => Product, required: true })
  productId: Ref<Product>;
}
