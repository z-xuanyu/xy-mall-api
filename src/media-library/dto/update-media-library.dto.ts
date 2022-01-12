import { PartialType } from '@nestjs/swagger';
import { CreateMediaLibraryDto } from './create-media-library.dto';

export class UpdateMediaLibraryDto extends PartialType(CreateMediaLibraryDto) {}
