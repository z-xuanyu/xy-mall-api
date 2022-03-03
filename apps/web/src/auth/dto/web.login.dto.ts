/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 14:32:36
 * @LastEditTime: 2021-12-27 14:34:01
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class WebLoginDto {
  @ApiProperty({ title: '邮箱' })
  @IsString({ message: '邮箱不能为空' })
  @IsEmail({ ignore_max_length: true }, { message: '请输入正确的邮箱' })
  email: string;

  @ApiProperty({ title: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}
