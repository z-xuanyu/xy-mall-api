/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-15 11:37:51
 * @LastEditTime: 2022-01-15 11:41:02
 * @Description: Modify here please
 */

import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryProductSkuDto extends PaginationParametersDto {
  @ApiProperty({ title: '规格名称', required: false })
  name: string;
}
