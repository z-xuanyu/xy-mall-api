import { Module } from '@nestjs/common';
import { ClassifyNavigationService } from './classify-navigation.service';
import { ClassifyNavigationController } from './classify-navigation.controller';

@Module({
  controllers: [ClassifyNavigationController],
  providers: [ClassifyNavigationService]
})
export class ClassifyNavigationModule {}
