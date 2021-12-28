/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:14:49
 * @LastEditTime: 2021-12-24 17:32:23
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

@Module({
  imports: [CommonModule, AuthModule, AdminModule, UserModule, CategoryModule, NewsModule, ProductModule, ProductTopicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
