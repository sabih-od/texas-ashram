import {IsNotEmpty} from "class-validator";

export class CreateReportDto {
    @IsNotEmpty()
    user_id: number;

    @IsNotEmpty()
    module: string;

    @IsNotEmpty()
    module_id: number;

    created_at: string;
}
