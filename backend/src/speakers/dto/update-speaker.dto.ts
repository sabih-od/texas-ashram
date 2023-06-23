import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateSpeakerDto } from './create-speaker.dto';

export class UpdateSpeakerDto extends PartialType(CreateSpeakerDto) {
    @ApiProperty({ example: 'Name' })
    name: string;

    @ApiProperty({ example: 'Evangelist' })
    designation: string;

    @ApiProperty({ example: 'Speaker description here.' })
    description: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    image: string;
}
