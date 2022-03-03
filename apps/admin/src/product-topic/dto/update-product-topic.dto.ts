import { PartialType } from '@nestjs/swagger';
import { CreateProductTopicDto } from './create-product-topic.dto';

export class UpdateProductTopicDto extends PartialType(CreateProductTopicDto) {}
