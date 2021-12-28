/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 16:56:34
 * @LastEditTime: 2021-12-28 17:48:05
 * @Description: Modify here please
 */
import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryProductTopicDto extends PaginationParametersDto {
  @ApiProperty({ title: '标题标题', required: false })
  title: string;
}
