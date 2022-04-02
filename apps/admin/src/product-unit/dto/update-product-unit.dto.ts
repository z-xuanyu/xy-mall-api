import { PartialType } from '@nestjs/swagger';
import { CreateProductUnitDto } from './create-product-unit.dto';

export class UpdateProductUnitDto extends PartialType(CreateProductUnitDto) {}
