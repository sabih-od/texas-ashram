import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateGroupRequestDto {
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    user_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    group_id: number;

    created_at: string;
}
