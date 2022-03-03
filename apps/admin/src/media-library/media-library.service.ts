/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-07 11:20:51
 * @LastEditTime: 2022-03-03 10:42:48
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { PaginationResult } from 'libs/common/ResponseResultModel';
import { MediaLibrary } from 'libs/db/modules/media-library.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateMediaLibraryDto } from './dto/create-media-library.dto';
import { QueryMediaLibraryDto } from './dto/query-media-library.dto';
import { UpdateMediaLibraryDto } from './dto/update-media-library.dto';

@Injectable()
export class MediaLibraryService {
  // 注入
  constructor(
    @InjectModel(MediaLibrary)
    private mediaLibraryModel: ReturnModelType<typeof MediaLibrary>,
  ) {}

  /**
   * 新增媒体文件
   *
   * @param {CreateMediaLibraryDto} createMediaLibraryDto
   * @return {*}  {Promise<MediaLibrary>}
   * @memberof MediaLibraryService
   */
  async create(
    createMediaLibraryDto: CreateMediaLibraryDto,
  ): Promise<MediaLibrary> {
    return await this.mediaLibraryModel.create(createMediaLibraryDto);
  }

  /**
   * 媒体文件列表
   *
   * @param {QueryMediaLibraryDto} parameters
   * @return {*}
   * @memberof MediaLibraryService
   */
  async findAll(
    parameters: QueryMediaLibraryDto,
  ): Promise<PaginationResult<Array<MediaLibrary>>> {
    let total = 0;
    const result = await this.mediaLibraryModel
      .find({
        name: { $regex: new RegExp(parameters.name, 'i') },
        categoryId: parameters.categoryId,
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
   *  媒体文件信息
   *
   * @param {string} id 媒体文件id
   * @return {*}
   * @memberof MediaLibraryService
   */
  async findOne(id: string): Promise<MediaLibrary> {
    return this.mediaLibraryModel.findById(id);
  }

  /**
   * 更新媒体文件信息
   *
   * @param {string} id 媒体文件id
   * @param {UpdateMediaLibraryDto} updateMediaLibraryDto
   * @return {*}  {Promise<MediaLibrary>}
   * @memberof MediaLibraryService
   */
  async update(
    id: string,
    updateMediaLibraryDto: UpdateMediaLibraryDto,
  ): Promise<MediaLibrary> {
    return await this.mediaLibraryModel.findByIdAndUpdate(
      id,
      updateMediaLibraryDto,
    );
  }

  /**
   * 删除媒体文件
   *
   * @param {string} id 媒体文件id
   * @return {*}  {Promise<MediaLibrary>}
   * @memberof MediaLibraryService
   */
  async remove(id: string): Promise<MediaLibrary> {
    return await this.mediaLibraryModel.findByIdAndDelete(id);
  }
}
