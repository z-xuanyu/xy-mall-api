/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-16 17:22:48
 * @LastEditTime: 2022-03-03 10:38:54
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryClassifyNavigationDto extends PaginationParametersDto {
  @ApiProperty({ title: '名称', required: false })
  name?: string;

  @ApiProperty({ title: '状态', required: false })
  status?: boolean;

  @ApiProperty({ title: '状态', required: false })
  type?: number;
}
