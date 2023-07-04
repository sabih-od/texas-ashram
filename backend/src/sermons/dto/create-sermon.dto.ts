import {IsNotEmpty, IsUrl} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateSermonDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Sermon title' })
    title: string;

    @IsUrl()
    @ApiProperty({ example: 'https://you.tube/asdghasuydgt' })
    url: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    media: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    image: string;

    @ApiProperty({ example: 'This is the description for sermons' })
    description: string;

    created_at: string;
}
