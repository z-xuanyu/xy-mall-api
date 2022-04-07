/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 12:07:52
 * @LastEditTime: 2022-04-07 16:42:22
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
import { QueryUserDto } from './dto/query-user.dto';
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from 'libs/common/ResponseResultModel';
import { User } from 'libs/db/modules/user.model';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { QueryUserViewHistoryDto } from './dto/query-user-view-history.dto';
import { QueryUserCollectionDto } from './dto/query-user-collection.dto';

@ApiTags('会员管理')
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

  @Get(':id/viewHistories')
  @ApiOperation({ summary: '获取会员商品浏览记录列表' })
  @ApiParam({ name: 'id', description: '会员id' })
  async getUserViewHistories(
    @Param('id', new ParseIdPipe()) id: string,
    @Query() queryUserViewHistoryDto: QueryUserViewHistoryDto,
  ) {
    const res = await this.userService.getUserViewHistories(
      id,
      queryUserViewHistoryDto,
    );

    return apiSucceed(res);
  }

  @Get(':id/collections')
  @ApiOperation({ summary: '获取会员商品收藏列表' })
  @ApiParam({ name: 'id', description: '会员id' })
  async getUserCollections(
    @Param('id', new ParseIdPipe()) id: string,
    @Query() queryUserCollectionDto: QueryUserCollectionDto,
  ) {
    const res = await this.userService.getUserCollections(
      id,
      queryUserCollectionDto,
    );
    return apiSucceed(res);
  }
}
