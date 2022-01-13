/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:53:53
 * @LastEditTime: 2022-01-12 15:48:48
 * @Description: 数据库模块
 */
import { dbConfig } from '@app/common/config/db.config';
import { Global, Module } from '@nestjs/common';
import { TypegooseConnectionOptions, TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { Admin } from './modules/admin.model';
import { Banner } from './modules/banner.model';
import { Category } from './modules/category.model';
import { LibraryCategory } from './modules/library-category.model';
import { MediaLibrary } from './modules/media-library.model';
import { News } from './modules/news.model';
import { ProductParam } from './modules/product-param.model';
import { ProductTopic } from './modules/product-topic.model';
import { Product } from './modules/product.model';
import { User } from './modules/user.model';

// 导入所有的Schema模块
const models = TypegooseModule.forFeature([
  Admin,
  User,
  Category,
  News,
  Product,
  ProductParam,
  ProductTopic,
  Banner,
  LibraryCategory,
  MediaLibrary,
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
