import {IsNotEmpty, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateBookDto {
    @IsNotEmpty()
    @MaxLength(20)
    @ApiProperty({example: 'Books Lorem Ipsum'})
    title: string;

    @ApiProperty({example: 'OneDrive files Upload'})
    file: string;

    @ApiProperty({example: 'Place Your Book Image'})
    image: string;
}
