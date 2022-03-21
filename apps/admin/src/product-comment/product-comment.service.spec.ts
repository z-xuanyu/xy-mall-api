import { Test, TestingModule } from '@nestjs/testing';
import { ProductCommentService } from './product-comment.service';

describe('ProductCommentService', () => {
  let service: ProductCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCommentService],
    }).compile();

    service = module.get<ProductCommentService>(ProductCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
