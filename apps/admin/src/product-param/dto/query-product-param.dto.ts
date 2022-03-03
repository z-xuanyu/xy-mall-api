/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-12 15:59:23
 * @LastEditTime: 2022-03-03 10:48:17
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryProductParamDto extends PaginationParametersDto {
  @ApiProperty({ title: '模板名称', required: false })
  name: string;
}
