/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:41:06
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { LibraryCategoryService } from './library-category.service';
import { LibraryCategoryController } from './library-category.controller';

@Module({
  controllers: [LibraryCategoryController],
  providers: [LibraryCategoryService],
})
export class LibraryCategoryModule {}
