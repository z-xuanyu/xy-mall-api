/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 17:03:06
 * @LastEditTime: 2021-12-27 18:04:34
 * @Description: Modify here please
 */

import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryAdminDto extends PaginationParametersDto {
  @ApiProperty({ title: '分类名称', required: false })
  name: string;

  @ApiProperty({ title: '状态', default: true, required: false })
  status: boolean;
}
