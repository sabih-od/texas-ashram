import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePageDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'about' })
    name: string;

    @IsNotEmpty()
    @ApiProperty({ type: 'text' })
    content: string;

    created_at: string;
}
