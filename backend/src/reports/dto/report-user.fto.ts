import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class ReportUserDto {
    @ApiProperty({example: 1})
    @IsNotEmpty()
    user_id: number;
}
