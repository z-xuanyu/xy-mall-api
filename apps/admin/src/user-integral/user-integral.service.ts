/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-07-01 10:06:38
 * @LastEditTime: 2022-07-01 10:14:19
 * @Description: 用户积分
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserIntegral } from 'libs/db/modules/user-integral.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserIntegralDto } from './dto/create-user-integral.dto';
import { UpdateUserIntegralDto } from './dto/update-user-integral.dto';

@Injectable()
export class UserIntegralService {
  constructor(
    @InjectModel(UserIntegral) private userIntegralModel: ReturnModelType<typeof UserIntegral>,
  ) {
    console.log('UserIntegralService');
  }

  // 增值用户积分
  async create(createUserIntegralDto: CreateUserIntegralDto) {
    return await this.userIntegralModel.create(createUserIntegralDto);
  }

  // 积分列表
  async findAll() {
    return await this.userIntegralModel.find();
  }

  // 积分信息
  async findOne(id: string) {
    return await this.userIntegralModel.findById(id);
  }

  // 更新积分
  async update(id: string, updateUserIntegralDto: UpdateUserIntegralDto) {
    return await this.userIntegralModel.findByIdAndUpdate(id, updateUserIntegralDto);
  }

  // 删除积分
  async remove(id: string) {
    return await this.userIntegralModel.findByIdAndRemove(id);
  }
}
