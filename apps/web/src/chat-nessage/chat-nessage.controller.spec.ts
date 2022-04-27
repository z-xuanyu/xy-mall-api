import { Test, TestingModule } from '@nestjs/testing';
import { ChatNessageController } from './chat-nessage.controller';
import { ChatNessageService } from './chat-nessage.service';

describe('ChatNessageController', () => {
  let controller: ChatNessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatNessageController],
      providers: [ChatNessageService],
    }).compile();

    controller = module.get<ChatNessageController>(ChatNessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
