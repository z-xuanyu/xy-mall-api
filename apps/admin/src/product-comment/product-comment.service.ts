/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:22:58
 * @LastEditTime: 2022-03-21 17:26:50
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ProductComment } from 'libs/db/modules/product-comment-model';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ProductCommentService {
  constructor(
    @InjectModel(ProductComment)
    private productCommentModel: ReturnModelType<typeof ProductComment>,
  ) {}

  // 查询商品评论列表
  async findAll() {
    return await this.productCommentModel.find();
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
