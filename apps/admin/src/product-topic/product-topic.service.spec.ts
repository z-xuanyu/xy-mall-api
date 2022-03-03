import { Test, TestingModule } from '@nestjs/testing';
import { ProductTopicService } from './product-topic.service';

describe('ProductTopicService', () => {
  let service: ProductTopicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductTopicService],
    }).compile();

    service = module.get<ProductTopicService>(ProductTopicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
