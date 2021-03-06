/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-15 11:37:51
 * @LastEditTime: 2022-07-01 17:04:01
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryProductSkuDto extends PaginationParametersDto {
  @ApiProperty({ name: '规格名称', required: false })
  name?: string;
}
