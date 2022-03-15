import { Test, TestingModule } from '@nestjs/testing';
import { UserCartService } from './user-cart.service';

describe('UserCartService', () => {
  let service: UserCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCartService],
    }).compile();

    service = module.get<UserCartService>(UserCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
