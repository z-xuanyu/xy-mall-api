import { Test, TestingModule } from '@nestjs/testing';
import { ChatNessageService } from './chat-nessage.service';

describe('ChatNessageService', () => {
  let service: ChatNessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatNessageService],
    }).compile();

    service = module.get<ChatNessageService>(ChatNessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
