/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-04 10:46:45
 * @LastEditTime: 2022-01-04 15:07:37
 * @Description: Modify here please
 */
import { BannerType } from '@app/common/enum/banner.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBannerDto {
  @ApiProperty({ title: '名称' })
  @IsNotEmpty({ message: '名称不能为空' })
  name: string;

  @ApiProperty({ title: '类型', enum: [1, 2, 3] })
  @IsNotEmpty({ message: '类型不能为空' })
  type: BannerType;

  @ApiProperty({ title: '图片' })
  @IsNotEmpty({ message: '图片不能为空' })
  image: string;

  @ApiProperty({ title: '链接' })
  url?: string;

  @ApiProperty({ title: '关联产品id', default: null })
  productId?: string | null;
}
