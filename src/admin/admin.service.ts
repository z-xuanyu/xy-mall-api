/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:39:34
 * @LastEditTime: 2021-12-27 18:09:16
 * @Description: 管理员Service
 */
import { ApiFail, PaginationResult } from '@app/common/ResponseResultModel';
import { Admin } from '@app/db/modules/admin.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { QueryAdminDto } from './dto/query-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  // 注入模型
  constructor(
    @InjectModel(Admin) private adminModel: ReturnModelType<typeof Admin>,
  ) {}

  /**
   *  添加管理员
   *
   * @param {CreateAdminDto} createAdminDto
   * @return { Admin }
   * @memberof AdminService
   */
  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const isHasEmail = await this.adminModel.findOne({
      email: createAdminDto.email,
    });

    if (isHasEmail) {
      throw new ApiFail(102, '邮箱已经存在！');
    }

    const result = await this.adminModel.create(createAdminDto);
    if (!result) {
      throw new ApiFail(400, '系统异常，请联系管理员');
    }

    return result;
  }

  /**
   *  管理员列表
   *
   * @return {*}
   * @memberof AdminService
   */
  async findAll(
    parameters: QueryAdminDto,
  ): Promise<PaginationResult<Array<Admin>>> {
    let total = 0;
    const result = await this.adminModel
      .find({
        $or: [
          {
            name: { $regex: new RegExp(parameters.name, 'i') },
            status: parameters.status
              ? parameters.status
              : { $ne: parameters.status },
          },
        ],
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

  /**
   *  管理员信息
   *
   * @param {string} id 管理员id
   * @return {*}
   * @memberof AdminService
   */
  async findOne(id: string): Promise<Admin> {
    return await this.adminModel.findById(id);
  }

  /**
   *  更新管理员
   *
   * @param {string} id 管理员id
   * @param {UpdateAdminDto} updateAdminDto
   * @return {*}
   * @memberof AdminService
   */
  async update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    return this.adminModel.findByIdAndUpdate(id, updateAdminDto);
  }

  /**
   *  删除管理员
   *
   * @param {string} id 管理员id
   * @return {*}
   * @memberof AdminService
   */
  async remove(id: string): Promise<Admin> {
    return this.adminModel.findOneAndDelete({ _id: id });
  }
}
