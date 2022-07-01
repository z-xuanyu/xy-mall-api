import { Test, TestingModule } from '@nestjs/testing';
import { UserLabelService } from './user-label.service';

describe('UserLabelService', () => {
  let service: UserLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLabelService],
    }).compile();

    service = module.get<UserLabelService>(UserLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
