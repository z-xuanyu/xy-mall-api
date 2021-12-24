/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:54:11
 * @LastEditTime: 2021-12-24 17:56:03
 * @Description: Modify here please
 */
import { DbModule } from '@app/db';
import { Global, Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
import { CommonService } from './common.service';

@Global()
@Module({
  imports: [
    DbModule,
    // JwtModule.registerAsync({
    //   useFactory() {
    //     return {
    //       secret: 'xuanyu',
    //       signOptions: { expiresIn: '3600s' },
    //     };
    //   },
    // }),
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
