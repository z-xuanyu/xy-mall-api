/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-07 11:32:26
 * @LastEditTime: 2022-03-03 10:41:41
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryMediaLibraryDto extends PaginationParametersDto {
  @ApiProperty({ title: '文件名称', required: false })
  name: string;

  @ApiProperty({ title: '文件分类id', required: false, default: null })
  categoryId: string;
}
