/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 16:09:06
 * @LastEditTime: 2022-03-03 18:04:48
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserAddress } from 'libs/db/modules/user-address.model';
import { UserCollection } from 'libs/db/modules/user-collection.model';
import { UserViewsHistory } from 'libs/db/modules/user-views-history.model';
import { InjectModel } from 'nestjs-typegoose';
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
  ) {}

  /**
   * 获取用户收藏商品列表
   *
   * @param {string} userId 用户id
   * @return {*}
   * @memberof UserService
   */
  async findUserCollectionList(userId: string) {
    return await this.userCollectionModel.find({ userId }).populate({
      path: 'productId',
      select: ['_id', 'pic', 'title', 'sku', 'price', 'skuType'],
    });
  }

  /**
   * 获取用户商品浏览记录列表
   *
   * @param {string} userId 用户id
   * @return {*}
   * @memberof UserService
   */
  async findUserViewsHistoryAll(userId: string) {
    return await this.userViewsHistoryModel.find({ userId }).populate({
      path: 'productId',
      select: ['_id', 'pic', 'title', 'price', 'skuType', 'sku'],
    });
  }

  /**
   * 用户地址列表
   *
   * @param {string} userId 用户id
   * @return {*}
   * @memberof UserService
   */
  async findUserAddressAll(userId: string) {
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
  async updateUserAddress(
    id: string,
    updateUserAddressDto: UpdateUserAddressDto,
  ) {
    return await this.userAddressModel.findByIdAndUpdate(
      id,
      updateUserAddressDto,
    );
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
}