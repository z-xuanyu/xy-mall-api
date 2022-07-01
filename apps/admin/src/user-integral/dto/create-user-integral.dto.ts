/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-07-01 10:06:38
 * @LastEditTime: 2022-07-01 10:09:07
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserIntegralDto {
  @ApiProperty({ title: '用户id' })
  userId: string;

  @ApiProperty({ title: '积分' })
  integral: number;
}
