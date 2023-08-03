import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateNotificationDto } from './create-notification.dto';

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {
    icon: string;

    @ApiProperty({ example: 1 })
    user_id: number;

    @ApiProperty({ example: 'New event' })
    title: string;

    @ApiProperty({ example: 'New event' })
    content: string;

    topic: string;

    topic_id: number;

    created_at: string;
}
