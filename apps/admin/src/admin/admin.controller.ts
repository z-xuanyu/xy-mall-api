/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:39:34
 * @LastEditTime: 2022-03-25 15:50:01
 * @Description: 管理员控制器
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
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from 'libs/common/ResponseResultModel';
import { Admin } from 'libs/db/modules/admin.model';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { QueryAdminDto } from './dto/query-admin.dto';
import { UpdateAdminDto, UpdateStatusDto } from './dto/update-admin.dto';

@ApiTags('管理员')
@Controller('admin')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @ApiOperation({ summary: '新增管理员' })
  async create(
    @Body() createAdminDto: CreateAdminDto,
  ): Promise<ApiSucceedResult<Admin>> {
    const res = await this.adminService.create(createAdminDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '管理员列表' })
  async findAll(
    @Query() parameter: QueryAdminDto,
  ): Promise<ApiSucceedResult<PaginationResult<Array<Admin>>>> {
    const res = await this.adminService.findAll(parameter);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '管理员信息' })
  @ApiParam({ name: 'id', description: '管理员id' })
  async findOne(
    @Param('id', new ParseIdPipe()) id: string,
  ): Promise<ApiSucceedResult<Admin>> {
    const res = await this.adminService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新管理员' })
  @ApiParam({ name: 'id', description: '管理员id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ): Promise<ApiSucceedResult<Admin>> {
    const res = await this.adminService.update(id, updateAdminDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除管理员' })
  @ApiParam({ name: 'id', description: '管理员id' })
  async remove(
    @Param('id', new ParseIdPipe()) id: string,
  ): Promise<ApiSucceedResult<Admin>> {
    const res = await this.adminService.remove(id);
    return apiSucceed(res);
  }

  @Put('updateStatus/:id')
  @ApiOperation({ summary: '更新管理员状态' })
  @ApiParam({ name: 'id', description: '管理员id' })
  async updateStatus(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateStatusDto: UpdateStatusDto,
  ): Promise<ApiSucceedResult<Admin>> {
    const res = await this.adminService.updateStatus(id, updateStatusDto);
    return apiSucceed(res);
  }
}
