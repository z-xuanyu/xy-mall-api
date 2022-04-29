/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-28 18:08:03
 * @LastEditTime: 2022-04-28 18:08:03
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class TestDto {
  @ApiProperty({ title: '文件路径' })
  filePath: string;
}
