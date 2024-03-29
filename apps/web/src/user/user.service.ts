/*
 * @Author: xuanyu
 * @LastEditors: xuanyu 969718197@qq.com
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 16:09:06
 * @LastEditTime: 2023-08-02 15:23:54
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserAddress } from 'libs/db/modules/user-address.model';
import { UserCollection } from 'libs/db/modules/user-collection.model';
import { UserViewsHistory } from 'libs/db/modules/user-views-history.model';
import { ObjectId } from 'mongodb';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateAddressDefaultDto } from './dto/update-address-default.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserCollection)
    private userCollectionModel: ReturnModelType<typeof UserCollection>,
    @InjectModel(UserViewsHistory)
    private userViewsHistoryModel: ReturnModelType<typeof UserViewsHistory>,
    @InjectModel(UserAddress)
    private userAddressModel: ReturnModelType<typeof UserAddress>,
  ) {
    console.log('UserService');
  }

  /**
   * 获取用户收藏商品列表
   *
   * @param {string} userId 用户id
   * @return {*}
   * @memberof UserService
   */
  async findUserCollectionList(userId: ObjectId): Promise<any> {
    return await this.userCollectionModel.aggregate([
      {
        $match: {
          userId: new ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: 'products',
          localField: 'productId',
          foreignField: '_id',
          as: 'product',
        },
      },
      {
        $unwind: {
          path: '$product',
        },
      },
      {
        $project: {
          title: '$product.title',
          pic: '$product.pic',
          price: '$product.price',
          views: '$product.views',
          goods_id: '$product._id',
        },
      },
    ]);
  }

  /**
   * 获取用户商品浏览记录列表
   *
   * @param {string} userId 用户id
   * @return {*}
   * @memberof UserService
   */
  async findUserViewsHistoryAll(userId: string | ObjectId): Promise<any> {
    return await this.userViewsHistoryModel.aggregate([
      {
        $match: {
          userId: new ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: 'products',
          localField: 'productId',
          foreignField: '_id',
          as: 'product',
        },
      },
      {
        $unwind: {
          path: '$product',
        },
      },
      {
        $project: {
          title: '$product.title',
          pic: '$product.pic',
          price: '$product.price',
          views: '$product.views',
          goods_id: '$product._id',
        },
      },
    ]);
  }

  // 添加用户地址
  async createAddress(createUserAddressDto: CreateUserAddressDto) {
    return this.userAddressModel.create(createUserAddressDto);
  }

  /**
   * 用户地址列表
   *
   * @param {string} userId 用户id
   * @return {*}
   * @memberof UserService
   */
  async findUserAddressAll(userId: string | unknown) {
    return await this.userAddressModel.find({ userId });
  }

  /**
   * 地址详情
   *
   * @param {string} id 地址id
   * @return {*}
   * @memberof UserService
   */
  async findUserAddressOne(id: string) {
    return await this.userAddressModel.findById(id);
  }

  /**
   * 更新用户地址信息
   *
   * @param {string} id 地址id
   * @param {UpdateUserAddressDto} updateUserAddressDto
   * @return {*}
   * @memberof UserService
   */
  async updateUserAddress(id: string, updateUserAddressDto: UpdateUserAddressDto) {
    return await this.userAddressModel.findByIdAndUpdate(id, updateUserAddressDto);
  }

  /**
   * 删除用户地址
   *
   * @param {string} id 地址id
   * @return {*}
   * @memberof UserService
   */
  async removeUserAddress(id: string) {
    return await this.userAddressModel.findByIdAndDelete(id);
  }

  // 更新用户地址默认地址
  async updateAddressDefault(updateAddressDefaultDto: UpdateAddressDefaultDto): Promise<void> {
    //  把已有默认地址改为false
    if (updateAddressDefaultDto.isDefault) {
      await this.userAddressModel.findOneAndUpdate(
        {
          userId: updateAddressDefaultDto.userId,
          isDefault: updateAddressDefaultDto.isDefault,
        },
        { isDefault: !updateAddressDefaultDto.isDefault },
      );
    }
    // 更新默认地址状态
    await this.userAddressModel.findByIdAndUpdate(updateAddressDefaultDto.id, {
      isDefault: updateAddressDefaultDto.isDefault,
    });
  }
}
