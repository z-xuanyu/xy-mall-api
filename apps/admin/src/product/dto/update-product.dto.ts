import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class BatchUpdateHotStatusDto {
  @ApiProperty({ title: '状态', type: [String] })
  ids: Array<string>;
  @ApiProperty({ title: '状态', type: Boolean })
  status: boolean;
}

export class BatchUpdateTimeLimitStatusDto {
  @ApiProperty({ title: '状态', type: [String] })
  ids: Array<string>;
  @ApiProperty({ title: '状态', type: Boolean })
  status: boolean;
}

export class ProductStatusDto {
  @ApiProperty({ title: '状态', type: Boolean })
  status: boolean;
}
