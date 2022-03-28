/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 12:16:37
 * @LastEditTime: 2022-03-28 14:43:18
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Menu } from 'libs/db/modules/menu.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateMenuDto } from './dto/create-menu.dto';
import { QueryMenuDto } from './dto/query-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu) private menuModel: ReturnModelType<typeof Menu>,
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
