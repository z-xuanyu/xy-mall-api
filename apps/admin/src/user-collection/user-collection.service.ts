/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-25 16:57:52
 * @LastEditTime: 2022-03-03 11:01:21
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserCollection } from 'libs/db/modules/user-collection.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserCollectionDto } from './dto/create-user-collection.dto';
import { QueryUserCollectionDto } from './dto/query-user-collection.dto';

@Injectable()
export class UserCollectionService {
  constructor(
    @InjectModel(UserCollection)
    private userCollectionModel: ReturnModelType<typeof UserCollection>,
  ) {}

  // 创建用户收藏
  async create(createUserCollectionDto: CreateUserCollectionDto) {
    return await this.userCollectionModel.create(createUserCollectionDto);
  }

  // 获取用户收藏列表
  async findAll(parameters: QueryUserCollectionDto) {
    let total = 0;
    const result = await this.userCollectionModel
      .find({
        userId: parameters.userId,
      })
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

  // 删除收藏信息
  async remove(id: string) {
    return await this.userCollectionModel.findByIdAndDelete(id);
  }
}
