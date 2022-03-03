import { Test, TestingModule } from '@nestjs/testing';
import { MediaLibraryService } from './media-library.service';

describe('MediaLibraryService', () => {
  let service: MediaLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaLibraryService],
    }).compile();

    service = module.get<MediaLibraryService>(MediaLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
