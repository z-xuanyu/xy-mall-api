/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-15 11:36:15
 * @LastEditTime: 2022-03-03 10:53:49
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { PaginationResult } from 'libs/common/ResponseResultModel';
import { ProductSku } from 'libs/db/modules/product-sku.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductSkuDto } from './dto/create-product-sku.dto';
import { QueryProductSkuDto } from './dto/query-product-sku.dto';
import { UpdateProductSkuDto } from './dto/update-product-sku.dto';

@Injectable()
export class ProductSkuService {
  constructor(
    @InjectModel(ProductSku)
    private productSkuModel: ReturnModelType<typeof ProductSku>,
  ) {}

  /**
   * 添加产品规格模板
   *
   * @param {CreateProductSkuDto} createProductSkuDto
   * @return {*}  {Promise<ProductSku>}
   * @memberof ProductSkuService
   */
  async create(createProductSkuDto: CreateProductSkuDto): Promise<ProductSku> {
    return await this.productSkuModel.create(createProductSkuDto);
  }

  /**
   * 规格模板列表
   *
   * @param {QueryProductSkuDto} parameters
   * @return {*}  {Promise<PaginationResult<Array<ProductSku>>>}
   * @memberof ProductSkuService
   */
  async findAll(
    parameters: QueryProductSkuDto,
  ): Promise<PaginationResult<Array<ProductSku>>> {
    let total = 0;
    const result = await this.productSkuModel
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
   *规格模板信息
   *
   * @param {string} id 模板id
   * @return {*}  {Promise<ProductSku>}
   * @memberof ProductSkuService
   */
  async findOne(id: string): Promise<ProductSku> {
    return await this.productSkuModel.findById(id);
  }

  /**
   * 更新规格模板
   *
   * @param {string} id 模板id
   * @param {UpdateProductSkuDto} updateProductSkuDto
   * @return {*}  {Promise<ProductSku>}
   * @memberof ProductSkuService
   */
  async update(
    id: string,
    updateProductSkuDto: UpdateProductSkuDto,
  ): Promise<ProductSku> {
    return await this.productSkuModel.findByIdAndUpdate(
      id,
      updateProductSkuDto,
    );
  }

  /**
   * 删除规格模板
   *
   * @param {string} id 模板id
   * @return {*}  {Promise<ProductSku>}
   * @memberof ProductSkuService
   */
  async remove(id: string): Promise<ProductSku> {
    return await this.productSkuModel.findByIdAndDelete(id);
  }
}
