/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-16 17:17:53
 * @LastEditTime: 2022-04-12 14:58:32
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassifyNavigationDto {
  @ApiProperty({ title: '名称' })
  name: string;

  @ApiProperty({ title: '导航图片' })
  pic: string;

  @ApiProperty({
    title: '导航类型',
    default: 1,
    description: '1: 页面路劲，2: 网页地址',
  })
  type: number;

  @ApiProperty({ title: '页面路劲' })
  pagePath: string;

  @ApiProperty({ title: '网页地址' })
  url: string;

  @ApiProperty({ title: '排序', default: 1 })
  sort: number;

  @ApiProperty({ title: '备注' })
  remark: string;
}
