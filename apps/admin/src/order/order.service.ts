/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-16 17:35:40
 * @LastEditTime: 2022-03-30 16:31:58
 * @Description: 订单模块 service
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { OrderStatus } from 'libs/common/enum/orderStatus.enum';
import { ApiFail } from 'libs/common/ResponseResultModel';
import { Order } from 'libs/db/modules/order.model';
import { InjectModel } from 'nestjs-typegoose';
import { QueryOrderDto } from './dto/query-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private orderModel: ReturnModelType<typeof Order>,
  ) {}

  // 查询订单列表
  async findAll(parameters: QueryOrderDto) {
    let total = 0;
    const result = await this.orderModel
      .aggregate([
        {
          $lookup: {
            from: 'users',
            foreignField: '_id',
            localField: 'userId',
            as: 'user',
          },
        },
        {
          $unwind: '$user',
        },
        {
          $lookup: {
            from: 'products',
            foreignField: '_id',
            localField: 'products.productId',
            as: 'info',
          },
        },
        {
          $project: {
            userName: '$user.name',
            userId: '$user._id',
            orderNo: 1,
            type: 1,
            totalPrice: 1,
            payment: 1,
            paymentType: 1,
            source: 1,
            status: 1,
            createdAt: 1,
            products: '$info',
            skus: '$products',
          },
        },
        {
          $match: {
            userName: { $regex: new RegExp(parameters.userName, 'i') },
            type: parameters.type
              ? ~~parameters.type
              : { $ne: parameters.type },
            status: parameters.status
              ? ~~parameters.status
              : { $ne: parameters.status },
            source: { $regex: new RegExp(parameters.source, 'i') },
            'products.title': {
              $regex: new RegExp(parameters.productName, 'i'),
            },
          },
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
