/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:39:34
 * @LastEditTime: 2021-12-24 17:13:10
 * @Description: 管理员Service
 */
import { Admin } from '@app/db/modules/admin.model';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateAdminDto } from './dto/create-admin.dto';
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
      throw new HttpException('邮箱已经存在！', HttpStatus.OK);
    }

    const result = await this.adminModel.create(createAdminDto);
    if (!result) {
      throw new HttpException('系统异常，请联系管理员', HttpStatus.OK);
    }

    return result;
  }

  /**
   *  管理员列表
   *
   * @return {*}
   * @memberof AdminService
   */
  async findAll(): Promise<Array<Admin>> {
    const result = await this.adminModel.find();
    return result;
  }

  /**
   *  管理员信息
   *
   * @param {number} id 管理员id
   * @return {*}
   * @memberof AdminService
   */
  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  /**
   *  更新管理员
   *
   * @param {number} id 管理员id
   * @param {UpdateAdminDto} updateAdminDto
   * @return {*}
   * @memberof AdminService
   */
  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  /**
   *  删除管理员
   *
   * @param {number} id 管理员id
   * @return {*}
   * @memberof AdminService
   */
  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
