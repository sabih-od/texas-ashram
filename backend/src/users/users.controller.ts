import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {AuthGuard} from "../auth/auth.guard";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    let res = await this.usersService.create(createUserDto);

    return {
        success: !res.error,
        message: res.error ? res.error : 'User created successfully!',
        data: res.error ? [] : res,
    }
  }

  @Get()
  async findAll() {
    let res = await this.usersService.findAll();

      return {
          success: true,
          message: '',
          data: res,
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let res = await this.usersService.findOne(+id);

    return {
        success: !res.error,
        message: res.error ? res.error : '',
        data: res.error ? [] : res,
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    let res = await this.usersService.update(+id, updateUserDto);

      return {
          success: !res.error,
          message: res.error ? res.error : 'User updated successfully!',
          data: res.error ? [] : res,
      }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    let res = await this.usersService.remove(+id);

      return {
          success: !res.error,
          message: res.error ? res.error : 'User deleted successfully!',
          data: res.error ? [] : res,
      }
  }
}
