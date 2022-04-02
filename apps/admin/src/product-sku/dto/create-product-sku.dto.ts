/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-15 11:36:15
 * @LastEditTime: 2022-04-02 16:47:25
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductSkuDto {
  @ApiProperty({ title: '规格名称' })
  @IsNotEmpty({ message: '名称不能为空' })
  name: string;

  @ApiProperty({ title: '规格值', type: Array })
  @IsNotEmpty({ message: '规格值不能为空' })
  values: [string];
}
