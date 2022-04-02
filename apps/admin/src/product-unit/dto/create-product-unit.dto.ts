/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-02 17:02:45
 * @LastEditTime: 2022-04-02 17:08:57
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductUnitDto {
  @ApiProperty({ title: '单位名称' })
  name: string;

  @ApiProperty({ title: '单位排序' })
  sort: number;
}
