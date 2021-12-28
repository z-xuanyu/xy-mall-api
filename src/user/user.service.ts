/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:07:52
 * @LastEditTime: 2021-12-28 11:00:33
 * @Description: Modify here please
 */
import { ApiFail, PaginationResult } from '@app/common/ResponseResultModel';
import { User } from '@app/db/modules/user.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
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
  async findAll(
    parameters: QueryUserDto,
  ): Promise<PaginationResult<Array<User>>> {
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
