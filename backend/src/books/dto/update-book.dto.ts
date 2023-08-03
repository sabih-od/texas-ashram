import {PartialType} from '@nestjs/mapped-types';
import {CreateBookDto} from './create-book.dto';
import {ApiProperty} from "@nestjs/swagger";

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @ApiProperty({example: 'Books Lorem Ipsum'})
    title: string;

    @ApiProperty({example: 'Books Description'})
    description: string;

    @ApiProperty({example: 'OneDrive Files Upload'})
    file: string;

    @ApiProperty({example: 'https://www.google.com'})
    url: string;

    @ApiProperty({example: 'Place Your Book Image'})
    image: string;

}
