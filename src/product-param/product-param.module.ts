import { Module } from '@nestjs/common';
import { ProductParamService } from './product-param.service';
import { ProductParamController } from './product-param.controller';

@Module({
  controllers: [ProductParamController],
  providers: [ProductParamService]
})
export class ProductParamModule {}
