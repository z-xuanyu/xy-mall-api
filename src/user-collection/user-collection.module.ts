import { Module } from '@nestjs/common';
import { UserCollectionService } from './user-collection.service';
import { UserCollectionController } from './user-collection.controller';

@Module({
  controllers: [UserCollectionController],
  providers: [UserCollectionService]
})
export class UserCollectionModule {}
