/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-16 17:17:53
 * @LastEditTime: 2022-03-03 10:40:01
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ClassifyNavigation } from 'libs/db/modules/classify-navigation.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateClassifyNavigationDto } from './dto/create-classify-navigation.dto';
import { QueryClassifyNavigationDto } from './dto/query-classify-navigation.dto';
import { UpdateClassifyNavigationDto } from './dto/update-classify-navigation.dto';

@Injectable()
export class ClassifyNavigationService {
  constructor(
    @InjectModel(ClassifyNavigation)
    private classifyNavigationModel: ReturnModelType<typeof ClassifyNavigation>,
  ) {}

  // 添加导航分类
  async create(createClassifyNavigationDto: CreateClassifyNavigationDto) {
    return await this.classifyNavigationModel.create(
      createClassifyNavigationDto,
    );
  }

  // 分类导航列表
  async findAll(parameters: QueryClassifyNavigationDto) {
    let total = 0;
    const result = await this.classifyNavigationModel
      .find({
        $or: [
          {
            name: { $regex: new RegExp(parameters.name, 'i') },
            status: parameters.status ?? { $ne: parameters.status },
            type: parameters.type ?? { $ne: parameters.type },
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

  // 分类导航详情
  async findOne(id: string) {
    return await this.classifyNavigationModel.find({ _id: id });
  }

  // 更新分类导航信息
  async update(
    id: string,
    updateClassifyNavigationDto: UpdateClassifyNavigationDto,
  ) {
    return await this.classifyNavigationModel.findByIdAndUpdate(
      id,
      updateClassifyNavigationDto,
    );
  }

  // 删除分类导航信息
  async remove(id: string) {
    return await this.classifyNavigationModel.findByIdAndDelete(id);
  }
}
