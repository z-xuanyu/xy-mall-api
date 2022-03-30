/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 17:13:03
 * @LastEditTime: 2022-03-30 16:09:12
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class PaginationParametersDto {
  @ApiProperty({ name: '页码', default: 1, required: false, type: Number })
  pageNumber: number;

  @ApiProperty({ name: '页数', default: 10, required: false, type: Number })
  pageSize: number;
}
