import { Module } from '@nestjs/common';
import { ChatNessageService } from './chat-nessage.service';
import { ChatNessageController } from './chat-nessage.controller';

@Module({
  controllers: [ChatNessageController],
  providers: [ChatNessageService],
})
export class ChatNessageModule {}
