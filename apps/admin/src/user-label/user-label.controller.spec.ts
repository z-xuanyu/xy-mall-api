import { Test, TestingModule } from '@nestjs/testing';
import { UserLabelController } from './user-label.controller';
import { UserLabelService } from './user-label.service';

describe('UserLabelController', () => {
  let controller: UserLabelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLabelController],
      providers: [UserLabelService],
    }).compile();

    controller = module.get<UserLabelController>(UserLabelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
