/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 17:17:47
 * @LastEditTime: 2021-12-27 17:58:44
 * @Description: Modify here please
 */
import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryUserDto extends PaginationParametersDto {
  @ApiProperty({ title: '会员名称', required: false })
  name: string;
}
