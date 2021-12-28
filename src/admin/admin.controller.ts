/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 15:39:34
 * @LastEditTime: 2021-12-28 10:00:44
 * @Description: 管理员控制器
 */
import { ParseIdPipe } from '@app/common/pipe/parse-id.pipe';
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from '@app/common/ResponseResultModel';
import { Admin } from '@app/db/modules/admin.model';
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
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { QueryAdminDto } from './dto/query-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@ApiTags('管理站--管理员')
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
}
