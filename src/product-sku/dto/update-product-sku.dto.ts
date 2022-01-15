import { PartialType } from '@nestjs/swagger';
import { CreateProductSkuDto } from './create-product-sku.dto';

export class UpdateProductSkuDto extends PartialType(CreateProductSkuDto) {}
