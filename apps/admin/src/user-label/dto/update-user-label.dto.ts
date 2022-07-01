import { PartialType } from '@nestjs/swagger';
import { CreateUserLabelDto } from './create-user-label.dto';

export class UpdateUserLabelDto extends PartialType(CreateUserLabelDto) {}
