import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import {IsUrl, MaxLength} from "class-validator";

export class UpdatePostDto extends PartialType(CreatePostDto) {
    @ApiProperty({ example: 'Post title' })
    title: string;

    @ApiProperty({ example: 'This is my post.' })
    content: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    media: string;

    created_at: string;
}
