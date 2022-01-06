/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:14:49
 * @LastEditTime: 2022-01-06 11:32:59
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from '@app/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { NewsModule } from './news/news.module';
import { ProductModule } from './product/product.module';
import { ProductTopicModule } from './product-topic/product-topic.module';
import { BannerModule } from './banner/banner.module';
import MAO = require('multer-aliyun-oss');
import { MulterModule } from '@nestjs/platform-express';
import { aliOssConfig } from '@app/common/config/alioss.config';

@Module({
  imports: [
    CommonModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: aliOssConfig.region,
              accessKeyId: aliOssConfig.accessKeyId,
              accessKeySecret: aliOssConfig.accessKeySecret,
              bucket: aliOssConfig.bucket,
            },
          }),
        };
      },
    }),
    AuthModule,
    AdminModule,
    UserModule,
    CategoryModule,
    NewsModule,
    ProductModule,
    ProductTopicModule,
    BannerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
