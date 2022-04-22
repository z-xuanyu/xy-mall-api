/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-22 09:58:54
 * @LastEditTime: 2022-04-22 10:00:49
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryCustomerServiceDto extends PaginationParametersDto {
  @ApiProperty({ name: '名称', required: false })
  name?: string;
}
