/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:25:45
 * @LastEditTime: 2021-12-24 15:26:32
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';

@Module({
  controllers: [AdminController],
})
export class AdminModule {}
