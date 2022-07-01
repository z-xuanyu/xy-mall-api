/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-07-01 17:18:31
 * @LastEditTime: 2022-07-01 17:23:32
 * @Description: 用户标签
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserLabel } from 'libs/db/modules/user-label.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserLabelDto } from './dto/create-user-label.dto';
import { UpdateUserLabelDto } from './dto/update-user-label.dto';

@Injectable()
export class UserLabelService {
  constructor(@InjectModel(UserLabel) private userLabelModel: ReturnModelType<typeof UserLabel>) {
    console.log('UserLabelService');
  }

  // 添加用户标签
  async create(createUserLabelDto: CreateUserLabelDto) {
    return await this.userLabelModel.create(createUserLabelDto);
  }

  // 用户标签列表
  async findAll() {
    return await this.userLabelModel.find();
  }

  // 用户标签详情
  async findOne(id: string) {
    return await this.userLabelModel.findById(id);
  }

  // 更新用户标签
  async update(id: string, updateUserLabelDto: UpdateUserLabelDto) {
    return await this.userLabelModel.findByIdAndUpdate(id, updateUserLabelDto);
  }

  // 删除用户标签
  async remove(id: string) {
    return await this.userLabelModel.findByIdAndDelete(id);
  }
}
