/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:07:52
 * @LastEditTime: 2021-12-27 12:34:11
 * @Description: Modify here please
 */
import { PaginationResult } from '@app/common/result.model';
import { User } from '@app/db/modules/user.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {}

  /**
   *  添加会员
   *
   * @param {CreateUserDto} createUserDto
   * @return {*}  {Promise<User>}
   * @memberof UserService
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create(createUserDto);
  }

  /**
   *  会员列表
   *
   * @return {*}  {Promise<PaginationResult<Array<User>>>}
   * @memberof UserService
   */
  async findAll(): Promise<PaginationResult<Array<User>>> {
    const total = await this.userModel.countDocuments();
    const result = await this.userModel.find();
    return {
      total,
      items: result,
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
   * 更新会员
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
}
