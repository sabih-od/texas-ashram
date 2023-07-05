import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateStaffMemberDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'Name' })
    name: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'Staff description here.' })
    description: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    image: string;

    created_at: string;
}
