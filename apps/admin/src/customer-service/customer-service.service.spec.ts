import { Test, TestingModule } from '@nestjs/testing';
import { CustomerServiceService } from './customer-service.service';

describe('CustomerServiceService', () => {
  let service: CustomerServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerServiceService],
    }).compile();

    service = module.get<CustomerServiceService>(CustomerServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
