/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:18:56
 * @LastEditTime: 2022-05-09 15:21:30
 * @Description: 登录策略和jwt错误 模块
 */
import { CacheModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { adminJwtConfig } from 'libs/common/config/jwt.config';
import { AdminJwtStrategy } from './admin.jwt.strategy';
import { AdminLocalStrategy } from './admin.local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    CacheModule.register(),
    PassportModule,
    JwtModule.register({
      secret: adminJwtConfig.secret,
      signOptions: { expiresIn: adminJwtConfig.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AdminLocalStrategy, AdminJwtStrategy],
})
// eslint-disable-next-line prettier/prettier
export class AuthModule {}
