/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:44:31
 * @LastEditTime: 2022-03-22 10:50:21
 * @Description: Modify here please
 */
import { Injectable, Logger } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import * as OSS from 'ali-oss';
import * as fs from 'fs';
import { createMkdir, dirIsExist } from 'libs/common/utils/has';
import { SiteSettings } from 'libs/db/modules/site-setting.model';
import { InjectModel } from 'nestjs-typegoose';
import { join } from 'path';

@Injectable()
export class AppService {
  private aliOssClient: OSS;

  private fileStorageInfo: any;
  public constructor(
    @InjectModel(SiteSettings)
    private settingModel: ReturnModelType<typeof SiteSettings>,
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
    return 'hello xuanyu';
  }

  // 上传文件
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
          data = await this.aliOssClient.put(
            `/images/${file.originalname}`,
            file.buffer,
          );
          break;
        default:
          break;
      }
      return data;
    } catch (err) {
      console.log(err, 4444);
      Logger.log(err, '上传错误');
    }
  }
}
