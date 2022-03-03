/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-12 15:47:53
 * @LastEditTime: 2022-01-15 11:49:53
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class ParamTpye {
  @ApiProperty({ title: '参数名' })
  name: string;

  @ApiProperty({ title: '参数值' })
  value: string;
}

export class CreateProductParamDto {
  @ApiProperty({ title: '参数模板名称' })
  @IsNotEmpty({ message: '名称不能为空' })
  name: string;

  @ApiProperty({ title: '参数值', type: [ParamTpye] })
  @IsNotEmpty({ message: '参数值不能为空' })
  params: [ParamTpye];
}
