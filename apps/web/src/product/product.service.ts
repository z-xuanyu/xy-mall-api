/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 14:42:51
 * @LastEditTime: 2022-06-20 16:41:24
 * @Description: 商品相关模块
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ProductSkuAttr } from 'libs/db/modules/product-sku-attr.model';
import { ProductSku } from 'libs/db/modules/product-sku.model';
import { Product } from 'libs/db/modules/product.model';
import { UserCollection } from 'libs/db/modules/user-collection.model';
import { UserViewsHistory } from 'libs/db/modules/user-views-history.model';
import { InjectModel } from 'nestjs-typegoose';
import { UserCollectionProductDto } from './dto/user-collection-product.dto';

@Injectable()
export class ProductService {
  // 注入
  constructor(
    // 商品
    @InjectModel(Product) private productModel: ReturnModelType<typeof Product>,

    // 商品属性
    @InjectModel(ProductSkuAttr)
    private productSkuAttrModel: ReturnModelType<typeof ProductSkuAttr>,
    // 商品sku
    @InjectModel(ProductSku) private productSkuModel: ReturnModelType<typeof ProductSku>,
    // 用户收藏
    @InjectModel(UserCollection)
    private userCollectionModel: ReturnModelType<typeof UserCollection>,
    // 用户浏览记录
    @InjectModel(UserViewsHistory)
    private userViewsHistory: ReturnModelType<typeof UserViewsHistory>,
  ) {
    console.log('ProductService');
  }

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
      if (!isHasProduct) await this.userViewsHistory.create({ userId, productId: id });

      // 用户是否收藏改商品
      const isCollectionProduct = await this.userCollectionModel.findOne({
        userId,
        productId: id,
      });
      if (isCollectionProduct) {
        isCollection = true;
      }
    }

    // 获取商品属性
    const productSkuAttr = await this.productSkuAttrModel.find({ productId: id });
    // 获取商品sku
    const productSku = await this.productSkuModel.find({ productId: id });
    // 返回商品信息
    const res: any = await this.productModel.findById(id);
    return {
      isCollection,
      ...res._doc,
      skuAttrs: productSkuAttr,
      skus: productSku,
    };
  }

  // 用户收藏商品
  async collection(userCollectionProductDto: UserCollectionProductDto) {
    // 商品是否已经被收藏过
    const isHas = await this.userCollectionModel.findOne({
      userId: userCollectionProductDto.userId,
      productId: userCollectionProductDto.productId,
    });
    // 存在就取消该收藏
    if (isHas) {
      return this.userCollectionModel.findOneAndDelete({
        userId: userCollectionProductDto.userId,
        productId: userCollectionProductDto.productId,
      });
    }
    return await this.userCollectionModel.create(userCollectionProductDto);
  }

  // 删除收藏商品
  async removeCollection(userCollectionProductDto: UserCollectionProductDto) {
    return await this.userCollectionModel.findOneAndDelete(userCollectionProductDto);
  }

  // 获热门商品
  async getHotProduct() {
    return await this.productModel.find({ isHot: true });
  }
}
