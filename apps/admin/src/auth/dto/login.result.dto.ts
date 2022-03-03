/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 14:40:17
 * @LastEditTime: 2021-12-27 14:47:13
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class LoginResultDto {
  @ApiProperty({ title: 'token令牌' })
  accessToken: string;

  @ApiProperty({ title: '邮箱' })
  email: string;

  @ApiProperty({ title: '名称' })
  name: string;
}
