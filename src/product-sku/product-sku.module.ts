import { Module } from '@nestjs/common';
import { ProductSkuService } from './product-sku.service';
import { ProductSkuController } from './product-sku.controller';

@Module({
  controllers: [ProductSkuController],
  providers: [ProductSkuService]
})
export class ProductSkuModule {}
