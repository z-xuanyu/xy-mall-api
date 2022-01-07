import { Test, TestingModule } from '@nestjs/testing';
import { LibraryCategoryService } from './library-category.service';

describe('LibraryCategoryService', () => {
  let service: LibraryCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryCategoryService],
    }).compile();

    service = module.get<LibraryCategoryService>(LibraryCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
