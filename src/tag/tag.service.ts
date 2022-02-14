/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-13 15:00:59
 * @LastEditTime: 2022-02-14 18:03:39
 * @Description: Modify here please
 */
import { PaginationResult } from '@app/common/ResponseResultModel';
import { Tag } from '@app/db/modules/tag.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateTagDto } from './dto/create-tag.dto';
import { QueryTagDto } from './dto/query-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  // 注入
  constructor(
    @InjectModel(Tag) private tagModel: ReturnModelType<typeof Tag>,
  ) {}

  /**
   * 添加标签
   *
   * @param {CreateTagDto} createTagDto
   * @return {*}  {Promise<Tag>}
   * @memberof TagService
   */
  async create(createTagDto: CreateTagDto): Promise<Tag> {
    return await this.tagModel.create(createTagDto);
  }

  /**
   * 标签列表
   *
   * @param {QueryTagDto} parameters
   * @return {*}  {Promise<PaginationResult<Array<Tag>>>}
   * @memberof TagService
   */
  async findAll(
    parameters: QueryTagDto,
  ): Promise<PaginationResult<Array<Tag>>> {
    let total = 0;
    const result = await this.tagModel
      .find({
        $or: [
          {
            name: { $regex: new RegExp(parameters.name, 'i') },
            type: parameters.type ?? { $ne: parameters.type },
            status: parameters.status ?? { $ne: parameters.status },
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
   * 标签信息
   *
   * @param {string} id 标签id
   * @return {*}  {Promise<Tag>}
   * @memberof TagService
   */
  async findOne(id: string): Promise<Tag> {
    return await this.tagModel.findById(id);
  }

  /**
   * 更新标签
   *
   * @param {string} id 标签id
   * @param {UpdateTagDto} updateTagDto
   * @return {*}  {Promise<Tag>}
   * @memberof TagService
   */
  async update(id: string, updateTagDto: UpdateTagDto): Promise<Tag> {
    return await this.tagModel.findByIdAndUpdate(id, updateTagDto);
  }

  /**
   * 删除标签
   *
   * @param {string} id 标签id
   * @return {*}  {Promise<Tag>}
   * @memberof TagService
   */
  async remove(id: string): Promise<Tag> {
    return await this.tagModel.findByIdAndDelete(id);
  }
}
