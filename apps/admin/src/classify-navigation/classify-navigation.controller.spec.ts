/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:39:07
 * @Description: Modify here please
 */
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
