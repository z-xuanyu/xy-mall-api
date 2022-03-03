import { Test, TestingModule } from '@nestjs/testing';
import { ProductParamController } from './product-param.controller';
import { ProductParamService } from './product-param.service';

describe('ProductParamController', () => {
  let controller: ProductParamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductParamController],
      providers: [ProductParamService],
    }).compile();

    controller = module.get<ProductParamController>(ProductParamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
