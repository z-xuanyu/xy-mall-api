import { Module } from '@nestjs/common';
import { UserIntegralService } from './user-integral.service';
import { UserIntegralController } from './user-integral.controller';

@Module({
  controllers: [UserIntegralController],
  providers: [UserIntegralService],
})
export class UserIntegralModule {}
