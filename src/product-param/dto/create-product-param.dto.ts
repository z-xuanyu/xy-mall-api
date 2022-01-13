/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-12 15:47:53
 * @LastEditTime: 2022-01-12 15:54:30
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

class ParamTpye {
  @ApiProperty({ title: '参数名' })
  name: string;

  @ApiProperty({ title: '参数值' })
  value: string;
}

export class CreateProductParamDto {
  @ApiProperty({ title: '参数模板名称' })
  name: string;

  @ApiProperty({ title: '参数列表', type: [ParamTpye] })
  params: [ParamTpye];
}
