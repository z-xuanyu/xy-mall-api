/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 17:22:51
 * @LastEditTime: 2022-06-10 17:46:22
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryCategoryDto extends PaginationParametersDto {
  @ApiProperty({ name: '分类名称', required: false })
  name: string;
}
