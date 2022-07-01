/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-07-01 17:18:31
 * @LastEditTime: 2022-07-01 17:50:31
 * @Description: 用户标签模块
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLabelService } from './user-label.service';
import { CreateUserLabelDto } from './dto/create-user-label.dto';
import { UpdateUserLabelDto } from './dto/update-user-label.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';

@ApiTags('用户标签')
@Controller('userLabel')
export class UserLabelController {
  constructor(private readonly userLabelService: UserLabelService) {
    console.log('UserLabelController');
  }

  @Post()
  @ApiOperation({ summary: '添加用户标签' })
  async create(@Body() createUserLabelDto: CreateUserLabelDto) {
    const res = await this.userLabelService.create(createUserLabelDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '用户标签列表' })
  async findAll() {
    const res = await this.userLabelService.findAll();
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: '用户标签id' })
  @ApiOperation({ summary: '标签详情' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.userLabelService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: '用户标签id' })
  @ApiOperation({ summary: '更新用户标签' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateUserLabelDto: UpdateUserLabelDto,
  ) {
    const res = await this.userLabelService.update(id, updateUserLabelDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: '用户标签id' })
  @ApiOperation({ summary: '删除用户标签' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.userLabelService.remove(id);
    return apiSucceed(res);
  }
}
