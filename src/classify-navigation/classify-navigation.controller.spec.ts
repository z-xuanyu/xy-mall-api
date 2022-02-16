import { Test, TestingModule } from '@nestjs/testing';
import { ClassifyNavigationController } from './classify-navigation.controller';
import { ClassifyNavigationService } from './classify-navigation.service';

describe('ClassifyNavigationController', () => {
  let controller: ClassifyNavigationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassifyNavigationController],
      providers: [ClassifyNavigationService],
    }).compile();

    controller = module.get<ClassifyNavigationController>(ClassifyNavigationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
