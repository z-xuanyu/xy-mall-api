/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:40:26
 * @Description: Modify here please
 */
import { Test, TestingModule } from '@nestjs/testing';
import { LibraryCategoryController } from './library-category.controller';
import { LibraryCategoryService } from './library-category.service';

describe('LibraryCategoryController', () => {
  let controller: LibraryCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibraryCategoryController],
      providers: [LibraryCategoryService],
    }).compile();

    controller = module.get<LibraryCategoryController>(LibraryCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
