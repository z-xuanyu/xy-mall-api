/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 15:11:13
 * @LastEditTime: 2022-02-18 17:40:25
 * @Description: Modify here please
 */
import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryProductDto extends PaginationParametersDto {
  @ApiProperty({ title: '商品标题', required: false })
  title: string;

  @ApiProperty({ title: '是否限时精选', required: false })
  isTimeLimit: boolean;

  @ApiProperty({ title: '是否热门推荐', required: false })
  isHot: boolean;
}
