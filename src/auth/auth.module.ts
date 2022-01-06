/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:18:56
 * @LastEditTime: 2022-01-06 10:55:20
 * @Description: 登录策略和jwt错误 模块
 */
import { jwtConfig } from '@app/common/config/jwt.config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminModule } from 'src/admin/admin.module';
import { UserModule } from 'src/user/user.module';
import { AdminJwtStrategy } from './admin.jwt.strategy';
import { AdminLocalStrategy } from './admin.local.strategy';
import { AuthController } from './auth.controller';
import { WebJwtStrategy } from './web.jwt.strategy';
import { WebLocalStrategy } from './web.local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: { expiresIn: jwtConfig.expiresIn },
    }),
    UserModule,
    AdminModule,
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
