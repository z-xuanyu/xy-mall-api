import { Test, TestingModule } from '@nestjs/testing';
import { ProductUnitController } from './product-unit.controller';
import { ProductUnitService } from './product-unit.service';

describe('ProductUnitController', () => {
  let controller: ProductUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductUnitController],
      providers: [ProductUnitService],
    }).compile();

    controller = module.get<ProductUnitController>(ProductUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
