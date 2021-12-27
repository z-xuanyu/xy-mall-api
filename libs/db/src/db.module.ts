/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:53:53
 * @LastEditTime: 2021-12-27 16:17:37
 * @Description: Modify here please
 */
import { Global, Module } from '@nestjs/common';
import { TypegooseConnectionOptions, TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { Admin } from './modules/admin.model';
import { Category } from './modules/category.model';
import { User } from './modules/user.model';

// 导入所有的Schema模块
const models = TypegooseModule.forFeature([Admin, User, Category]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/nest-jp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as TypegooseConnectionOptions),

    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
