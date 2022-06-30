/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-15 11:02:01
 * @LastEditTime: 2022-06-30 11:55:05
 * @Description: web用户购物车service
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
  ) {
    console.log('UserCartService');
  }

  // 加入购物车
  async create(createUserCartDto: CreateUserCartDto) {
    const has = await this.userCartModel.findOne({
      userId: createUserCartDto.userId,
      productId: createUserCartDto.productId,
    });

    // 单规格 如果购物车商品存在，数量追加一
    if (has && !createUserCartDto.skuId) {
      return await this.userCartModel.findOneAndUpdate(
        {
          userId: createUserCartDto.userId,
          productId: createUserCartDto.productId,
        },
        { $inc: { num: 1 } },
      );
    }

    // 多规格 如果购物车商品存在，数量追加一
    const hasSku = await this.userCartModel.findOne({
      userId: createUserCartDto.userId,
      productId: createUserCartDto.productId,
      skuId: createUserCartDto.skuId,
    });
    if (hasSku && createUserCartDto.skuId) {
      return await this.userCartModel.findOneAndUpdate(
        {
          userId: createUserCartDto.userId,
          productId: createUserCartDto.productId,
          skuId: createUserCartDto.skuId,
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
      .populate({ path: 'userId', select: ['nickName'] });
  }

  // 获取购物车信息详细
  async findOne(id: string) {
    return await this.userCartModel.findById(id).populate({ path: 'userId', select: ['nickName'] });
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
