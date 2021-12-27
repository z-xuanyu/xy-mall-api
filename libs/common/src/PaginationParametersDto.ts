/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 17:13:03
 * @LastEditTime: 2021-12-27 17:13:39
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class PaginationParametersDto {
  @ApiProperty({ title: '页码', default: 1, required: false })
  pageNumber: number;

  @ApiProperty({ title: '页数', default: 10, required: false })
  pageSize: number;
}
