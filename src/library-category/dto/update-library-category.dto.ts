import { PartialType } from '@nestjs/swagger';
import { CreateLibraryCategoryDto } from './create-library-category.dto';

export class UpdateLibraryCategoryDto extends PartialType(CreateLibraryCategoryDto) {}
