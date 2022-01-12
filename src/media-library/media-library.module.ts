import { Module } from '@nestjs/common';
import { MediaLibraryService } from './media-library.service';
import { MediaLibraryController } from './media-library.controller';

@Module({
  controllers: [MediaLibraryController],
  providers: [MediaLibraryService]
})
export class MediaLibraryModule {}
