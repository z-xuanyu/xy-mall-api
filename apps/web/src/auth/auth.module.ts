/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:13:27
 * @LastEditTime: 2022-03-03 11:19:22
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { webJwtConfig } from 'libs/common/config/jwt.config';
import { AuthController } from './auth.controller';
import { WebJwtStrategy } from './web.jwt.strategy';
import { WebLocalStrategy } from './web.local.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: webJwtConfig.secret,
      signOptions: { expiresIn: webJwtConfig.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [WebLocalStrategy, WebJwtStrategy, AuthService],
})
export class AuthModule {}
