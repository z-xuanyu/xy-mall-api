import { PartialType } from '@nestjs/swagger';
import { CreateCustomerServiceDto } from './create-customer-service.dto';

export class UpdateCustomerServiceDto extends PartialType(
  CreateCustomerServiceDto,
) {}
