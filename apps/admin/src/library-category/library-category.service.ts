/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-07 10:52:56
 * @LastEditTime: 2022-03-07 16:49:18
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { LibraryCategory } from 'libs/db/modules/library-category.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateLibraryCategoryDto } from './dto/create-library-category.dto';
import { UpdateLibraryCategoryDto } from './dto/update-library-category.dto';

@Injectable()
export class LibraryCategoryService {
  // 注入
  constructor(
    @InjectModel(LibraryCategory)
    private libraryCategoryModel: ReturnModelType<typeof LibraryCategory>,
  ) {}

  /**
   * 新建文件分类
   *
   * @param {CreateLibraryCategoryDto} createLibraryCategoryDto
   * @return {*}
   * @memberof LibraryCategoryService
   */
  async create(
    createLibraryCategoryDto: CreateLibraryCategoryDto,
  ): Promise<LibraryCategory> {
    return this.libraryCategoryModel.create(createLibraryCategoryDto);
  }

  /**
   * 文件分类列表
   *
   * @return {*}
   * @memberof LibraryCategoryService
   */
  async findAll(): Promise<Array<LibraryCategory>> {
    return this.libraryCategoryModel.find();
  }

  /**
   * 文件分类信息
   *
   * @param {string} id 文件分类id
   * @return {*}
   * @memberof LibraryCategoryService
   */
  async findOne(id: string): Promise<LibraryCategory> {
    return this.libraryCategoryModel.findById(id);
  }

  /**
   * 更新文件分类信息
   *
   * @param {string} id 文件分类id
   * @param {UpdateLibraryCategoryDto} updateLibraryCategoryDto
   * @return {*}
   * @memberof LibraryCategoryService
   */
  async update(
    id: string,
    updateLibraryCategoryDto: UpdateLibraryCategoryDto,
  ): Promise<LibraryCategory> {
    return this.libraryCategoryModel.findByIdAndUpdate(
      id,
      updateLibraryCategoryDto,
    );
  }

  /**
   * 删除文件分类
   *
   * @param {string} id 文件分类id
   * @return {*}  {Promise<LibraryCategory>}
   * @memberof LibraryCategoryService
   */
  async remove(id: string): Promise<LibraryCategory> {
    return this.libraryCategoryModel.findByIdAndDelete(id);
  }
}
