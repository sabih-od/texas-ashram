import {PartialType} from '@nestjs/mapped-types';
import {CreateBookDto} from './create-book.dto';
import {MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @MaxLength(20)
    @ApiProperty({example: 'Books Lorem Ipsum'})
    title: string;

    @ApiProperty({example: 'OneDrive Files Upload'})
    file: string;

    @ApiProperty({example: 'Place Your Book Image'})
    image: string;

}
