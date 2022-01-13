/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-12 15:33:23
 * @LastEditTime: 2022-01-12 15:47:21
 * @Description: 产品参数模板模型
 */

import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

class ParamTpye {
  @ApiProperty({ title: '参数名' })
  name: string;

  @ApiProperty({ title: '参数值' })
  value: string;
}

// 添加创建时间、更新时间字段
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ProductParam {
  @ApiProperty({ title: '参数模板名称' })
  @prop({ required: true })
  name: string;

  @ApiProperty({ title: '参数模板名称' })
  @prop({ required: true, type: [ParamTpye] })
  params: [ParamTpye];
}
