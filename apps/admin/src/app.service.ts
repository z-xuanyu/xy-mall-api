/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:44:31
 * @LastEditTime: 2022-06-27 11:41:45
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
    console.log('appService');
  }

  getHello(): string {
    return 'hello xuanyu';
  }

  // 上传文件
  async upload(file: any, domain: string) {
    try {
      // 查询存储设置信息
      const settingRes = await this.settingModel.find();
      this.fileStorageInfo = settingRes[0].fileStorage;
      if (this.fileStorageInfo.mode == 2) {
        // 初始化aliOss
        this.aliOssClient = new OSS({
          region: this.fileStorageInfo.aliOss.region,
          accessKeyId: this.fileStorageInfo.aliOss.accessKeyId,
          accessKeySecret: this.fileStorageInfo.aliOss.accessKeySecret,
          bucket: this.fileStorageInfo.aliOss.bucket,
        });
        // 默认 bucket
        this.aliOssClient.useBucket(this.fileStorageInfo.aliOss.bucket);
      }
      let data: any;
      const fileTime = new Date().getTime();
      switch (~~this.fileStorageInfo.mode) {
        // 本地上传
        case 1:
          // 检查目录是否存在
          const stat = await dirIsExist(`uploads-images`);
          if (!stat) {
            await createMkdir('uploads-images');
          }

          // 存储图片文件
          fs.writeFileSync(
            join(__dirname, `./uploads-images`, `${fileTime}-${file.originalname}`),
            file.buffer,
          );
          data = {
            url: `${domain}/uploads-images/${fileTime}-${file.originalname}`,
            storageType: 1,
          };
          break;
        //  阿里oss上传
        case 2:
          const aliossPath = await this.aliOssClient.put(
            `/images/${fileTime}-${file.originalname}`,
            file.buffer,
          );
          data = {
            url: aliossPath.url,
            storageType: 2,
          };
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
   * 删除文件
   *
   * @param {string} fileNmae 文件名称
   * @param {number} storageType 文件存储空间类型：1：本地，2：alioss
   * @memberof AppService
   */
  async romoveFile(fileNmae: string, storageType: number) {
    // 查询存储设置信息
    const settingRes = await this.settingModel.find();
    this.fileStorageInfo = settingRes[0].fileStorage;
    // 初始化aliOss
    this.aliOssClient = new OSS({
      region: this.fileStorageInfo.aliOss.region,
      accessKeyId: this.fileStorageInfo.aliOss.accessKeyId,
      accessKeySecret: this.fileStorageInfo.aliOss.accessKeySecret,
      bucket: this.fileStorageInfo.aliOss.bucket,
    });
    // 默认 bucket
    this.aliOssClient.useBucket(this.fileStorageInfo.aliOss.bucket);

    switch (storageType) {
      // 本地文件删除
      case 1:
        fs.unlinkSync(join(__dirname, `./uploads-images`, fileNmae));
        break;
      // alioss文件删除
      case 2:
        await this.aliOssClient.delete(fileNmae);
        break;
      default:
        break;
    }
  }
}
