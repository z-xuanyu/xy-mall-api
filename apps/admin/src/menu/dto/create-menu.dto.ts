/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 12:16:37
 * @LastEditTime: 2022-03-25 14:31:44
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMenuDto {
  @ApiProperty({ title: '菜单名称' })
  @IsNotEmpty({ message: '名称不能为空' })
  name: string;

  @ApiProperty({ title: '菜单Icon' })
  @IsNotEmpty({ message: 'Icon不能为空' })
  icon: string;

  @ApiProperty({ title: '是否缓存', default: false })
  keepAlive: boolean;

  @ApiProperty({ title: '上级菜单', default: null })
  parentId: string | null;

  @ApiProperty({ title: '排序', example: 0, default: 1 })
  sort: number;

  @ApiProperty({ title: '文件路径' })
  viewUrl: string;

  @ApiProperty({ title: '路由路径' })
  path: string;

  @ApiProperty({ title: '是否隐藏菜单' })
  hideMenu: boolean;
}
