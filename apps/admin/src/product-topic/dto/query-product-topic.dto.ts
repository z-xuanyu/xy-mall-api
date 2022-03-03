/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 16:56:34
 * @LastEditTime: 2022-03-03 10:54:06
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryProductTopicDto extends PaginationParametersDto {
  @ApiProperty({ title: '标题标题', required: false })
  title: string;
}
