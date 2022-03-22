/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:46:06
 * @LastEditTime: 2022-03-22 10:59:53
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { ProductCommentService } from './product-comment.service';
import { ProductCommentController } from './product-comment.controller';
import { WebService } from '../web.service';

@Module({
  controllers: [ProductCommentController],
  providers: [ProductCommentService, WebService],
})
export class ProductCommentModule {}
