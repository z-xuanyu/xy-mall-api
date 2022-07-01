import { PartialType } from '@nestjs/swagger';
import { CreateUserIntegralDto } from './create-user-integral.dto';

export class UpdateUserIntegralDto extends PartialType(CreateUserIntegralDto) {}
