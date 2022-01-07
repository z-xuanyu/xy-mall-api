import { Test, TestingModule } from '@nestjs/testing';
import { LibraryCategoryController } from './library-category.controller';
import { LibraryCategoryService } from './library-category.service';

describe('LibraryCategoryController', () => {
  let controller: LibraryCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibraryCategoryController],
      providers: [LibraryCategoryService],
    }).compile();

    controller = module.get<LibraryCategoryController>(LibraryCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
