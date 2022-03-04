/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:54:20
 * @LastEditTime: 2022-03-04 10:20:56
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from 'libs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import MAO = require('multer-aliyun-oss');
import { aliOssConfig } from 'libs/common/config/alioss.config';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { UserAddressModule } from './user-address/user-address.module';
import { CategoryModule } from './category/category.module';
import { NewsModule } from './news/news.module';
import { TagModule } from './tag/tag.module';
import { ProductModule } from './product/product.module';
import { ProductParamModule } from './product-param/product-param.module';
import { ProductSkuModule } from './product-sku/product-sku.module';
import { ProductTopicModule } from './product-topic/product-topic.module';
import { BannerModule } from './banner/banner.module';
import { LibraryCategoryModule } from './library-category/library-category.module';
import { MediaLibraryModule } from './media-library/media-library.module';
import { ClassifyNavigationModule } from './classify-navigation/classify-navigation.module';
import { UserCollectionModule } from './user-collection/user-collection.module';
import { ChatMessageModule } from './chat/caht.module';

@Module({
  imports: [
    CommonModule,
    ChatMessageModule,
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
    UserAddressModule,
    CategoryModule,
    NewsModule,
    TagModule,
    ProductModule,
    ProductParamModule,
    ProductSkuModule,
    ProductTopicModule,
    BannerModule,
    LibraryCategoryModule,
    MediaLibraryModule,
    ClassifyNavigationModule,
    UserCollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
