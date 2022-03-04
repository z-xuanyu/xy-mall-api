/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:57:10
 * @LastEditTime: 2022-03-04 09:54:24
 * @Description: Modify here please
 */
import { Global, Module } from '@nestjs/common';
import { dbConfig } from 'libs/common/config/db.config';
import { TypegooseConnectionOptions, TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { Admin } from './modules/admin.model';
import { Banner } from './modules/banner.model';
import { Category } from './modules/category.model';
import { ChatMessages } from './modules/chat-messages.model';
import { ClassifyNavigation } from './modules/classify-navigation.model';
import { LibraryCategory } from './modules/library-category.model';
import { MediaLibrary } from './modules/media-library.model';
import { News } from './modules/news.model';
import { ProductParam } from './modules/product-param.model';
import { ProductSku } from './modules/product-sku.model';
import { ProductTopic } from './modules/product-topic.model';
import { Product } from './modules/product.model';
import { Tag } from './modules/tag.model';
import { UserAddress } from './modules/user-address.model';
import { UserCollection } from './modules/user-collection.model';
import { UserViewsHistory } from './modules/user-views-history.model';
import { User } from './modules/user.model';

// 导入所有的Schema模块
const models = TypegooseModule.forFeature([
  Admin,
  User,
  UserAddress,
  UserCollection,
  UserViewsHistory,
  ClassifyNavigation,
  Tag,
  News,
  Product,
  Category,
  ProductParam,
  ProductTopic,
  ProductSku,
  Banner,
  LibraryCategory,
  MediaLibrary,
  ChatMessages,
]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot(dbConfig.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as TypegooseConnectionOptions),

    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
