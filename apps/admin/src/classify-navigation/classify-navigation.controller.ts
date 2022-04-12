/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-16 17:17:53
 * @LastEditTime: 2022-04-12 15:24:04
 * @Description: Modify here please
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
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ClassifyNavigationService } from './classify-navigation.service';
import { ChangeClassifyNavigationStatusDto } from './dto/change-classify-navigation-status.dto';
import { CreateClassifyNavigationDto } from './dto/create-classify-navigation.dto';
import { QueryClassifyNavigationDto } from './dto/query-classify-navigation.dto';
import { UpdateClassifyNavigationDto } from './dto/update-classify-navigation.dto';

@ApiTags('分类导航管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('classifyNavigation')
export class ClassifyNavigationController {
  constructor(
    private readonly classifyNavigationService: ClassifyNavigationService,
  ) {}

  @Post()
  @ApiOperation({ summary: '新增分类导航' })
  async create(
    @Body() createClassifyNavigationDto: CreateClassifyNavigationDto,
  ) {
    const res = await this.classifyNavigationService.create(
      createClassifyNavigationDto,
    );
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '分类导航列表' })
  async findAll(@Query() parameters: QueryClassifyNavigationDto) {
    const res = await this.classifyNavigationService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '分类导航信息' })
  @ApiParam({ name: 'id', description: '分类导航id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.classifyNavigationService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新导航信息' })
  @ApiParam({ name: 'id', description: '分类导航id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateClassifyNavigationDto: UpdateClassifyNavigationDto,
  ) {
    const res = await this.classifyNavigationService.update(
      id,
      updateClassifyNavigationDto,
    );
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除导航信息' })
  @ApiParam({ name: 'id', description: '分类导航id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.classifyNavigationService.remove(id);
    return apiSucceed(res);
  }

  @Put(':id/changeStatus')
  @ApiOperation({ summary: '改变状态' })
  @ApiParam({ name: 'id', description: '分类导航id' })
  async changeStatus(
    @Param('id', new ParseIdPipe()) id: string,
    @Body()
    changeClassifyNavigationStatusDto: ChangeClassifyNavigationStatusDto,
  ) {
    const res = await this.classifyNavigationService.changeStatus(
      id,
      changeClassifyNavigationStatusDto.status,
    );

    return apiSucceed(res);
  }
}
