/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 15:19:50
 * @LastEditTime: 2021-12-27 15:26:27
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class WebRegisterDto {
  @ApiProperty({ title: '名称' })
  name: string;

  @ApiProperty({ title: '邮箱' })
  email: string;

  @ApiProperty({ title: '密码' })
  password: string;
}
