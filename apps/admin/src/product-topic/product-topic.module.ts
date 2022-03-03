/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:55:47
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { ProductTopicService } from './product-topic.service';
import { ProductTopicController } from './product-topic.controller';

@Module({
  controllers: [ProductTopicController],
  providers: [ProductTopicService],
})
export class ProductTopicModule {}
