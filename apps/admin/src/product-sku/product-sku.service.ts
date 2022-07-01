/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-15 11:36:15
 * @LastEditTime: 2022-07-01 17:03:48
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { PaginationResult } from 'libs/common/ResponseResultModel';
import { ProductSkuAttr } from 'libs/db/modules/product-sku-attr.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductSkuDto } from './dto/create-product-sku.dto';
import { QueryProductSkuDto } from './dto/query-product-sku.dto';
import { UpdateProductSkuDto } from './dto/update-product-sku.dto';

@Injectable()
export class ProductSkuService {
  constructor(
    @InjectModel(ProductSkuAttr)
    private productSkuAttrModel: ReturnModelType<typeof ProductSkuAttr>,
  ) {
    console.log('ProductSkuService');
  }

  /**
   * 添加产品规格模板
   *
   * @param {CreateProductSkuDto} createProductSkuDto
   * @return {*}  {Promise<ProductSku>}
   * @memberof ProductSkuService
   */
  async create(createProductSkuDto: CreateProductSkuDto): Promise<ProductSkuAttr> {
    return await this.productSkuAttrModel.create(createProductSkuDto);
  }

  /**
   * 规格模板列表
   *
   * @param {QueryProductSkuDto} parameters
   * @return {*}  {Promise<PaginationResult<Array<ProductSku>>>}
   * @memberof ProductSkuService
   */
  async findAll(parameters: QueryProductSkuDto): Promise<PaginationResult<Array<ProductSkuAttr>>> {
    let total = 0;
    const result = await this.productSkuAttrModel
      .find({ name: { $regex: new RegExp(parameters.name, 'i') }, productId: null })
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
   *规格模板信息
   *
   * @param {string} id 模板id
   * @return {*}  {Promise<ProductSku>}
   * @memberof ProductSkuService
   */
  async findOne(id: string): Promise<ProductSkuAttr> {
    return await this.productSkuAttrModel.findById(id);
  }

  /**
   * 更新规格模板
   *
   * @param {string} id 模板id
   * @param {UpdateProductSkuDto} updateProductSkuDto
   * @return {*}  {Promise<ProductSku>}
   * @memberof ProductSkuService
   */
  async update(id: string, updateProductSkuDto: UpdateProductSkuDto): Promise<ProductSkuAttr> {
    return await this.productSkuAttrModel.findByIdAndUpdate(id, updateProductSkuDto);
  }

  /**
   * 删除规格模板
   *
   * @param {string} id 模板id
   * @return {*}  {Promise<ProductSku>}
   * @memberof ProductSkuService
   */
  async remove(id: string): Promise<ProductSkuAttr> {
    return await this.productSkuAttrModel.findByIdAndDelete(id);
  }
}
