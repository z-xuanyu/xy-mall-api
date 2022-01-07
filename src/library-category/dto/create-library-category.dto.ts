/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-07 10:52:56
 * @LastEditTime: 2022-01-07 11:13:31
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateLibraryCategoryDto {
  @ApiProperty({ title: '文件名称' })
  name: string;

  @ApiProperty({ title: '文件名称', default: null })
  parentId: string | null;
}
