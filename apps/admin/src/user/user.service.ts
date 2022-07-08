/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:07:52
 * @LastEditTime: 2022-07-08 15:47:57
 * @Description: 会员service 模块
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiFail, PaginationResult } from 'libs/common/ResponseResultModel';
import { UserCollection } from 'libs/db/modules/user-collection.model';
import { UserViewsHistory } from 'libs/db/modules/user-views-history.model';
import { User } from 'libs/db/modules/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryUserCollectionDto } from './dto/query-user-collection.dto';
import { QueryUserViewHistoryDto } from './dto/query-user-view-history.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserService {
  constructor(
    // 用户
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
    // 用户浏览记录
    @InjectModel(UserViewsHistory)
    private userViewsHistoryModel: ReturnModelType<typeof UserViewsHistory>,
    // 用户收藏
    @InjectModel(UserCollection)
    private userCollectionModel: ReturnModelType<typeof UserCollection>,
  ) {
    console.log('UserService');
  }

  /**
   *  添加会员
   *
   * @param {CreateUserDto} createUserDto
   * @return {*}  {Promise<User>}
   * @memberof UserService
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hasEmail = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (hasEmail) {
      throw new ApiFail(102, '邮箱已存在');
    }
    return await this.userModel.create(createUserDto);
  }

  /**
   *  会员列表
   *
   * @param {QueryUserDto} parameters 查询参数对象
   * @return {*}  {Promise<PaginationResult<Array<User>>>}
   * @memberof UserService
   */
  async findAll(parameters: QueryUserDto): Promise<PaginationResult<Array<User>>> {
    let total = 0;
    const result = await this.userModel
      .find({ name: { $regex: new RegExp(parameters.name, 'i') } })
      .limit(~~parameters.pageSize)
      .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
      .then((doc) => {
        total = doc.length;
        return doc;
      });
    return {
      total,
      items: result,
    };
  }

  /**
   * 获取会员商品浏览记录列表
   *
   * @param {string} userId 用户id
   * @memberof UserService
   */
  async getUserViewHistories(userId: string, parameters: QueryUserViewHistoryDto) {
    let total = 0;
    const result = await this.userViewsHistoryModel
      .aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: 'products',
            foreignField: '_id',
            localField: 'productId',
            as: 'info',
          },
        },
        {
          $unwind: '$info',
        },
        {
          $project: {
            title: '$info.title',
            productId: '$info._id',
            pic: '$info.pic',
            price: '$info.price',
            inventory: '$info.inventory',
            sales: '$info.sales',
          },
        },
        {
          $match: {
            title: { $regex: new RegExp(parameters.title, 'i') },
          },
        },
      ])
      .then((doc) => {
        total = doc.length;
        return doc;
      });
    return {
      items: result,
      total,
    };
  }

  /**
   * 获取会员商品收藏列表
   *
   * @param {string} userId 用户id
   * @memberof UserService
   */
  async getUserCollections(userId: string, parameters: QueryUserCollectionDto) {
    let total = 0;
    const result = await this.userCollectionModel
      .aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: 'products',
            foreignField: '_id',
            localField: 'productId',
            as: 'info',
          },
        },
        {
          $unwind: '$info',
        },
        {
          $project: {
            title: '$info.title',
            productId: '$info._id',
            pic: '$info.pic',
            price: '$info.price',
          },
        },
        {
          $match: {
            title: { $regex: new RegExp(parameters.title, 'i') },
          },
        },
      ])
      .then((doc) => {
        total = doc.length;
        return doc;
      });

    return {
      items: result,
      total,
    };
  }

  /**
   * 会员信息
   *
   * @param {string} id 会员id
   * @return {*}  {Promise<User>}
   * @memberof UserService
   */
  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  /**
   * 更新会员基本信息
   *
   * @param {string} id 会员id
   * @param {UpdateUserDto} updateUserDto
   * @return {*}  {Promise<User>}
   * @memberof UserService
   */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  /**
   * 删除会员
   *
   * @param {string} id 会员id
   * @return {*}  {Promise<User>}
   * @memberof UserService
   */
  async remove(id: string): Promise<User> {
    return await this.userModel.findOneAndDelete({ _id: id });
  }

  /**
   * 批量查询用户信息
   *
   * @param {string[]} ids 用户id集合
   * @return {*}  {Promise<User[]>}
   * @memberof UserService
   */
  async findAllUser(ids: string[]): Promise<User[]> {
    return await this.userModel.find({ _id: { $in: ids } });
  }
}
