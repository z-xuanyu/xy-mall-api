/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:44:31
 * @LastEditTime: 2022-03-07 15:53:37
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Banner } from 'libs/db/modules/banner.model';
import { ClassifyNavigation } from 'libs/db/modules/classify-navigation.model';
import { Product } from 'libs/db/modules/product.model';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class WebService {
  constructor(
    @InjectModel(Banner) private bannerModel: ReturnModelType<typeof Banner>,
    @InjectModel(ClassifyNavigation)
    private classifyNavigationModel: ReturnModelType<typeof ClassifyNavigation>,
    @InjectModel(Product) private productModel: ReturnModelType<typeof Product>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  // 获取首页数据相关接口
  async getHomeData() {
    const banners = await this.bannerModel.find();
    const navigations = await this.classifyNavigationModel.find();
    const hotProducts = await this.productModel.find({ isHot: true });
    const limitProducts = await this.productModel.find({ isTimeLimit: true });

    return {
      banners,
      navigations,
      hotProducts,
      limitProducts,
    };
  }
}
