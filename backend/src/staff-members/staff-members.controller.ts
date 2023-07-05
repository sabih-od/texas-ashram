import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UseGuards,
    UploadedFile,
    ParseFilePipe, MaxFileSizeValidator, UseInterceptors, Query
} from '@nestjs/common';
import { StaffMembersService } from './staff-members.service';
import { CreateStaffMemberDto } from './dto/create-staff-member.dto';
import { UpdateStaffMemberDto } from './dto/update-staff-member.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {deleteFileFromUploads, getRandomFileName, uploadFile} from "../helpers/helper";

@ApiTags('Staff Members')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('staff-members')
export class StaffMembersController {
  constructor(private readonly staffMembersService: StaffMembersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() createStaffMemberDto: CreateStaffMemberDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ]
      })
  ) image: Express.Multer.File) {
      //file upload work
      if (image && image.originalname && image.buffer) {
          let file_name = getRandomFileName(image);

          let dir_path = '/uploads/staff-members/';
          let file_path = '.' + dir_path + file_name;
          await uploadFile('.' + dir_path, file_path, image);

          let app_url = process.env.APP_URL + ':' + process.env.PORT;
          createStaffMemberDto.image = app_url + dir_path + file_name;
      }

      createStaffMemberDto.created_at = Date.now().toString();
      let res = await this.staffMembersService.create(createStaffMemberDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Staff Member created successfully!',
          data: res.error ? [] : res,
      }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
      let res = await this.staffMembersService.findAll(page, limit);

      return {
          success: true,
          message: '',
          ...res
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      let res = await this.staffMembersService.findOne(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : '',
          data: res.error ? [] : res,
      }
  }

  @Post(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(@Param('id') id: string, @Body() updateStaffMemberDto: UpdateStaffMemberDto, @UploadedFile(
      new ParseFilePipe({
          validators: [
              new MaxFileSizeValidator({maxSize: 100000000})
          ],
          fileIsRequired: false
      })
  ) image?: Express.Multer.File) {
      let staff_member = await this.staffMembersService.findOne(+id);
      if (staff_member.error) {
          return {
              success: false,
              message: staff_member.error,
              data: [],
          }
      }

      let app_url = process.env.APP_URL + ':' + process.env.PORT;

      //file upload work
      if (image && image.originalname && image.buffer) {
          //delete file
          await deleteFileFromUploads(app_url, staff_member.image);

          let dir_path = '/uploads/staff-members/';
          let file_name = getRandomFileName(image);
          let file_path = '.' + dir_path + file_name;

          await uploadFile('.' + dir_path, file_path, image);

          updateStaffMemberDto.image = app_url + dir_path + file_name;
      }

      if (!Object.keys(updateStaffMemberDto).length) {
          return {
              success: true,
              message: 'Staff Member updated successfully.',
              data: [],
          };
      } else {
          let res = await this.staffMembersService.update(+id, updateStaffMemberDto);

          return {
              success: !res.error,
              message: res.error ? res.error : 'Staff Member updated successfully!',
              data: res.error ? [] : res,
          }
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      let staff_member = await this.staffMembersService.findOne(+id);
      if (staff_member.error) {
          return {
              success: false,
              message: staff_member.error,
              data: [],
          }
      }

      //delete uploaded file
      let app_url = process.env.APP_URL + ':' + process.env.PORT;
      await deleteFileFromUploads(app_url, staff_member.image);

      let res = await this.staffMembersService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'Staff Member deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}
