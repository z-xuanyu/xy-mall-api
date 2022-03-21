import { Module } from '@nestjs/common';
import { ProductCommentService } from './product-comment.service';
import { ProductCommentController } from './product-comment.controller';

@Module({
  controllers: [ProductCommentController],
  providers: [ProductCommentService],
})
export class ProductCommentModule {}
