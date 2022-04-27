import { PartialType } from '@nestjs/swagger';
import { CreateChatNessageDto } from './create-chat-nessage.dto';

export class UpdateChatNessageDto extends PartialType(CreateChatNessageDto) {}
