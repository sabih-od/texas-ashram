import {Body, Controller, Delete, Get, Param, Post, Query, Request, UseGuards} from '@nestjs/common';
import {ReportsService} from './reports.service';
import {CreateReportDto} from './dto/create-report.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {ReportMessageDto} from "./dto/report-message.fto";
import {MessagesService} from "../messages/messages.service";
import {AuthService} from "../auth/auth.service";
import {ReportUserDto} from "./dto/report-user.fto";
import {UsersService} from "../users/users.service";
import {UpdateMessageDto} from "../messages/dto/update-message.dto";
import {UpdateUserDto} from "../users/dto/update-user.dto";

@ApiTags('Reports')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('reports')
export class ReportsController {
  constructor(
      private readonly reportsService: ReportsService,
      private readonly messageService: MessagesService,
      private readonly authService: AuthService,
      private readonly userService: UsersService,
  ) {}

    // @Post()
    // async create(@Body() createReportDto: CreateReportDto) {
    //     createReportDto.created_at = Date.now().toString();
    //     let res = await this.reportsService.create(createReportDto);
    //
    //     return {
    //         success: !res.error,
    //         message: res.error ? res.error : 'Report created successfully!',
    //         data: res.error ? [] : res,
    //     }
    // }

    @Post('report-message')
    async reportMessage(@Body() reportMessageDto: ReportMessageDto, @Request() req) {
        let user = await this.authService.getUserByEmail(req.user.email);

        let message = await this.messageService.findOne(reportMessageDto.message_id);
        if (message.error) {
            return {
                success: false,
                message: message.error,
                data: [],
            }
        }

        let createReportDto = new CreateReportDto();
        createReportDto.user_id = user.id;
        createReportDto.module = 'message';
        createReportDto.module_id = reportMessageDto.message_id;
        createReportDto.created_at = Date.now().toString();

        let res = await this.reportsService.create(createReportDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Message reported successfully!',
            data: res.error ? [] : res,
        }
    }

    @Post('report-user')
    async reportUser(@Body() reportUserDto: ReportUserDto, @Request() req) {
        let user = await this.authService.getUserByEmail(req.user.email);

        let user_to_report = await this.userService.findOne(reportUserDto.user_id);
        if (user_to_report.error) {
            return {
                success: false,
                message: user_to_report.error,
                data: [],
            }
        }

        let createReportDto = new CreateReportDto();
        createReportDto.user_id = user.id;
        createReportDto.module = 'user';
        createReportDto.module_id = reportUserDto.user_id;
        createReportDto.created_at = Date.now().toString();

        let res = await this.reportsService.create(createReportDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'User reported successfully!',
            data: res.error ? [] : res,
        }
    }

    @Get('accept-report/:id')
    async acceptReport(@Param('id') id: string) {
        let report = await this.reportsService.findOne(+id);
        if (report.error) {
            return {
                success: false,
                message: report.error,
                data: [],
            }
        }

        let res;
        if (report.module == 'message') {
            res = await this.blockModule(report, this.messageService, UpdateMessageDto);
        } else if (report.module == 'user') {
            res = await this.blockModule(report, this.userService, UpdateUserDto);
        }

        return {
            success: !res.error,
            message: res.error ? res.error : report.module + ' blocked successfully!',
            data: res.error ? [] : res,
        }
    }

    @Get()
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
        let res = await this.reportsService.findAll(page, limit);

        res.data = await Promise.all(
            res.data.map(async (report) => {
                let module = {};
                if (report.module == 'message') {
                    let message = await this.messageService.findOne(report.module_id);
                    if (!message.error) {
                        delete message.user_id;

                        return {...report, reportedMessage: message};
                    }
                } else if (report.module == 'user') {
                    let user = await this.userService.findOne(report.module_id);
                    if (!user.error) {
                        delete user.password;
                        delete user.otp;
                        delete user.role_id;
                        delete user.created_at;

                        return {...report, reportedUser: user};
                    }
                }
            }),
        );

        return {
            success: true,
            message: '',
            ...res
        }
    }

    // @Get(':id')
    // async findOne(@Param('id') id: string) {
    //     let res = await this.reportsService.findOne(+id);
    //
    //     return {
    //         success: !res.error,
    //         message: res.error ? res.error : '',
    //         data: res.error ? [] : res,
    //     }
    // }

    // @Patch(':id')
    // async update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    //     let group = await this.reportsService.findOne(+id);
    //     if (group.error) {
    //         return {
    //             success: false,
    //             message: group.error,
    //             data: [],
    //         }
    //     }
    //
    //     let res = await this.reportsService.update(+id, updateReportDto);
    //
    //     return {
    //         success: !res.error,
    //         message: res.error ? res.error : 'Report updated successfully!',
    //         data: res.error ? [] : res,
    //     }
    // }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        let report = await this.reportsService.findOne(+id);
        if (report.error) {
            return {
                success: false,
                message: report.error,
                data: [],
            }
        }

        let res = await this.reportsService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Report deleted successfully!',
            data: res.error ? [] : res,
        }
    }

    async blockModule(report, service, UpdateDto) {
        let module = await service.findOne(report.module_id);
        if (module.error) {
            await this.reportsService.remove(+report.id);
            return {
                success: false,
                message: module.error,
                data: [],
            }
        }
        if (module.blocked_at != "" && module.blocked_at != null) {
            await this.reportsService.remove(+report.id);
            return {
                success: false,
                message: report.module + ' already blocked',
                data: [],
            }
        }

        let updateDto = new UpdateDto();
        updateDto.blocked_at = Date.now().toString();

        await this.reportsService.remove(+report.id);
        return await service.update(module.id, updateDto);
    }
}
