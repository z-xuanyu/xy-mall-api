/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 11:32:23
 * @LastEditTime: 2022-03-25 11:45:22
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop, Ref } from '@typegoose/typegoose';
import { Menu } from './menu.model';
// 创建时间，更新时间
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Role {
  @ApiProperty({ title: '角色名' })
  @prop()
  name: string;

  @ApiProperty({ title: '角色标识' })
  @prop()
  label: string;

  @ApiProperty({ title: '备注' })
  @prop()
  remark: string;

  @ApiProperty({ title: '关联的菜单' })
  @prop({ ref: () => Menu, default: [] })
  menuIds: Ref<Menu>[];
}
