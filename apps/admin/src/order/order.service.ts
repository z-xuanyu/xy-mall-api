/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-16 17:35:40
 * @LastEditTime: 2022-03-22 18:06:57
 * @Description: 订单模块 service
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { OrderStatus } from 'libs/common/enum/orderStatus.enum';
import { ApiFail } from 'libs/common/ResponseResultModel';
import { Order } from 'libs/db/modules/order.model';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private orderModel: ReturnModelType<typeof Order>,
  ) {}

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

  /**
   * 确认发货 TODO: 待开发
   *
   * @param {string} orderId 订单id
   * @return {*}
   * @memberof OrderService
   */
  async confirmDelivery(orderId: string) {
    const orderStatus = await this.orderModel.findById(orderId);
    if (orderStatus.status !== 2) {
      throw new ApiFail(101, '该订单未支付!');
    }
    return this.orderModel.findByIdAndUpdate(orderId, {
      status: OrderStatus.PENDING_TAKE,
    });
  }
}
