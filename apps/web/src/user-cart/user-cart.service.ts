/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-15 11:02:01
 * @LastEditTime: 2022-03-15 11:14:42
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserCart } from 'libs/db/modules/user-cart.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserCartDto } from './dto/create-user-cart.dto';

@Injectable()
export class UserCartService {
  constructor(
    @InjectModel(UserCart)
    private userCartModel: ReturnModelType<typeof UserCart>,
  ) {}

  // 加入购物车
  async create(createUserCartDto: CreateUserCartDto) {
    return await this.userCartModel.create(createUserCartDto);
  }

  /**
   * 获取用户购物车列表
   *
   * @param {string} userId 用户id
   * @return {*}
   * @memberof UserCartService
   */
  async findAll(userId: string): Promise<any> {
    return await this.userCartModel.find({ userId });
  }

  /**
   * 删除购物车记录
   *
   * @param {string} id 购物车记录id
   * @memberof UserCartService
   */
  async remove(id: string) {
    await this.userCartModel.findByIdAndDelete(id);
  }
}
