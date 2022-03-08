/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-08 09:56:39
 * @LastEditTime: 2022-03-08 14:28:24
 * @Description: 站点设置 model
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Severity } from '@typegoose/typegoose';
import { FileStorageModeEnum } from 'libs/common/enum/fileStorageMode.enum';

// 阿里云oss
class AliOss {
  @ApiProperty({ title: 'region' })
  @prop()
  region: string;

  @ApiProperty({ title: 'accessKeyId' })
  @prop()
  accessKeyId: string;

  @ApiProperty({ title: 'accessKeySecret' })
  @prop()
  accessKeySecret: string;

  @ApiProperty({ title: 'bucket' })
  @prop()
  bucket: string;
}

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})

// 文件存储设置项
class FileStorage {
  @ApiProperty({
    title: '文件存储模式',
    enum: FileStorageModeEnum,
    default: FileStorageModeEnum.LOCAL,
  })
  @prop()
  mode: FileStorageModeEnum;

  @ApiProperty({ title: '阿里云oss' })
  @prop()
  aliOss: AliOss;
}

export class SiteSettings {
  @ApiProperty({ title: '文件存储' })
  @prop()
  fileStorage: FileStorage;
}
