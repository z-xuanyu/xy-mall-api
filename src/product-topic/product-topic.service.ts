/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 16:45:17
 * @LastEditTime: 2022-01-04 14:15:55
 * @Description: Modify here please
 */
import { ApiFail, PaginationResult } from '@app/common/ResponseResultModel';
import { ProductTopic } from '@app/db/modules/product-topic.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { isValidObjectId } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductTopicDto } from './dto/create-product-topic.dto';
import { QueryProductTopicDto } from './dto/query-product-topic.dto';
import { UpdateProductTopicDto } from './dto/update-product-topic.dto';

@Injectable()
export class ProductTopicService {
  // 注入
  constructor(
    @InjectModel(ProductTopic)
    private productTopicModel: ReturnModelType<typeof ProductTopic>,
  ) {}

  /**
   * 添加产品专题
   *
   * @param {CreateProductTopicDto} createProductTopicDto
   * @return {*}  {Promise<ProductTopic>}
   * @memberof ProductTopicService
   */
  async create(
    createProductTopicDto: CreateProductTopicDto,
  ): Promise<ProductTopic> {
    const isObjID = isValidObjectId(createProductTopicDto.category);
    if (!isObjID) throw new ApiFail(101, '分类id不存在');
    return await this.productTopicModel.create(createProductTopicDto);
  }

  /**
   * 产品专题列表
   *
   * @param {QueryProductTopicDto} parameters 查询产品专题参数对象
   * @return {*}  {Promise<PaginationResult<Array<ProductTopic>>>}
   * @memberof ProductTopicService
   */
  async findAll(
    parameters: QueryProductTopicDto,
  ): Promise<PaginationResult<Array<ProductTopic>>> {
    let total = 0;
    const result = await this.productTopicModel
      .find({ name: { $regex: new RegExp(parameters.title, 'i') } })
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
   *
   *
   * @param {string} id 产品专题id
   * @return {*}  {Promise<ProductTopic>}
   * @memberof ProductTopicService
   */
  async findOne(id: string): Promise<ProductTopic> {
    return await this.productTopicModel.findById(id);
  }

  /**
   *
   *
   * @param {string} id 产品专题
   * @param {UpdateProductTopicDto} updateProductTopicDto
   * @return {*}  {Promise<ProductTopic>}
   * @memberof ProductTopicService
   */
  async update(
    id: string,
    updateProductTopicDto: UpdateProductTopicDto,
  ): Promise<ProductTopic> {
    return await this.productTopicModel.findByIdAndUpdate(
      id,
      updateProductTopicDto,
    );
  }

  /**
   *
   * 删除产品专题
   * @param {string} id 产品专题id
   * @return {*}  {Promise<ProductTopic>}
   * @memberof ProductTopicService
   */
  async remove(id: string): Promise<ProductTopic> {
    return this.productTopicModel.findOneAndDelete({ _id: id });
  }
}
