/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-12 15:20:44
 * @LastEditTime: 2022-04-12 15:22:11
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';

export class ChangeClassifyNavigationStatusDto {
  @ApiProperty({ title: '状态' })
  status: boolean;
}
