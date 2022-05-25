/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-25 14:49:50
 * @LastEditTime: 2022-05-25 15:06:48
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class MiniLoginDto {
  @ApiProperty({ title: 'code' })
  code: string;

  @ApiProperty({ title: '微信用户昵称' })
  nickName: string;

  @ApiProperty({ title: '微信用户头像' })
  avatarUrl: string;
}

export class MiniProgramRegisterDto {
  @ApiProperty({ title: '微信用户昵称' })
  nickName: string;

  @ApiProperty({ title: '微信用户头像' })
  avatarUrl: string;

  @ApiProperty({ title: '微信用户openid' })
  openid: string;

  @ApiProperty({ title: '微信用户sessionKey' })
  sessionKey: string;
}
