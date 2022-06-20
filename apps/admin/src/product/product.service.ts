/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 15:01:54
 * @LastEditTime: 2022-06-20 15:07:44
 * @Description: 产品
 */

import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductDto } from './dto/create-product.dto';
import { QueryProductDto } from './dto/query-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from 'libs/db/modules/product.model';
import { PaginationResult } from 'libs/common/ResponseResultModel';
import { ProductSkuAttr } from 'libs/db/modules/product-sku-attr.model';
import { ProductSku } from 'libs/db/modules/product-sku.model';

@Injectable()
export class ProductService {
  // 注入
  constructor(
    // 商品
    @InjectModel(Product) private productModel: ReturnModelType<typeof Product>,
    // 商品属性
    @InjectModel(ProductSkuAttr) private productAttrModel: ReturnModelType<typeof ProductSkuAttr>,
    // 商品规格
    @InjectModel(ProductSku) private productSkuModel: ReturnModelType<typeof ProductSku>,
  ) {
    console.log('product service');
  }

  /**
   * 添加产品信息
   *
   * @param {CreateProductDto} createProductDto
   * @return {*}  {Promise<Product>}
   * @memberof ProductService
   */
  async create(createProductDto: CreateProductDto): Promise<Product> {
    // 如果多规格。给默认最低价
    if (createProductDto.skuType == 2) {
      const mins = createProductDto.skus.find((item) => Math.min(item.price));
      createProductDto.price = mins.price;
      createProductDto.inventory = mins.inventory;
    }

    // 商品基本信息
    const productInfo = await this.productModel.create(createProductDto);
    // 商品属性
    for (const item of createProductDto.skuAttrs) {
      await this.productAttrModel.create({
        productId: productInfo._id,
        name: item.name,
        values: item.values,
      });
    }
    // 商品规格
    for (const item of createProductDto.skus) {
      await this.productSkuModel.create({
        productId: productInfo._id,
        price: item.price,
        image: item.image,
        inventory: item.inventory,
        costPrice: item.costPrice,
        weight: item.weight,
        artNo: item.artNo,
        skuNames: item.skuNames,
      });
    }
    return productInfo;
  }

  /**
   * 产品列表
   *
   * @param {QueryProductDto} parameters
   * @return {*}  {Promise<PaginationResult<Array<Product>>>}
   * @memberof ProductService
   */
  async findAll(parameters: QueryProductDto): Promise<PaginationResult<Array<Product>>> {
    let total = 0;
    const result = await this.productModel
      .aggregate([
        {
          $match: {
            title: { $regex: new RegExp(parameters.title, 'i') },
            isHot: parameters.isHot ? true : { $ne: parameters.isHot },
            isTimeLimit: parameters.isTimeLimit ? true : { $ne: parameters.isTimeLimit },
          },
        },
        {
          $lookup: {
            from: 'tags',
            foreignField: '_id',
            localField: 'tags',
            as: 'tags',
          },
        },
        {
          $lookup: {
            from: 'categories',
            foreignField: '_id',
            localField: 'category',
            as: 'category',
          },
        },
        {
          $unwind: '$category',
        },
        {
          $skip: ~~((parameters.pageNumber - 1) * parameters.pageSize),
        },
        {
          $limit: ~~parameters.pageSize,
        },
      ])
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
  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    // 如果多规格。给默认最低价
    if (updateProductDto.skuType == 2) {
      const mins = updateProductDto.skus.find((item) => Math.min(item.price));
      updateProductDto.price = mins.price;
      updateProductDto.inventory = mins.inventory;
    }

    // 商品基本信息
    const productInfo = await this.productModel.findByIdAndUpdate(id, updateProductDto);
    // 商品属性
    await this.productAttrModel.deleteMany({ productId: id }); // 先删除记录再添加
    for (const item of updateProductDto.skuAttrs) {
      await this.productAttrModel.create({
        productId: productInfo._id,
        name: item.name,
        values: item.values,
      });
    }
    // 商品规格
    await this.productSkuModel.deleteMany({ productId: id }); // 先删除记录再添加
    for (const item of updateProductDto.skus) {
      await this.productSkuModel.create({
        productId: productInfo._id,
        price: item.price,
        image: item.image,
        inventory: item.inventory,
        costPrice: item.costPrice,
        weight: item.weight,
        artNo: item.artNo,
        skuNames: item.skuNames,
      });
    }
    return productInfo;
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
  async batchUpdateHotStatus(ids: Array<string>, status: boolean): Promise<void> {
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
  async batchUpdateTimeLimitStatus(ids: Array<string>, status: boolean): Promise<void> {
    for (const item of ids) {
      await this.productModel.findByIdAndUpdate(item, { isTimeLimit: status });
    }
  }
}
