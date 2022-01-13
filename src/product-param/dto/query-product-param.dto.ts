/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-12 15:59:23
 * @LastEditTime: 2022-01-13 10:30:13
 * @Description: Modify here please
 */
import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryProductParamDto extends PaginationParametersDto {
  @ApiProperty({ title: '模板名称', required: false })
  name: string;
}
