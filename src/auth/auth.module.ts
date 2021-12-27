/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:18:56
 * @LastEditTime: 2021-12-27 14:26:37
 * @Description: 登录策略和jwt错误 模块
 */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminJwtStrategy } from './admin.jwt.strategy';
import { AdminLocalStrategy } from './admin.local.strategy';
import { AuthController } from './auth.controller';
import { WebJwtStrategy } from './web.jwt.strategy';
import { WebLocalStrategy } from './web.local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'xuanyu',
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AdminLocalStrategy,
    AdminJwtStrategy,
    WebLocalStrategy,
    WebJwtStrategy,
  ],
})
export class AuthModule {}
