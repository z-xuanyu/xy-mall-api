/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:39:32
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { ClassifyNavigationService } from './classify-navigation.service';
import { ClassifyNavigationController } from './classify-navigation.controller';

@Module({
  controllers: [ClassifyNavigationController],
  providers: [ClassifyNavigationService],
})
export class ClassifyNavigationModule {}
