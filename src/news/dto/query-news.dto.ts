/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 11:50:43
 * @LastEditTime: 2021-12-28 12:11:49
 * @Description: Modify here please
 */
import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryNewsDto extends PaginationParametersDto {
  @ApiProperty({ title: '标题', required: false })
  title: string;
}
