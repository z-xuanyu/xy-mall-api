/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-16 17:22:48
 * @LastEditTime: 2022-02-18 15:16:29
 * @Description: Modify here please
 */

import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryClassifyNavigationDto extends PaginationParametersDto {
  @ApiProperty({ title: '名称', required: false })
  name?: string;

  @ApiProperty({ title: '状态', required: false })
  status?: boolean;

  @ApiProperty({ title: '状态', required: false })
  type?: number;
}
