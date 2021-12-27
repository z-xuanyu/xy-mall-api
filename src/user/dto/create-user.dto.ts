/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:07:52
 * @LastEditTime: 2021-12-27 12:20:14
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: '用户名不能为空' })
  name: string;

  @ApiProperty()
  @IsString({ message: '邮箱不能为空' })
  @IsEmail({ ignore_max_length: true }, { message: '请输入正确的邮箱' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}
