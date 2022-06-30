/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-17 10:12:28
 * @LastEditTime: 2022-06-30 14:11:40
 * @Description: 订单service
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { OrderStatus } from 'libs/common/enum/orderStatus.enum';
import { ApiFail } from 'libs/common/ResponseResultModel';
import { Order } from 'libs/db/modules/order.model';
import { ProductSku } from 'libs/db/modules/product-sku.model';
import { Product } from 'libs/db/modules/product.model';
import { UserCart } from 'libs/db/modules/user-cart.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { QueryUserOrderDto } from './dto/query-user-oder.dto';

@Injectable()
export class OrderService {
  constructor(
    // 订单
    @InjectModel(Order) private orderModel: ReturnModelType<typeof Order>,
    // 用户购物车
    @InjectModel(UserCart)
    private userCartModel: ReturnModelType<typeof UserCart>,
    // 商品规格
    @InjectModel(ProductSku) private productSkuModel: ReturnModelType<typeof ProductSku>,
    // 商品
    @InjectModel(Product) private productModel: ReturnModelType<typeof Product>,
  ) {
    console.log('order service');
  }

  // 创建订单
  async create(createOrderDto: CreateOrderDto) {
    // 检查库存
    for (const item of createOrderDto.products) {
      const skuInfo = await this.productSkuModel.findById(item.skuId);
      // 多规格商品
      if (skuInfo && skuInfo.inventory <= 0) {
        //更新购物车库存状态
        await this.userCartModel.findOneAndUpdate(
          { userId: createOrderDto.userId, skuId: item.skuId },
          { hasStock: false },
        );
        throw new ApiFail(101, `${item.productName}-库存不足`);
      }
      // 单规格
      if (!item.skuId) {
        const product = await this.productModel.findById(item.productId);
        if (product.inventory <= 0) {
          //更新购物车库存状态
          await this.userCartModel.findOneAndUpdate(
            { userId: createOrderDto.userId, productId: item.productId },
            { hasStock: false },
          );
          throw new ApiFail(101, `${item.productName}-库存不足`);
        }
      }
    }
    // 购物车清算
    if (!createOrderDto.way) {
      // 清除用户购物车记录
      for (const item of createOrderDto.cartIds) {
        await this.userCartModel.findByIdAndDelete(item);
      }
    }
    // 创建订单
    return await this.orderModel.create(createOrderDto);
  }

  /**
   * 查询用户订单列表
   *
   * @param {string} userId 用户id
   * @param {QueryUserOrderDto} queryUserOrderDto 查询参数对象
   * @return {*}
   * @memberof OrderService
   */
  async findAll(userId: string, queryUserOrderDto: QueryUserOrderDto): Promise<Array<Order>> {
    return await this.orderModel
      .find({
        userId,
        isDelete: false,
        status: ~~queryUserOrderDto.status ? queryUserOrderDto.status : { $ne: null },
      })
      .populate({
        path: 'products.productId',
        select: ['title', 'pic'],
      });
  }

  /**
   * 查询订单详情信息
   *
   * @param {string} id 订单id
   * @return {*}
   * @memberof OrderService
   */
  async findOne(id: string): Promise<Order> {
    return await this.orderModel
      .findById(id)
      .populate('addressId')
      .populate({
        path: 'products.productId',
        select: ['title', 'pic'],
      });
  }

  /**
   * 取消订单
   *
   * @param {string} id 订单id
   * @return {*}
   * @memberof OrderService
   */
  async remove(id: string): Promise<Order> {
    return await this.orderModel.findByIdAndUpdate(id, { isDelete: true });
  }

  /**
   * 订单确认收货
   *
   * @param {string} orderId 订单id
   * @return {*}
   * @memberof OrderService
   */
  async confirmTake(orderId: string) {
    const getStatus = await this.orderModel.findById(orderId);
    if (getStatus.status !== 3) {
      throw new ApiFail(101, '异常操作，订单未发货!');
    }
    return await this.orderModel.findByIdAndUpdate(orderId, {
      status: OrderStatus.PENDING_COMMENT,
    });
  }
}
