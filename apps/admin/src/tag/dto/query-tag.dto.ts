/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-13 15:04:28
 * @LastEditTime: 2022-03-03 10:56:05
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryTagDto extends PaginationParametersDto {
  @ApiProperty({ title: '名称', required: false })
  name: string;

  @ApiProperty({
    title: '类型',
    required: false,
    default: 1,
    example: '1: 产品 , 2: 文章',
  })
  type: number;

  @ApiProperty({ title: '状态', required: false })
  status: boolean;
}
