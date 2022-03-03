/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 17:17:47
 * @LastEditTime: 2022-03-03 10:57:41
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryUserDto extends PaginationParametersDto {
  @ApiProperty({ title: '会员名称', required: false })
  name: string;
}
