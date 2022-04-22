/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-22 09:56:57
 * @LastEditTime: 2022-04-22 10:13:42
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose/lib/types';
import { CustomerService } from 'libs/db/modules/customer-service.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateCustomerServiceDto } from './dto/create-customer-service.dto';
import { QueryCustomerServiceDto } from './dto/query-customer-service.dto';
import { UpdateCustomerServiceDto } from './dto/update-customer-service.dto';

@Injectable()
export class CustomerServiceService {
  constructor(
    @InjectModel(CustomerService)
    private customerServiceModel: ReturnModelType<typeof CustomerService>,
  ) {}

  // 添加客服
  async create(createCustomerServiceDto: CreateCustomerServiceDto) {
    return await this.customerServiceModel.create(createCustomerServiceDto);
  }

  // 客服列表
  async findAll(parameters: QueryCustomerServiceDto) {
    return await this.customerServiceModel.find({
      name: { $regex: new RegExp(parameters.name, 'i') },
    });
  }

  // 客服详细
  async findOne(id: string) {
    return await this.customerServiceModel.findById(id);
  }

  // 更新客服信息
  async update(id: string, updateCustomerServiceDto: UpdateCustomerServiceDto) {
    return await this.customerServiceModel.findByIdAndUpdate(
      id,
      updateCustomerServiceDto,
    );
  }

  // 删除客服
  async remove(id: string) {
    return await this.customerServiceModel.findByIdAndDelete(id);
  }
}
