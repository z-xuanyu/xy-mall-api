/*
 * @Author: xuanyu
 * @LastEditors: xuanyu 969718197@qq.com
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-14 14:37:17
 * @LastEditTime: 2023-08-02 15:18:37
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDefaultDto {
  @ApiProperty({ title: '地址id' })
  id: string;

  @ApiProperty({ title: '用户id' })
  userId: string | unknown;

  @ApiProperty({ title: '是否默认' })
  isDefault: boolean;
}
