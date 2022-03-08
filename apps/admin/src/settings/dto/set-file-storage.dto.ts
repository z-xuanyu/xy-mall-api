/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-08 10:24:05
 * @LastEditTime: 2022-03-08 11:16:43
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { FileStorageModeEnum } from 'libs/common/enum/fileStorageMode.enum';

class AliOssDto {
  @ApiProperty({ title: 'region' })
  region: string;

  @ApiProperty({ title: 'accessKeyId' })
  accessKeyId: string;

  @ApiProperty({ title: 'accessKeySecret' })
  accessKeySecret: string;

  @ApiProperty({ title: 'bucket' })
  bucket: string;
}

export class SetFileStorageDto {
  @ApiProperty({
    title: '存储方式',
    enum: FileStorageModeEnum,
    type: Number,
    default: FileStorageModeEnum.LOCAL,
  })
  mode: FileStorageModeEnum;

  @ApiProperty({ title: '阿里OSS', type: AliOssDto })
  aliOss: AliOssDto;
}
