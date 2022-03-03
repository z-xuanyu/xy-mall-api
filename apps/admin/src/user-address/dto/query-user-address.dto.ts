/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:59:28
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryUserAddressDto extends PaginationParametersDto {
  @ApiProperty({ title: '用户id', required: true })
  userId: string;

  @ApiProperty({ title: '收货人名称', required: false })
  name: string;
}
