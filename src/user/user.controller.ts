/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:07:52
 * @LastEditTime: 2021-12-28 10:00:47
 * @Description: 会员控制器
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ParseIdPipe } from '@app/common/pipe/parse-id.pipe';
import { User } from '@app/db/modules/user.model';
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from '@app/common/ResponseResultModel';
import { QueryUserDto } from './dto/query-user.dto';

@ApiTags('管理站--会员')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: '添加会员' })
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ApiSucceedResult<User>> {
    const res = await this.userService.create(createUserDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '会员列表' })
  async findAll(
    @Query() parameters: QueryUserDto,
  ): Promise<ApiSucceedResult<PaginationResult<Array<User>>>> {
    const res = await this.userService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '会员信息' })
  @ApiParam({ name: 'id', description: '会员id' })
  async findOne(
    @Param('id', new ParseIdPipe()) id: string,
  ): Promise<ApiSucceedResult<User>> {
    const res = await this.userService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新会员' })
  @ApiParam({ name: 'id', description: '会员id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<ApiSucceedResult<User>> {
    const res = await this.userService.update(id, updateUserDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除会员' })
  @ApiParam({ name: 'id', description: '会员id' })
  async remove(
    @Param('id', new ParseIdPipe()) id: string,
  ): Promise<ApiSucceedResult<User>> {
    const res = await this.userService.remove(id);
    return apiSucceed(res);
  }
}
