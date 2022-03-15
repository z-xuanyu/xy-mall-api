import { Module } from '@nestjs/common';
import { UserCartService } from './user-cart.service';
import { UserCartController } from './user-cart.controller';

@Module({
  controllers: [UserCartController],
  providers: [UserCartService]
})
export class UserCartModule {}
