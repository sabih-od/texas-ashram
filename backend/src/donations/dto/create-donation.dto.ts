import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateDonationDto {
    user_id: number;

    name: string;

    @IsNotEmpty()
    @ApiProperty({ example: '123.00' })
    amount: string;
}
