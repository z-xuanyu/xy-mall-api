/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-12 15:47:53
 * @LastEditTime: 2022-03-03 10:48:20
 * @Description: 产品参数模板
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { PaginationResult } from 'libs/common/ResponseResultModel';
import { ProductParam } from 'libs/db/modules/product-param.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductParamDto } from './dto/create-product-param.dto';
import { QueryProductParamDto } from './dto/query-product-param.dto';
import { UpdateProductParamDto } from './dto/update-product-param.dto';

@Injectable()
export class ProductParamService {
  // 注入
  constructor(
    @InjectModel(ProductParam)
    private productParmMobanModel: ReturnModelType<typeof ProductParam>,
  ) {}

  /**
   * 新增产品参数模板
   *
   * @param {CreateProductParamDto} createProductParamDto
   * @return {*}  {Promise<ProductParam>}
   * @memberof ProductParamService
   */
  async create(
    createProductParamDto: CreateProductParamDto,
  ): Promise<ProductParam> {
    return await this.productParmMobanModel.create(createProductParamDto);
  }

  /**
   * 产品参数模板列表
   *
   * @param {QueryProductParamDto} parameters
   * @return {*}  {Promise<PaginationResult<Array<ProductParam>>>}
   * @memberof ProductParamService
   */
  async findAll(
    parameters: QueryProductParamDto,
  ): Promise<PaginationResult<Array<ProductParam>>> {
    let total = 0;
    const result = await this.productParmMobanModel
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
   * 参数模板信息
   *
   * @param {string} id 参数模板id
   * @return {*}  {Promise<ProductParam>}
   * @memberof ProductParamService
   */
  async findOne(id: string): Promise<ProductParam> {
    return this.productParmMobanModel.findById(id);
  }

  /**
   * 更新参数模板信息
   *
   * @param {string} id 参数模板id
   * @param {UpdateProductParamDto} updateProductParamDto
   * @return {*}  {Promise<ProductParam>}
   * @memberof ProductParamService
   */
  async update(
    id: string,
    updateProductParamDto: UpdateProductParamDto,
  ): Promise<ProductParam> {
    return this.productParmMobanModel.findByIdAndUpdate(
      id,
      updateProductParamDto,
    );
  }

  /**
   * 删除参数模板
   *
   * @param {string} id 参数模板id
   * @return {*}  {Promise<ProductParam>}
   * @memberof ProductParamService
   */
  async remove(id: string): Promise<ProductParam> {
    return this.productParmMobanModel.findByIdAndDelete(id);
  }
}
