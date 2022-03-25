/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:46:06
 * @LastEditTime: 2022-03-23 16:24:48
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { OrderStatus } from 'libs/common/enum/orderStatus.enum';
import { Order } from 'libs/db/modules/order.model';
import { ProductComment } from 'libs/db/modules/product-comment-model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductCommentDto } from './dto/create-product-comment.dto';

@Injectable()
export class ProductCommentService {
  constructor(
    @InjectModel(ProductComment)
    private productCommentModel: ReturnModelType<typeof ProductComment>,
    @InjectModel(Order)
    private OrderModel: ReturnModelType<typeof Order>,
  ) {}

  // 添加商品评价
  async create(createProductCommentDto: CreateProductCommentDto): Promise<any> {
    await this.productCommentModel.create(createProductCommentDto);
    // 更新订单状态
    await this.OrderModel.findByIdAndUpdate(createProductCommentDto.orderId, {
      status: OrderStatus.FINISH,
    });
  }

  /**
   * 获取用户商品评论列表
   *
   * @param {string} userId 用户id
   * @return {*}
   * @memberof ProductCommentService
   */
  async findUserComments(userId: string) {
    return await this.productCommentModel.find({ userId });
  }

  /**
   * 获取指定商品评论列表
   *
   * @param {string} productId 商品id
   * @return {*}
   * @memberof ProductCommentService
   */
  async findProductComments(productId: string) {
    return await this.productCommentModel.find({ productId });
  }
}
