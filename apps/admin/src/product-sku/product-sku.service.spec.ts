import { Test, TestingModule } from '@nestjs/testing';
import { ProductSkuService } from './product-sku.service';

describe('ProductSkuService', () => {
  let service: ProductSkuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSkuService],
    }).compile();

    service = module.get<ProductSkuService>(ProductSkuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
