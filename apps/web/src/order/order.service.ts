/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-17 10:12:28
 * @LastEditTime: 2022-03-19 17:25:29
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiFail } from 'libs/common/ResponseResultModel';
import { Order } from 'libs/db/modules/order.model';
import { UserCart } from 'libs/db/modules/user-cart.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private orderModel: ReturnModelType<typeof Order>,
    @InjectModel(UserCart)
    private userCartModel: ReturnModelType<typeof UserCart>,
  ) {}

  // 创建订单
  async create(createOrderDto: CreateOrderDto) {
    // 查找出购物车信息
    const cartList: any = [];
    for (const item of createOrderDto.cartIds) {
      const cartInfo = await this.userCartModel.findById(item);
      if (!cartInfo) return new ApiFail(101, '订单已提交!');
      cartList.push(cartInfo);
    }

    // 选购商品
    const products = cartList.map((item) => {
      return {
        productId: item.productId,
        num: item.num,
        price: item.price,
        skuName: item.skuName,
      };
    });
    createOrderDto.products = products as any;
    // 清除用户购物车记录
    for (const item of createOrderDto.cartIds) {
      await this.userCartModel.findByIdAndDelete(item);
    }
    return await this.orderModel.create(createOrderDto);
  }

  /**
   * 查询用户订单列表
   *
   * @param {string} userId 用户id
   * @return {*}
   * @memberof OrderService
   */
  async findAll(userId: string): Promise<Array<Order>> {
    return await this.orderModel.find({ userId });
  }

  /**
   * 查询订单详情信息
   *
   * @param {string} id 订单id
   * @return {*}
   * @memberof OrderService
   */
  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findById(id);
  }

  /**
   * 删除订单
   *
   * @param {string} id 订单id
   * @return {*}
   * @memberof OrderService
   */
  async remove(id: string): Promise<Order> {
    return await this.orderModel.findByIdAndDelete(id);
  }
}
