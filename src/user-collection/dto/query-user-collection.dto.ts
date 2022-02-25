/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-25 17:01:08
 * @LastEditTime: 2022-02-25 17:04:02
 * @Description: Modify here please
 */
import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryUserCollectionDto extends PaginationParametersDto {
  @ApiProperty({ title: '用户id' })
  userId: string;
}
