/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-02 17:02:45
 * @LastEditTime: 2022-04-07 10:10:35
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ProductUnit } from 'libs/db/modules/product-unit.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductUnitDto } from './dto/create-product-unit.dto';
import { QueryProductUnitDto } from './dto/query-product-unit.dto';
import { UpdateProductUnitDto } from './dto/update-product-unit.dto';

@Injectable()
export class ProductUnitService {
  constructor(
    @InjectModel(ProductUnit)
    private productUnitModel: ReturnModelType<typeof ProductUnit>,
  ) {}

  // 添加商品单位
  async create(createProductUnitDto: CreateProductUnitDto) {
    return await this.productUnitModel.create(createProductUnitDto);
  }

  // 商品单位列表
  async findAll(parameters: QueryProductUnitDto) {
    let total = 0;
    const result = await this.productUnitModel
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

  // 商品单位详情
  async findOne(id: string) {
    return await this.productUnitModel.findById(id);
  }

  // 更新商品单位
  async update(id: string, updateProductUnitDto: UpdateProductUnitDto) {
    return await this.productUnitModel.findByIdAndUpdate(id, updateProductUnitDto);
  }

  // 删除商品单位
  async remove(id: string) {
    return await this.productUnitModel.findByIdAndDelete(id);
  }
}
