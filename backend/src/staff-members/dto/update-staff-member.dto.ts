import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateStaffMemberDto } from './create-staff-member.dto';

export class UpdateStaffMemberDto extends PartialType(CreateStaffMemberDto) {
    @ApiProperty({ example: 'Name' })
    name: string;

    @ApiProperty({ example: 'Staff description here.' })
    description: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    image: string;
}
