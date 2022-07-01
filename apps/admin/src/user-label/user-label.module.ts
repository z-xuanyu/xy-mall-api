import { Module } from '@nestjs/common';
import { UserLabelService } from './user-label.service';
import { UserLabelController } from './user-label.controller';

@Module({
  controllers: [UserLabelController],
  providers: [UserLabelService],
})
export class UserLabelModule {}
