/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-25 16:57:52
 * @LastEditTime: 2022-03-03 11:00:51
 * @Description: Modify here please
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UserCollectionService } from './user-collection.service';
import { CreateUserCollectionDto } from './dto/create-user-collection.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { QueryUserCollectionDto } from './dto/query-user-collection.dto';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';

@ApiTags('管理站--会员收藏')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('user-collection')
export class UserCollectionController {
  constructor(private readonly userCollectionService: UserCollectionService) {}

  @Post()
  @ApiOperation({ summary: '添加会员收藏' })
  async create(@Body() createUserCollectionDto: CreateUserCollectionDto) {
    const res = await this.userCollectionService.create(
      createUserCollectionDto,
    );
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '获取会员收藏列表' })
  async findAll(@Query() parameters: QueryUserCollectionDto) {
    const res = await this.userCollectionService.findAll(parameters);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: '收藏id' })
  @ApiOperation({ summary: '删除收藏信息' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.userCollectionService.remove(id);
    return apiSucceed(res);
  }
}
