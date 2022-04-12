/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-16 17:22:48
 * @LastEditTime: 2022-04-12 15:00:03
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryClassifyNavigationDto extends PaginationParametersDto {
  @ApiProperty({ name: '名称', required: false })
  name?: string;

  @ApiProperty({ name: '状态', required: false })
  status?: boolean;

  @ApiProperty({
    name: '类型',
    required: false,
    description: '1: 页面， 2: 网站',
  })
  type?: number;
}
