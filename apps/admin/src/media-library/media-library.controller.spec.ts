import { Test, TestingModule } from '@nestjs/testing';
import { MediaLibraryController } from './media-library.controller';
import { MediaLibraryService } from './media-library.service';

describe('MediaLibraryController', () => {
  let controller: MediaLibraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaLibraryController],
      providers: [MediaLibraryService],
    }).compile();

    controller = module.get<MediaLibraryController>(MediaLibraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
