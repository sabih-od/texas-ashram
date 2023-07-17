import {IsNotEmpty, IsUrl} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateSpeakerDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Name' })
    name: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'Evangelist' })
    designation: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'Speaker description here.' })
    description: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    image: string;

    created_at: string;
}
