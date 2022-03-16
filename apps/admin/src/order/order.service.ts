/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-16 17:35:40
 * @LastEditTime: 2022-03-16 17:44:13
 * @Description: 订单模块 service
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Order } from 'libs/db/modules/order.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private orderModel: ReturnModelType<typeof Order>,
  ) {}

  // 创建订单
  async create(createOrderDto: CreateOrderDto) {
    return await this.orderModel.create(createOrderDto);
  }

  // 查询订单列表
  async findAll() {
    return await this.orderModel.find();
  }

  /**
   * 查询订单详细信息
   *
   * @param {string} id 订单id
   * @return {*}
   * @memberof OrderService
   */
  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findById(id);
  }

  /**
   * 删除订单信息
   *
   * @param {string} id 订单id
   * @return {*}
   * @memberof OrderService
   */
  async remove(id: string) {
    return await this.orderModel.findByIdAndDelete(id);
  }
}
