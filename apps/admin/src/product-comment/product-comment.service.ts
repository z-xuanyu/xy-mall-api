/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:22:58
 * @LastEditTime: 2022-03-29 17:24:32
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ProductComment } from 'libs/db/modules/product-comment-model';
import { InjectModel } from 'nestjs-typegoose';
import { QueryProductCommentDto } from './dto/query-product-comment.dto';

@Injectable()
export class ProductCommentService {
  constructor(
    @InjectModel(ProductComment)
    private productCommentModel: ReturnModelType<typeof ProductComment>,
  ) {}

  // 查询商品评论列表
  async findAll(parameters: QueryProductCommentDto) {
    let total = 0;
    const result = await this.productCommentModel
      .aggregate([
        {
          $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $unwind: '$user',
        },
        {
          $lookup: {
            from: 'products',
            localField: 'productId',
            foreignField: '_id',
            as: 'product',
          },
        },
        {
          $unwind: '$product',
        },
        {
          $match: {
            'product.title': {
              $regex: new RegExp(parameters.productName, 'i'),
            },
            'user.name': {
              $regex: new RegExp(parameters.userName, 'i'),
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
   * 删除商品评价
   *
   * @param {string} id
   * @return {*}
   * @memberof ProductCommentService
   */
  async remove(id: string) {
    return await this.productCommentModel.findByIdAndDelete(id);
  }
}
