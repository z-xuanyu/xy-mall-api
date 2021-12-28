/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 15:11:13
 * @LastEditTime: 2021-12-28 15:12:45
 * @Description: Modify here please
 */
import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryProductDto extends PaginationParametersDto {
  @ApiProperty({ title: '标题', required: false })
  title: string;
}
