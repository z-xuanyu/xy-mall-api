/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-13 15:04:28
 * @LastEditTime: 2022-01-13 15:07:31
 * @Description: Modify here please
 */

import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryTagDto extends PaginationParametersDto {
  @ApiProperty({ title: '名称' })
  name: string;
}