/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 16:17:19
 * @LastEditTime: 2021-12-27 17:57:57
 * @Description: 分类模块逻辑
 */
import { PaginationResult } from '@app/common/ResponseResultModel';
import { Category } from '@app/db/modules/category.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { QueryCategoryDto } from './dto/query-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  // 注入
  constructor(
    @InjectModel(Category)
    private categoryModel: ReturnModelType<typeof Category>,
  ) {}

  /**
   * 添加分类
   *
   * @param {CreateCategoryDto} createCategoryDto
   * @return {*}  {Promise<Category>}
   * @memberof CategoryService
   */
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryModel.create(createCategoryDto);
  }

  /**
   * 分类列表
   *
   * @return {*}  {Promise<PaginationResult<Array<Category>>>}
   * @memberof CategoryService
   */
  async findAll(
    parameters: QueryCategoryDto,
  ): Promise<PaginationResult<Array<Category>>> {
    let total = 0;
    const result = await this.categoryModel
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
   * 分类信息
   *
   * @param {string} id 分类id
   * @return {*}  {Promise<Category>}
   * @memberof CategoryService
   */
  async findOne(id: string): Promise<Category> {
    return this.categoryModel.findById(id);
  }

  /**
   * 更新分类信息
   *
   * @param {string} id 分类id
   * @param {UpdateCategoryDto} updateCategoryDto 更新信息对象
   * @return {*}  {Promise<Category>} 更新分类信息
   * @memberof CategoryService
   */
  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto);
  }

  /**
   * 删除分类
   *
   * @param {string} id 分类id
   * @return {*}  {Promise<Category>} 返回删除分类信息
   * @memberof CategoryService
   */
  async remove(id: string): Promise<Category> {
    return await this.categoryModel.findOneAndDelete({ _id: id });
  }
}
