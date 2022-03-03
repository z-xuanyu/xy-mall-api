/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:38:30
 * @LastEditTime: 2021-12-24 17:38:30
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class AdminLoginDto {
  @ApiProperty({ title: '邮箱' })
  email: string;
  @ApiProperty({ title: '密码' })
  password: string;
}
