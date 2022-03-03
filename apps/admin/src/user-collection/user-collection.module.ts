/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 11:00:59
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { UserCollectionService } from './user-collection.service';
import { UserCollectionController } from './user-collection.controller';

@Module({
  controllers: [UserCollectionController],
  providers: [UserCollectionService],
})
export class UserCollectionModule {}
