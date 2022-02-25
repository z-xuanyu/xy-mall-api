import { Module } from '@nestjs/common';
import { UserAddressService } from './user-address.service';
import { UserAddressController } from './user-address.controller';

@Module({
  controllers: [UserAddressController],
  providers: [UserAddressService]
})
export class UserAddressModule {}
