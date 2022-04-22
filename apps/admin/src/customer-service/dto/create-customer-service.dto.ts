/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-22 09:56:57
 * @LastEditTime: 2022-04-22 09:58:14
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerServiceDto {
  @ApiProperty({ title: '客服名称' })
  name: string;

  @ApiProperty({ title: '手机号' })
  phone: string;

  @ApiProperty({ title: '密码' })
  password: string;

  @ApiProperty({ title: '头像' })
  avatar: string;
}
