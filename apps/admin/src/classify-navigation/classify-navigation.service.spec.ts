import { Test, TestingModule } from '@nestjs/testing';
import { ClassifyNavigationService } from './classify-navigation.service';

describe('ClassifyNavigationService', () => {
  let service: ClassifyNavigationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassifyNavigationService],
    }).compile();

    service = module.get<ClassifyNavigationService>(ClassifyNavigationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
