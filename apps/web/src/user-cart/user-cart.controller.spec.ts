import { Test, TestingModule } from '@nestjs/testing';
import { UserCartController } from './user-cart.controller';
import { UserCartService } from './user-cart.service';

describe('UserCartController', () => {
  let controller: UserCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCartController],
      providers: [UserCartService],
    }).compile();

    controller = module.get<UserCartController>(UserCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
