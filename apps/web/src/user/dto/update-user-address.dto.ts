/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 17:59:45
 * @LastEditTime: 2022-03-03 17:59:46
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserAddressDto {
  @ApiProperty({ title: '收货人名称' })
  name: string;
}
