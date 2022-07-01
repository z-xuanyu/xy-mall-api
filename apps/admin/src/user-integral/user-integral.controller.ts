/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-07-01 10:06:38
 * @LastEditTime: 2022-07-01 17:51:08
 * @Description: 用户积分
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserIntegralService } from './user-integral.service';
import { CreateUserIntegralDto } from './dto/create-user-integral.dto';
import { UpdateUserIntegralDto } from './dto/update-user-integral.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';

@ApiTags('会员积分')
@Controller('userIntegral')
export class UserIntegralController {
  constructor(private readonly userIntegralService: UserIntegralService) {
    console.log('UserIntegralController');
  }

  @Post()
  @ApiOperation({ summary: '增加积分' })
  create(@Body() createUserIntegralDto: CreateUserIntegralDto) {
    return this.userIntegralService.create(createUserIntegralDto);
  }

  @Get()
  @ApiOperation({ summary: '会员积分列表' })
  findAll() {
    return this.userIntegralService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: '积分id' })
  @ApiOperation({ summary: '积分详细' })
  findOne(@Param('id', new ParseIdPipe()) id: string) {
    return this.userIntegralService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: '积分id' })
  @ApiOperation({ summary: '更新积分' })
  update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateUserIntegralDto: UpdateUserIntegralDto,
  ) {
    return this.userIntegralService.update(id, updateUserIntegralDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: '积分id' })
  @ApiOperation({ summary: '删除积分' })
  remove(@Param('id', new ParseIdPipe()) id: string) {
    return this.userIntegralService.remove(id);
  }
}
