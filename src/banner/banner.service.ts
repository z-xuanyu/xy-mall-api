/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-04 10:46:45
 * @LastEditTime: 2022-01-04 15:13:09
 * @Description: Modify here please
 */
import { ApiFail, PaginationResult } from '@app/common/ResponseResultModel';
import { Banner } from '@app/db/modules/banner.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { isValidObjectId } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateBannerDto } from './dto/create-banner.dto';
import { QueryBannerDto } from './dto/query-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@Injectable()
export class BannerService {
  constructor(
    @InjectModel(Banner) private bannerModel: ReturnModelType<typeof Banner>,
  ) {}

  /**
   * 添加banner
   *
   * @param {CreateBannerDto} createBannerDto
   * @return {*}  {Promise<Banner>}
   * @memberof BannerService
   */
  async create(createBannerDto: CreateBannerDto): Promise<Banner> {
    // 关联的产品id是否存在
    if (
      !isValidObjectId(createBannerDto.productId) &&
      createBannerDto.productId
    )
      throw new ApiFail(101, '产品id不存在');
    return await this.bannerModel.create(createBannerDto);
  }

  /**
   * banner列表
   *
   * @param {QueryBannerDto} parameters
   * @return {*}  {Promise<PaginationResult<Array<Banner>>>}
   * @memberof BannerService
   */
  async findAll(
    parameters: QueryBannerDto,
  ): Promise<PaginationResult<Array<Banner>>> {
    let total = 0;
    const result = await this.bannerModel
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
   * banner详细
   *
   * @param {string} id bannerId
   * @return {*}  {Promise<Banner>}
   * @memberof BannerService
   */
  async findOne(id: string): Promise<Banner> {
    return await this.bannerModel.findById(id);
  }

  /**
   * 更新banner信息
   *
   * @param {string} id banner ID
   * @param {UpdateBannerDto} updateBannerDto
   * @return {*}  {Promise<Banner>}
   * @memberof BannerService
   */
  async update(id: string, updateBannerDto: UpdateBannerDto): Promise<Banner> {
    return await this.bannerModel.findByIdAndUpdate(id, updateBannerDto);
  }

  /**
   * 删除banner
   *
   * @param {string} id banner Id
   * @return {*}  {Promise<Banner>}
   * @memberof BannerService
   */
  async remove(id: string): Promise<Banner> {
    return await this.bannerModel.findByIdAndDelete(id);
  }
}
