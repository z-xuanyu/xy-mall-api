/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 12:16:37
 * @LastEditTime: 2022-03-28 16:57:54
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Admin } from 'libs/db/modules/admin.model';
import { Menu } from 'libs/db/modules/menu.model';
import { Role } from 'libs/db/modules/role.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateMenuDto } from './dto/create-menu.dto';
import { QueryMenuDto } from './dto/query-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu) private menuModel: ReturnModelType<typeof Menu>,
    @InjectModel(Admin) private adminModel: ReturnModelType<typeof Admin>,
    @InjectModel(Role) private roleModel: ReturnModelType<typeof Role>,
  ) {}

  // 添加菜单
  async create(createMenuDto: CreateMenuDto) {
    return await this.menuModel.create(createMenuDto);
  }

  // 菜单列表
  async findAll(parameters: QueryMenuDto) {
    let total = 0;
    const result = await this.menuModel
      .find({
        $or: [
          {
            'meta.title': { $regex: new RegExp(parameters.title, 'i') },
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

  // 获取权限菜单列表
  async findPermissionsMenus(adminId: string) {
    // 通过admin查询该管理员的角色
    const roles: any = await this.adminModel.findById({ _id: adminId });
    // 获取角色的菜单
    let menus: any = [];
    for (const item of roles.roleIds) {
      const menuListRes = await this.roleModel
        .findById({
          _id: item,
        })
        .populate('menuIds');

      menus = menus.concat(menuListRes.menuIds);
    }
    // 返回去重菜单列表
    const arrMap = new Map();
    return menus.filter((item: any) => {
      return !arrMap.has(item._id) && arrMap.set(item._id, 1);
    });
  }
  // 菜单详情
  async findOne(id: string) {
    return await this.menuModel.findById(id);
  }

  // 更新菜单
  async update(id: string, updateMenuDto: UpdateMenuDto) {
    return await this.menuModel.findByIdAndUpdate(id, updateMenuDto);
  }

  // 删除菜单
  async remove(id: string) {
    return await this.menuModel.findByIdAndDelete(id);
  }
}
