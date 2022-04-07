/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-07 15:50:41
 * @LastEditTime: 2022-04-07 16:42:38
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryUserViewHistoryDto extends PaginationParametersDto {
  @ApiProperty({ name: '商品标题', required: false })
  title: string;
}
