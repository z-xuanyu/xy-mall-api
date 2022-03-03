import { Test, TestingModule } from '@nestjs/testing';
import { ProductSkuController } from './product-sku.controller';
import { ProductSkuService } from './product-sku.service';

describe('ProductSkuController', () => {
  let controller: ProductSkuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductSkuController],
      providers: [ProductSkuService],
    }).compile();

    controller = module.get<ProductSkuController>(ProductSkuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
