import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePostDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Post title' })
    title: string;

    @ApiProperty({ example: 'This is my post.' })
    @IsNotEmpty()
    content: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    media: string;

    created_at: string;
}
