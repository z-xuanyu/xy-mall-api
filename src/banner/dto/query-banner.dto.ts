import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-04 10:54:02
 * @LastEditTime: 2022-01-04 11:00:14
 * @Description: Modify here please
 */
export class QueryBannerDto extends PaginationParametersDto {
  @ApiProperty({ title: '名称' })
  name: string;
}
