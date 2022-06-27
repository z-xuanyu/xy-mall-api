/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-27 11:53:51
 * @LastEditTime: 2022-06-27 11:54:58
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

// 上传文件
export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

// 删除文件
export class RemoveFileDto {
  @ApiProperty({ title: '文件名' })
  fileName: string;

  @ApiProperty({ title: '文件存储方式' })
  storageType: number;
}
