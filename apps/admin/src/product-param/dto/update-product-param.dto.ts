import { PartialType } from '@nestjs/swagger';
import { CreateProductParamDto } from './create-product-param.dto';

export class UpdateProductParamDto extends PartialType(CreateProductParamDto) {}
