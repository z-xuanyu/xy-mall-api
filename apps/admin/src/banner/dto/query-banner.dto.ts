/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:35:00
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { BannerStatus } from 'libs/common/enum/banner.enum';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryBannerDto extends PaginationParametersDto {
  @ApiProperty({ title: '名称', required: false })
  name: string;

  @ApiProperty({ title: '状态', enum: BannerStatus, required: false })
  status: BannerStatus;
}
