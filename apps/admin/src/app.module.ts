/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:54:20
 * @LastEditTime: 2022-06-27 10:19:06
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
import { RoleModule } from './role/role.module';
import { MenuModule } from './menu/menu.module';
import { ProductUnitModule } from './product-unit/product-unit.module';
import { CustomerServiceModule } from './customer-service/customer-service.module';
// import { MulterModule } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import * as nuid from 'nuid';
// import { join } from 'path';
import { UserIntegralModule } from './user-integral/user-integral.module';

@Module({
  imports: [
    CommonModule,
    ChatMessageModule,
    AuthModule,
    // MulterModule.register({
    //   storage: diskStorage({
    //     // 配置文件上传后的文件夹路径
    //     destination: join(__dirname, 'uploads-images'),
    //     filename: (req, file, cb) => {
    //       // 在此处自定义保存后的文件名称
    //       const filename = `${nuid.next()}.${file.mimetype.split('/')[1]}`;
    //       return cb(null, filename);
    //     },
    //   }),
    // }),
    AdminModule,
    RoleModule,
    MenuModule,
    UserModule,
    UserAddressModule,
    UserCollectionModule,
    OrderModule,
    NewsModule,
    TagModule,
    ProductModule,
    CategoryModule,
    ProductParamModule,
    ProductSkuModule,
    ProductTopicModule,
    ProductCommentModule,
    BannerModule,
    LibraryCategoryModule,
    MediaLibraryModule,
    ClassifyNavigationModule,
    ProductUnitModule,
    CustomerServiceModule,
    SettingsModule,
    UserIntegralModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
