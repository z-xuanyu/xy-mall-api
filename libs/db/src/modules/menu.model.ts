/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 11:29:25
 * @LastEditTime: 2022-03-29 11:00:38
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';

class TagItem {
  @ApiProperty({ title: '是否显示小圆点' })
  @prop({ type: Boolean, default: false })
  dot: boolean;

  @ApiProperty({ title: '内容' })
  @prop()
  content: string;

  @ApiProperty({ title: '类型' })
  @prop()
  type: 'error' | 'primary' | 'warn' | 'success';
}

// 菜单mete项
class MetaItem {
  @ApiProperty({ title: '菜单栏icon' })
  @prop()
  icon: string;

  @ApiProperty({ title: '菜单Tag' })
  @prop({ type: TagItem })
  tag?: TagItem;

  @ApiProperty({ title: '是否禁用' })
  @prop({ type: Boolean, default: false })
  disabled?: boolean;

  @ApiProperty({ title: '是否隐藏菜单' })
  @prop({ default: false, type: Boolean })
  hideMenu?: boolean;

  @ApiProperty({ title: '菜单名称' })
  @prop()
  title: string;

  @ApiProperty({ title: '是否固定标签' })
  @prop({ default: false, type: Boolean })
  affix?: boolean;

  @ApiProperty({ title: '是否忽略KeepAlive缓存' })
  @prop({ default: false, type: Boolean })
  ignoreKeepAlive?: boolean;

  @ApiProperty({ title: '隐藏所有子菜单' })
  @prop({ default: false, type: Boolean })
  hideChildrenInMenu?: boolean;

  @ApiProperty({ title: '当前激活的菜单。用于配置详情页时左侧激活的菜单路径' })
  @prop()
  currentActiveMenu?: string;

  @ApiProperty({ title: '菜单排序，只对第一级有效' })
  @prop({ type: Number, default: 1 })
  orderNo?: number;
}

// 创建时间，更新时间
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
// 菜单标签设置
export class Menu {
  @ApiProperty({ title: '路由名称' })
  @prop()
  name: string;

  @ApiProperty({ title: '路由路径' })
  @prop()
  path: string;

  @ApiProperty({ title: '组件路径' })
  @prop()
  component: string;

  @ApiProperty({ title: '菜单mate' })
  @prop({ type: MetaItem })
  meta: MetaItem;

  @ApiProperty({ title: '上级id', default: null })
  @prop({ ref: () => Menu, default: null })
  parentId: Ref<Menu> | null;
}
