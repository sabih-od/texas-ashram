import {ApiProperty} from "@nestjs/swagger";

export class CreatePageMediaDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    media: string;

    created_at: string;
}
