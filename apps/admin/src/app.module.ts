/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:54:20
 * @LastEditTime: 2022-03-16 17:59:05
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { CommonModule } from 'libs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { SettingsModule } from './settings/settings.module';
import { OrderModule } from './order/order.module';
import { ProductCommentModule } from './product-comment/product-comment.module';

@Module({
  imports: [
    CommonModule,
    ChatMessageModule,
    AuthModule,
    AdminModule,
    UserModule,
    OrderModule,
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
    SettingsModule,
    ProductCommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
