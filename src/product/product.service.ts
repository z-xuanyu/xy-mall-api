/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 15:01:54
 * @LastEditTime: 2022-02-24 18:27:15
 * @Description: 产品
 */
import { ApiFail, PaginationResult } from '@app/common/ResponseResultModel';
import { Product } from '@app/db/modules/product.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductDto } from './dto/create-product.dto';
import { QueryProductDto } from './dto/query-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ProductService {
  // 注入
  constructor(
    @InjectModel(Product)
    private productModel: ReturnModelType<typeof Product>,
  ) {}

  /**
   * 添加产品信息
   *
   * @param {CreateProductDto} createProductDto
   * @return {*}  {Promise<Product>}
   * @memberof ProductService
   */
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const isObjID = isValidObjectId(createProductDto.category);
    if (!isObjID) throw new ApiFail(101, '分类id不存在');
    return await this.productModel.create(createProductDto);
  }

  /**
   * 产品列表
   *
   * @param {QueryProductDto} parameters
   * @return {*}  {Promise<PaginationResult<Array<Product>>>}
   * @memberof ProductService
   */
  async findAll(
    parameters: QueryProductDto,
  ): Promise<PaginationResult<Array<Product>>> {
    let total = 0;
    const result = await this.productModel
      .find({
        $or: [
          {
            name: { $regex: new RegExp(parameters.title, 'i') },
            isTimeLimit: parameters.isTimeLimit ?? {
              $ne: parameters.isTimeLimit,
            },
            isHot: parameters.isHot ?? { $ne: parameters.isHot },
          },
        ],
      })
      .limit(~~parameters.pageSize)
      .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
      .populate('tags')
      .populate('category')
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
   * 产品信息
   *
   * @param {string} id 产品id
   * @return {*}  {Promise<Product>}
   * @memberof ProductService
   */
  async findOne(id: string): Promise<Product> {
    return await this.productModel.findById(id);
  }

  /**
   * 更新产品信息
   *
   * @param {string} id 产品id
   * @param {UpdateProductDto} updateProductDto
   * @return {*}  {Promise<Product>}
   * @memberof ProductService
   */
  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, updateProductDto);
  }

  /**
   * 删除产品信息
   *
   * @param {string} id 产品id
   * @return {*}  {Promise<Product>}
   * @memberof ProductService
   */
  async remove(id: string): Promise<Product> {
    return await this.productModel.findOneAndDelete({ _id: id });
  }

  /**
   * 更新商品上架或下架状态
   *
   * @param {string} id 商品id
   * @param {boolean} status 上架或下架状态
   * @return {*}
   * @memberof ProductService
   */
  async updateStatus(id: string, status: boolean) {
    return await this.productModel.findByIdAndUpdate(id, { status });
  }

  /**
   * 更新商品热门推荐状态
   *
   * @param {string} id 商品id
   * @param {boolean} status 热门推荐状态
   * @return {*}
   * @memberof ProductService
   */
  async updateHotStatus(id: string, status: boolean): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, { isHot: status });
  }

  /**
   * 批量更新商品热门推荐状态
   *
   * @param {Array<string>} ids 商品id聚合
   * @param {boolean} status 热门推荐状态
   * @memberof ProductService
   */
  async batchUpdateHotStatus(
    ids: Array<string>,
    status: boolean,
  ): Promise<void> {
    for (const item of ids) {
      await this.productModel.findByIdAndUpdate(item, { isHot: status });
    }
  }

  /**
   * 更新商品限时精选状态
   *
   * @param {string} id 商品id
   * @param {boolean} status 限时精选状态
   * @return {*}
   * @memberof ProductService
   */
  async updateTimeLimitStatus(id: string, status: boolean): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, {
      isTimeLimit: status,
    });
  }

  /**
   * 批量改变商品限时精选状态
   *
   * @param {Array<string>} ids 商品id聚合
   * @param {boolean} status 限时精选状态
   * @memberof ProductService
   */
  async batchUpdateTimeLimitStatus(
    ids: Array<string>,
    status: boolean,
  ): Promise<void> {
    for (const item of ids) {
      await this.productModel.findByIdAndUpdate(item, { isTimeLimit: status });
    }
  }
}
