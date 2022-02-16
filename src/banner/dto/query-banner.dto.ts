import { BannerStatus } from '@app/common/enum/banner.enum';
import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-04 10:54:02
 * @LastEditTime: 2022-02-16 11:57:36
 * @Description: Modify here please
 */
export class QueryBannerDto extends PaginationParametersDto {
  @ApiProperty({ title: '名称', required: false })
  name: string;

  @ApiProperty({ title: '状态', enum: BannerStatus, required: false })
  status: BannerStatus;
}
