/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-28 15:43:30
 * @LastEditTime: 2022-03-28 15:46:24
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryRoleDto extends PaginationParametersDto {
  @ApiProperty({ title: '角色名称' })
  name: string;
}
