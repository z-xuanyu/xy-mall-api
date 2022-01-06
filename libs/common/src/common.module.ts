/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:54:11
 * @LastEditTime: 2022-01-06 11:32:13
 * @Description: Modify here please
 */
import { DbModule } from '@app/db';
import { Global, Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    DbModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
