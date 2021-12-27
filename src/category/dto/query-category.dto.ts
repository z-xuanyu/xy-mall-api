/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 17:22:51
 * @LastEditTime: 2021-12-27 17:55:36
 * @Description: Modify here please
 */
import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryCategoryDto extends PaginationParametersDto {
  @ApiProperty({ title: '分类名称', required: false })
  name: string;
}
