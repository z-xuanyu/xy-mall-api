/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-13 15:00:59
 * @LastEditTime: 2022-03-25 15:52:38
 * @Description: 标签管理控制器
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
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { QueryTagDto } from './dto/query-tag.dto';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';

@ApiTags('标签管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  @ApiOperation({ summary: '添加标签' })
  async create(@Body() createTagDto: CreateTagDto) {
    const res = await this.tagService.create(createTagDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '标签列表' })
  async findAll(@Query() parameters: QueryTagDto) {
    const res = await this.tagService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '标签详情' })
  @ApiParam({ name: 'id', description: '标签id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.tagService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新标签' })
  @ApiParam({ name: 'id', description: '标签id' })
  async update(@Param('id', new ParseIdPipe()) id: string, @Body() updateTagDto: UpdateTagDto) {
    const res = await this.tagService.update(id, updateTagDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除标签' })
  @ApiParam({ name: 'id', description: '标签id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.tagService.remove(id);
    return apiSucceed(res);
  }
}
