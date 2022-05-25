/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 11:46:36
 * @LastEditTime: 2022-03-28 16:00:28
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Role } from 'libs/db/modules/role.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { QueryRoleDto } from './dto/query-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleModel: ReturnModelType<typeof Role>) {}

  // 新建角色
  async create(createRoleDto: CreateRoleDto) {
    return await this.roleModel.create(createRoleDto);
  }

  // 角色列表
  async findAll(parameters: QueryRoleDto) {
    let total = 0;
    const result = await this.roleModel
      .find({
        $or: [
          {
            name: { $regex: new RegExp(parameters.name, 'i') },
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

  // 角色详细
  async findOne(id: string) {
    return await this.roleModel.findById(id);
  }

  // 更新角色信息
  async update(id: string, updateRoleDto: UpdateRoleDto) {
    return await this.roleModel.findByIdAndUpdate(id, updateRoleDto);
  }

  // 删除角色
  async remove(id: string) {
    return await this.roleModel.findByIdAndDelete(id);
  }
}
