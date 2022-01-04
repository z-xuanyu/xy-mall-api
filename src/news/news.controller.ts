/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 11:32:42
 * @LastEditTime: 2022-01-04 14:30:45
 * @Description: 新闻文章控制器
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
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from '@app/common/ResponseResultModel';
import { News } from '@app/db/modules/news.model';
import { QueryNewsDto } from './dto/query-news.dto';
import { ParseIdPipe } from '@app/common/pipe/parse-id.pipe';

@ApiTags('管理站--新闻文章')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiOperation({ summary: '新增文章' })
  async create(
    @Body() createNewsDto: CreateNewsDto,
  ): Promise<ApiSucceedResult<News>> {
    const res = await this.newsService.create(createNewsDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '文章列表' })
  async findAll(
    @Query()
    parameters: QueryNewsDto,
  ): Promise<ApiSucceedResult<PaginationResult<Array<News>>>> {
    const res = await this.newsService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '文章详情' })
  @ApiParam({ name: 'id', description: '文章id' })
  async findOne(
    @Param('id', new ParseIdPipe()) id: string,
  ): Promise<ApiSucceedResult<News>> {
    const res = await this.newsService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新文章' })
  @ApiParam({ name: 'id', description: '文章id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ): Promise<ApiSucceedResult<News>> {
    const res = await this.newsService.update(id, updateNewsDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  @ApiParam({ name: 'id', description: '文章id' })
  async remove(
    @Param('id', new ParseIdPipe()) id: string,
  ): Promise<ApiSucceedResult<News>> {
    const res = await this.newsService.remove(id);
    return apiSucceed(res);
  }
}
