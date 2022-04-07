/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-25 15:58:54
 * @LastEditTime: 2022-04-07 11:12:25
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserAddress } from 'libs/db/modules/user-address.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { QueryUserAddressDto } from './dto/query-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectModel(UserAddress)
    private userAddressModel: ReturnModelType<typeof UserAddress>,
  ) {}

  // 新增用户地址
  async create(
    createUserAddressDto: CreateUserAddressDto,
  ): Promise<UserAddress> {
    return await this.userAddressModel.create(createUserAddressDto);
  }

  // 获取用户地址列表
  async findAll(parameters: QueryUserAddressDto) {
    let total = 0;
    const result = await this.userAddressModel
      .find({
        name: { $regex: new RegExp(parameters.name, 'i') },
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

  // 获取用户地址详细信息
  async findOne(id: string) {
    return await this.userAddressModel.findById(id);
  }

  // 更新用户地址信息
  async update(id: string, updateUserAddressDto: UpdateUserAddressDto) {
    return await this.userAddressModel.findByIdAndUpdate(
      id,
      updateUserAddressDto,
    );
  }

  // 删除用户地址
  async remove(id: string) {
    return await this.userAddressModel.findByIdAndDelete(id);
  }
}
