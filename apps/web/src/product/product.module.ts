/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 14:42:51
 * @LastEditTime: 2022-03-07 15:16:43
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { JwtModule } from '@nestjs/jwt';
import { webJwtConfig } from 'libs/common/config/jwt.config';

@Module({
  imports: [
    JwtModule.register({
      secret: webJwtConfig.secret,
      signOptions: { expiresIn: webJwtConfig.expiresIn },
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
