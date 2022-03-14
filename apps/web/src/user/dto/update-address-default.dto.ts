/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-14 14:37:17
 * @LastEditTime: 2022-03-14 14:39:18
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDefaultDto {
  @ApiProperty({ title: '地址id' })
  id: string;

  @ApiProperty({ title: '用户id' })
  userId: string;

  @ApiProperty({ title: '是否默认' })
  isDefault: boolean;
}
