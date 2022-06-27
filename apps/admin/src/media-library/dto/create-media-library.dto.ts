/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-07 11:20:51
 * @LastEditTime: 2022-06-27 11:26:04
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateMediaLibraryDto {
  @ApiProperty({ title: '文件名称' })
  name: string;

  @ApiProperty({ title: '文件分类' })
  categoryId: string;

  @ApiProperty({ title: '文件地址' })
  url: string;

  @ApiProperty({ title: '文件存储类型' })
  storageType: number;
}
