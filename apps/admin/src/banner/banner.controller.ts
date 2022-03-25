/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-04 10:46:45
 * @LastEditTime: 2022-03-25 15:56:07
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
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from 'libs/common/ResponseResultModel';
import { Banner } from 'libs/db/modules/banner.model';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { QueryBannerDto } from './dto/query-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@ApiTags('Banner管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  @ApiOperation({ summary: '新增Banner' })
  async create(
    @Body() createBannerDto: CreateBannerDto,
  ): Promise<ApiSucceedResult<Banner>> {
    const res = await this.bannerService.create(createBannerDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: 'Banner列表' })
  async findAll(
    @Query() parameters: QueryBannerDto,
  ): Promise<ApiSucceedResult<PaginationResult<Array<Banner>>>> {
    const res = await this.bannerService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Banner详情' })
  @ApiParam({ name: 'id', description: 'BannerId' })
  async findOne(
    @Param('id', new ParseIdPipe()) id: string,
  ): Promise<ApiSucceedResult<Banner>> {
    const res = await this.bannerService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新Banner信息' })
  @ApiParam({ name: 'id', description: 'BannerId' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateBannerDto: UpdateBannerDto,
  ): Promise<ApiSucceedResult<Banner>> {
    const res = await this.bannerService.update(id, updateBannerDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除Banner' })
  @ApiParam({ name: 'id', description: 'BannerId' })
  async remove(
    @Param('id', new ParseIdPipe()) id: string,
  ): Promise<ApiSucceedResult<Banner>> {
    const res = await this.bannerService.remove(id);
    return apiSucceed(res);
  }
}
