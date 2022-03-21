import { Test, TestingModule } from '@nestjs/testing';
import { ProductCommentController } from './product-comment.controller';
import { ProductCommentService } from './product-comment.service';

describe('ProductCommentController', () => {
  let controller: ProductCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCommentController],
      providers: [ProductCommentService],
    }).compile();

    controller = module.get<ProductCommentController>(ProductCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
