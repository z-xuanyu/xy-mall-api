/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 12:16:37
 * @LastEditTime: 2022-03-29 10:06:59
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { upperCamelCase } from 'libs/common/utils/transform';
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
    // 如果父级存在，更新父级name component
    if (createMenuDto.parentId) {
      const name = upperCamelCase(createMenuDto.path.split('/')[1] + 'Page');
      await this.menuModel.findByIdAndUpdate(createMenuDto.parentId, {
        component: 'LAYOUT',
        name,
      });
    }
    return await this.menuModel.create(createMenuDto);
  }

  // 菜单列表
  async findAll(parameters: QueryMenuDto) {
    const result = await this.menuModel.find({
      $or: [
        {
          'meta.title': { $regex: new RegExp(parameters.title, 'i') },
        },
      ],
    });
    return result;
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
    const MenuObj = {};
    const allMenus = menus.reduce((cur: any, next: any) => {
      MenuObj[next._id] ? '' : (MenuObj[next._id] = true && cur.push(next));
      return cur;
    }, []);
    return allMenus;
  }
  // 菜单详情
  async findOne(id: string) {
    return await this.menuModel.findById(id);
  }

  // 更新菜单
  async update(id: string, updateMenuDto: UpdateMenuDto) {
    // 如果父级存在，更新父级name component
    if (updateMenuDto.parentId) {
      const name = upperCamelCase(updateMenuDto.path.split('/')[1] + 'Page');
      await this.menuModel.findByIdAndUpdate(updateMenuDto.parentId, {
        component: 'LAYOUT',
        name,
      });
    }
    return await this.menuModel.findByIdAndUpdate(id, updateMenuDto);
  }

  // 删除菜单
  async remove(id: string) {
    return await this.menuModel.findByIdAndDelete(id);
  }
}
