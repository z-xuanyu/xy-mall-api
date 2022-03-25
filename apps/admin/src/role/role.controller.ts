/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 11:46:36
 * @LastEditTime: 2022-03-25 12:01:48
 * @Description: 角色控制器
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
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';

@ApiTags('角色管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiOperation({ summary: '添加角色' })
  async create(@Body() createRoleDto: CreateRoleDto) {
    const res = await this.roleService.create(createRoleDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '角色列表' })
  async findAll() {
    const res = await this.roleService.findAll();
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: '角色id' })
  @ApiOperation({ summary: '角色详细' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.roleService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新角色' })
  @ApiParam({ name: 'id', description: '角色id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    const res = await this.roleService.update(id, updateRoleDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除角色' })
  @ApiParam({ name: 'id', description: '角色id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.roleService.remove(id);
    return apiSucceed(res);
  }
}
