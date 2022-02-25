/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:39:34
 * @LastEditTime: 2022-02-25 10:00:07
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminDto {
  @ApiProperty({ title: '名称' })
  name: string;

  @ApiProperty({ title: '角色标识' })
  roles: Array<string>;
}

export class UpdateStatusDto {
  @ApiProperty({ title: '名称' })
  status: boolean;
}
