/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-25 17:01:08
 * @LastEditTime: 2022-03-03 11:00:34
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryUserCollectionDto extends PaginationParametersDto {
  @ApiProperty({ title: '用户id' })
  userId: string;
}
