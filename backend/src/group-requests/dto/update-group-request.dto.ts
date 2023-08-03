import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateGroupRequestDto } from './create-group-request.dto';

export class UpdateGroupRequestDto extends PartialType(CreateGroupRequestDto) {
    @ApiProperty({ example: 1 })
    user_id: number;

    @ApiProperty({ example: 1 })
    group_id: number;

    created_at: string;
}
