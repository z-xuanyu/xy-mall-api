/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:44:31
 * @LastEditTime: 2022-03-23 10:31:39
 * @Description: Modify here please
 */
import { Injectable, Logger } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Banner } from 'libs/db/modules/banner.model';
import { ClassifyNavigation } from 'libs/db/modules/classify-navigation.model';
import { Product } from 'libs/db/modules/product.model';
import { SiteSettings } from 'libs/db/modules/site-setting.model';
import { InjectModel } from 'nestjs-typegoose';
import * as OSS from 'ali-oss';
import * as fs from 'fs';
import { join } from 'path';
import { createMkdir, dirIsExist } from 'libs/common/utils/has';
import { Order } from 'libs/db/modules/order.model';
import { OrderStatus } from 'libs/common/enum/orderStatus.enum';

@Injectable()
export class WebService {
  private aliOssClient: OSS;
  private fileStorageInfo: any;
  constructor(
    @InjectModel(Banner) private bannerModel: ReturnModelType<typeof Banner>,
    @InjectModel(ClassifyNavigation)
    private classifyNavigationModel: ReturnModelType<typeof ClassifyNavigation>,
    @InjectModel(Product) private productModel: ReturnModelType<typeof Product>,
    @InjectModel(SiteSettings)
    private settingModel: ReturnModelType<typeof SiteSettings>,
    @InjectModel(Order) private orderModel: ReturnModelType<typeof Order>,
  ) {
    // 查询存储设置信息
    this.settingModel.find().then((res) => {
      this.fileStorageInfo = res[0].fileStorage;
      // 初始化aliOss
      this.aliOssClient = new OSS({
        region: this.fileStorageInfo.aliOss.region,
        accessKeyId: this.fileStorageInfo.aliOss.accessKeyId,
        accessKeySecret: this.fileStorageInfo.aliOss.accessKeySecret,
        bucket: this.fileStorageInfo.aliOss.bucket,
      });
      // 默认 bucket
      this.aliOssClient.useBucket(this.fileStorageInfo.aliOss.bucket);
    });
  }

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

  // 单文件上传
  async upload(file: any, domain: string) {
    try {
      let data: any;
      switch (~~this.fileStorageInfo.mode) {
        // 本地上传
        case 1:
          // 检查目录是否存在
          const stat = await dirIsExist('uploads-images');
          if (!stat) {
            await createMkdir('uploads-images');
          }

          // 存储图片文件
          const writeImage = fs.createWriteStream(
            join(__dirname, './uploads-images', `${file.originalname}`),
          );
          writeImage.write(file.buffer);
          data = {
            url: `${domain}/uploads-images/${file.originalname}`,
          };
          break;
        //  阿里oss上传
        case 2:
          data = await this.aliOssClient.put(`/images/${file.originalname}`, file.buffer);
          break;
        default:
          break;
      }
      return data;
    } catch (err) {
      Logger.log(err, '上传错误');
    }
  }

  // 多图上传
  async multipleUpload(files: Array<any>, domain: string) {
    try {
      const data = [];
      switch (~~this.fileStorageInfo.mode) {
        // 本地上传
        case 1:
          // 检查目录是否存在
          const stat = await dirIsExist('uploads-images');
          if (!stat) {
            await createMkdir('uploads-images');
          }

          // 存储图片文件
          for (const file of files) {
            const writeImage = fs.createWriteStream(
              join(__dirname, './uploads-images', `${file.originalname}`),
            );
            writeImage.write(file.buffer);
            data.push(`${domain}/uploads-images/${file.originalname}`);
          }
          break;
        //  阿里oss上传
        case 2:
          for (const file of files) {
            const res = await this.aliOssClient.put(`/images/${file.originalname}`, file.buffer);
            data.push(res.url);
          }
          break;
        default:
          break;
      }
      return data;
    } catch (err) {
      Logger.log(err, '上传错误');
    }
  }

  /**
   * 微信支付 : TODO
   *
   * @param {string} orderId 订单id
   * @return {*}
   * @memberof WebService
   */
  async weixinPay(orderId: string) {
    return this.orderModel.findByIdAndUpdate(orderId, {
      status: OrderStatus.PENDING_DELIVER,
    });
  }
}
