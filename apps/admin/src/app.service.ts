/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:44:31
 * @LastEditTime: 2022-03-07 17:54:21
 * @Description: Modify here please
 */
import { Injectable, Logger } from '@nestjs/common';
import * as OSS from 'ali-oss';
import { aliOssConfig } from 'libs/common/config/alioss.config';

@Injectable()
export class AppService {
  private aliOssClient: OSS;
  public constructor() {
    this.aliOssClient = new OSS({
      region: aliOssConfig.region,
      accessKeyId: aliOssConfig.accessKeyId,
      accessKeySecret: aliOssConfig.accessKeySecret,
      bucket: aliOssConfig.bucket,
    });
    // 默认 bucket
    this.aliOssClient.useBucket(aliOssConfig.bucket);
  }

  getHello(): string {
    return 'xuanyu';
  }

  // 处理上传文件
  async upload(file: any) {
    try {
      return await this.aliOssClient.put(
        `/images/${file.originalname}`,
        file.buffer,
      );
    } catch (err) {
      Logger.log(err, '上传错误');
    }
  }
}
