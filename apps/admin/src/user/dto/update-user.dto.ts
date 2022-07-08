/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-30 16:18:18
 * @LastEditTime: 2022-07-08 12:19:07
 * @Description: 更新用户基本信息
 */
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ title: '用户昵称' })
  nickname: string;

  @ApiProperty({ title: '用户头像' })
  avatarUrl: string;

  @ApiProperty({ title: '邮箱' })
  email: string;
}
