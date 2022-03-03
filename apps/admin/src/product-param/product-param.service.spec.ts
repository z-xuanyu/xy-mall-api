import { Test, TestingModule } from '@nestjs/testing';
import { ProductParamService } from './product-param.service';

describe('ProductParamService', () => {
  let service: ProductParamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductParamService],
    }).compile();

    service = module.get<ProductParamService>(ProductParamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
