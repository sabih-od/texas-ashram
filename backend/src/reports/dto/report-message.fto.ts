import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class ReportMessageDto {
    @ApiProperty({example: 1})
    @IsNotEmpty()
    message_id: number;
}
