/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-15 11:02:01
 * @LastEditTime: 2022-03-19 18:50:14
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
    const has = await this.userCartModel.findOne({
      userId: createUserCartDto.userId,
      productId: createUserCartDto.productId,
    });

    // 如果购物车商品存在，数量追加一
    if (has) {
      return this.userCartModel.findOneAndUpdate(
        {
          userId: createUserCartDto.userId,
          productId: createUserCartDto.productId,
        },
        { $inc: { num: 1 } },
      );
    }
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
    return await this.userCartModel
      .find({ userId })
      .populate({ path: 'userId', select: ['name'] })
      .populate({ path: 'productId', select: ['title', 'pic'] });
  }

  // 获取购物车信息详细
  async findOne(id: string) {
    return await this.userCartModel
      .findById(id)
      .populate({ path: 'userId', select: ['name'] })
      .populate({ path: 'productId', select: ['title', 'pic'] });
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
