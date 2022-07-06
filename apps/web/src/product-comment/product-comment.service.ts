/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:46:06
 * @LastEditTime: 2022-07-06 12:10:04
 * @Description: 商品评价
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
  ) {
    console.log('ProductCommentService');
  }

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
    return await this.productCommentModel.find({ userId }).populate('userId');
  }

  /**
   * 获取指定商品评论列表
   *
   * @param {string} productId 商品id
   * @return {*}
   * @memberof ProductCommentService
   */
  async findProductComments(productId: string, type?: number) {
    // 全部评论数
    const allCount = await this.productCommentModel.countDocuments();
    // 带图数
    const hasImgCount = await this.productCommentModel
      .find({ images: { $exists: true } })
      .countDocuments();
    // 差评数量
    const badCount = await this.productCommentModel.find({ rate: { $lt: 2 } }).countDocuments();
    // 好评数量
    const goodCount = await this.productCommentModel.find({ rate: { $gte: 3 } }).countDocuments();
    // 中评数量
    const normalCount = await this.productCommentModel
      .find({ rate: { $gte: 2, $lt: 3 } })
      .countDocuments();

    const tabs = {
      allCount,
      hasImgCount,
      badCount,
      goodCount,
      normalCount,
    };

    // 查询参数
    const query: any = {
      productId,
      rate: { $ne: null },
    };

    switch (~~type) {
      case 1:
        // 带图
        query.images = { $exists: true };
        break;
      case 2:
        // 好评
        query.rate = { $gte: 3 };
        break;
      case 3:
        // 中评
        query.rate = { $gte: 2, $lt: 3 };
        break;
      case 4:
        // 差评
        query.rate = { $lt: 2 };
        break;
      default:
        break;
    }
    const comments = await this.productCommentModel.find(query).populate('userId');
    return { comments, tabs };
  }
}
