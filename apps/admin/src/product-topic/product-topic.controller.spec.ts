import { Test, TestingModule } from '@nestjs/testing';
import { ProductTopicController } from './product-topic.controller';
import { ProductTopicService } from './product-topic.service';

describe('ProductTopicController', () => {
  let controller: ProductTopicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTopicController],
      providers: [ProductTopicService],
    }).compile();

    controller = module.get<ProductTopicController>(ProductTopicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
