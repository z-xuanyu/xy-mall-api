import { Module } from '@nestjs/common';
import { ProductTopicService } from './product-topic.service';
import { ProductTopicController } from './product-topic.controller';

@Module({
  controllers: [ProductTopicController],
  providers: [ProductTopicService]
})
export class ProductTopicModule {}
