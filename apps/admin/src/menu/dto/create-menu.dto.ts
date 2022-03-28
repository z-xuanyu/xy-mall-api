/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 12:16:37
 * @LastEditTime: 2022-03-28 14:43:47
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class TagItem {
  @ApiProperty({ title: '是否显示小圆点', default: false })
  dot: boolean;

  @ApiProperty({ title: '内容' })
  content: string;

  @ApiProperty({ title: '类型' })
  type: 'error' | 'primary' | 'warn' | 'success';
}

// 菜单mete项
class MetaItem {
  @ApiProperty({ title: '菜单栏icon' })
  icon: string;

  @ApiProperty({ title: 'Tag', type: TagItem })
  tag?: TagItem;

  @ApiProperty({ title: '是否禁用', default: false })
  disabled?: boolean;

  @ApiProperty({ title: '是否隐藏菜单', default: false })
  hideMenu?: boolean;

  @ApiProperty({ title: '菜单名称' })
  @IsNotEmpty({ message: '菜单名称不能为空' })
  title: string;

  @ApiProperty({ title: '是否固定标签', default: true })
  affix?: boolean;

  @ApiProperty({ title: '是否忽略KeepAlive缓存', default: false })
  ignoreKeepAlive?: boolean;

  @ApiProperty({ title: '隐藏所有子菜单', default: false })
  hideChildrenInMenu?: boolean;

  @ApiProperty({ title: '当前激活的菜单。用于配置详情页时左侧激活的菜单路径' })
  currentActiveMenu?: string;

  @ApiProperty({ title: '菜单排序，只对第一级有效', default: 1 })
  orderNo?: number;
}
export class CreateMenuDto {
  name: string;

  @ApiProperty({ title: '路由路径' })
  @IsNotEmpty({ message: '路由路径不能为空' })
  path: string;

  @ApiProperty({ title: '组件路径' })
  @IsNotEmpty({ message: '组件路径不能为空' })
  component: string;

  @ApiProperty({ title: '菜单mate', type: MetaItem })
  meta: MetaItem;

  @ApiProperty({ title: '上级id', default: null })
  parentId: string | null;
}
