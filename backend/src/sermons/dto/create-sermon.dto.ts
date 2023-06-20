import {IsNotEmpty, MaxLength, IsUrl} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateSermonDto {
    @IsNotEmpty()
    @MaxLength(20)
    @ApiProperty({ example: 'Sermon title' })
    title: string;

    @IsUrl()
    @ApiProperty({ example: 'https://you.tube/asdghasuydgt' })
    url: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    media: string;
}
