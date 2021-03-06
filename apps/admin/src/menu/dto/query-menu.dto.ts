/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-28 14:22:03
 * @LastEditTime: 2022-03-28 15:46:53
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryMenuDto extends PaginationParametersDto {
  @ApiProperty({ title: '菜单名称' })
  title: string;
}
