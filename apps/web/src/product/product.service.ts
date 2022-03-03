/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 14:42:51
 * @LastEditTime: 2022-03-03 17:37:38
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiFail } from 'libs/common/ResponseResultModel';
import { Product } from 'libs/db/modules/product.model';
import { UserCollection } from 'libs/db/modules/user-collection.model';
import { UserViewsHistory } from 'libs/db/modules/user-views-history.model';
import { InjectModel } from 'nestjs-typegoose';
import { UserCollectionProductDto } from './dto/user-collection-product.dto';

@Injectable()
export class ProductService {
  // 注入
  constructor(
    @InjectModel(Product) private productModel: ReturnModelType<typeof Product>,
    @InjectModel(UserCollection)
    private userCollectionModel: ReturnModelType<typeof UserCollection>,
    @InjectModel(UserViewsHistory)
    private userViewsHistory: ReturnModelType<typeof UserViewsHistory>,
  ) {}

  // 获取全部商品列表
  async findAll() {
    return await this.productModel.find();
  }

  /**
   * 商品详细
   *
   * @param {string} id 商品id
   * @return {*}
   * @memberof ProductService
   */
  async findOne(id: string, userId: string) {
    // 更新浏览量
    await this.productModel.findByIdAndUpdate(id, { $inc: { views: 1 } });
    // 当前登录用户是否收藏改商品
    let isCollection = false;
    if (userId) {
      // 用户浏览记录，商品记录是否存在
      const isHasProduct = await this.userViewsHistory.findOne({
        productId: id,
        userId,
      });
      // 不存在创建记录
      if (!isHasProduct)
        await this.userViewsHistory.create({ userId, productId: id });

      // 用户是否收藏改商品
      const isCollectionProduct = await this.userCollectionModel.findOne({
        userId,
        productId: id,
      });
      if (isCollectionProduct) {
        isCollection = true;
      }
    }
    // 返回商品信息
    const res: any = await this.productModel.findById(id);
    return {
      isCollection,
      ...res._doc,
    };
  }

  // 用户收藏商品
  async collection(userCollectionProductDto: UserCollectionProductDto) {
    // 商品是否已经被收藏过
    const isHas = await this.userCollectionModel.findOne({
      userId: userCollectionProductDto.userId,
      productId: userCollectionProductDto.productId,
    });
    if (isHas) throw new ApiFail(101, '已重复收藏');
    return await this.userCollectionModel.create(userCollectionProductDto);
  }

  // 删除收藏商品
  async removeCollection(userCollectionProductDto: UserCollectionProductDto) {
    return await this.userCollectionModel.findOneAndDelete(
      userCollectionProductDto,
    );
  }

  // async removeCollection()
}
