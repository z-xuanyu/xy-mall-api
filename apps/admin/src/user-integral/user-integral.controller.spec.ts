import { Test, TestingModule } from '@nestjs/testing';
import { UserIntegralController } from './user-integral.controller';
import { UserIntegralService } from './user-integral.service';

describe('UserIntegralController', () => {
  let controller: UserIntegralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserIntegralController],
      providers: [UserIntegralService],
    }).compile();

    controller = module.get<UserIntegralController>(UserIntegralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
