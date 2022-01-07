import { Module } from '@nestjs/common';
import { LibraryCategoryService } from './library-category.service';
import { LibraryCategoryController } from './library-category.controller';

@Module({
  controllers: [LibraryCategoryController],
  providers: [LibraryCategoryService]
})
export class LibraryCategoryModule {}
