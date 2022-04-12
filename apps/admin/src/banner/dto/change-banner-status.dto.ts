/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-12 16:06:25
 * @LastEditTime: 2022-04-12 16:26:42
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { BannerStatus } from 'libs/common/enum/banner.enum';

export class ChangeBannerStatusDto {
  @ApiProperty({ title: '状态', enum: BannerStatus })
  status: BannerStatus;
}
