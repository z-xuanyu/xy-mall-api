import { Module } from '@nestjs/common';
import { ProductUnitService } from './product-unit.service';
import { ProductUnitController } from './product-unit.controller';

@Module({
  controllers: [ProductUnitController],
  providers: [ProductUnitService],
})
export class ProductUnitModule {}
