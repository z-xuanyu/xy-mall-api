/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-29 16:23:15
 * @LastEditTime: 2022-03-29 16:26:42
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryProductCommentDto extends PaginationParametersDto {
  @ApiProperty({ title: '用户名称' })
  userName?: string;

  @ApiProperty({ title: '商品名称' })
  productName?: string;
}
