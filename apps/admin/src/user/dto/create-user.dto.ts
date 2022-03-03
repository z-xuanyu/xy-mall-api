/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:07:52
 * @LastEditTime: 2022-02-25 11:20:54
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ title: '名称' })
  @IsNotEmpty({ message: '用户名不能为空' })
  name: string;

  @ApiProperty({ title: '邮箱' })
  @IsString({ message: '邮箱不能为空' })
  @IsEmail({ ignore_max_length: true }, { message: '请输入正确的邮箱' })
  email: string;

  @ApiProperty({ title: '手机号码' })
  phone: string;

  @ApiProperty({ title: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;

  @ApiProperty({ title: '头像' })
  avatar: string;

  @ApiProperty({
    title: '性别',
    default: 1,
    type: Number,
    description: '1: 男，2: 女',
  })
  gender: number;
}
