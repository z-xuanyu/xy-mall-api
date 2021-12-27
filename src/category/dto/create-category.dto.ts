/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 16:17:19
 * @LastEditTime: 2021-12-27 16:21:13
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ title: '分类名称' })
  name: string;

  @ApiProperty({ title: '排序' })
  sort: number;

  @ApiProperty({ title: '上级分类' })
  parentId?: string | null;
}
