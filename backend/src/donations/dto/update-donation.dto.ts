import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateDonationDto } from './create-donation.dto';
import {IsNotEmpty} from "class-validator";

export class UpdateDonationDto extends PartialType(CreateDonationDto) {
    user_id: number;

    name: string;

    @IsNotEmpty()
    @ApiProperty({ example: '123.00' })
    amount: string;
}
