import { Test, TestingModule } from '@nestjs/testing';
import { UserIntegralService } from './user-integral.service';

describe('UserIntegralService', () => {
  let service: UserIntegralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserIntegralService],
    }).compile();

    service = module.get<UserIntegralService>(UserIntegralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
