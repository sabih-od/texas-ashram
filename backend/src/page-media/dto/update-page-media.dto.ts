import { PartialType } from '@nestjs/swagger';
import { CreatePageMediaDto } from './create-page-media.dto';

export class UpdatePageMediaDto extends PartialType(CreatePageMediaDto) {}
