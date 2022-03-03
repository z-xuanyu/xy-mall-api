/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 17:22:51
 * @LastEditTime: 2022-03-03 10:36:43
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryCategoryDto extends PaginationParametersDto {
  @ApiProperty({ title: '分类名称', required: false })
  name: string;
}
