/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-08 18:01:22
 * @LastEditTime: 2022-03-14 12:09:26
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserAddressDto {
  @ApiProperty({ title: '收货人名字' })
  @IsNotEmpty({ message: '名字不能为空' })
  name: string;

  @ApiProperty({ title: '收货人手机号' })
  @IsNotEmpty({ message: '手机号不能为空' })
  phone: string;

  @ApiProperty({ title: '用户id' })
  userId: string;

  @ApiProperty({ title: '地址' })
  @IsNotEmpty({ message: '地址不能为空' })
  address: string;

  @ApiProperty({ title: '详细地址' })
  @IsNotEmpty({ message: '详细不能为空' })
  detail: string;

  @ApiProperty({ title: '备注', required: false })
  remark: string;

  @ApiProperty({ title: '是否默认', default: false })
  isDefault: boolean;
}
