/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-25 12:16:37
 * @LastEditTime: 2022-04-02 15:15:32
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
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { QueryMenuDto } from './dto/query-menu.dto';
import { upperCamelCase } from 'libs/common/utils/transform';
import { CurrentUser } from '../auth/current-user.decorator';
import { AdminDocument } from 'libs/db/modules/admin.model';

@ApiTags('菜单管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({ summary: '添加菜单' })
  async create(@Body() createMenuDto: CreateMenuDto) {
    // 处理组件名问题
    if (createMenuDto.component === 'LAYOUT') {
      const paths = createMenuDto.path.split('/');
      createMenuDto.name = upperCamelCase(paths.join('-'));
    } else {
      const paths = createMenuDto.component?.split('/');
      paths.shift();
      paths.pop();
      const pathName = paths.join('-');
      createMenuDto.name = upperCamelCase(pathName);
    }

    const res = await this.menuService.create(createMenuDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '菜单列表' })
  async findAll(@Query() parameters: QueryMenuDto) {
    const res = await this.menuService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get('permissions')
  @ApiOperation({ summary: '管理员关联的角色的权限菜单列表' })
  async getPermissionsMenus(@CurrentUser() user: AdminDocument) {
    const res = await this.menuService.findPermissionsMenus(user?._id);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '菜单列表' })
  @ApiParam({ name: 'id', description: '菜单id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.menuService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新菜单' })
  @ApiParam({ name: 'id', description: '菜单id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateMenuDto: UpdateMenuDto,
  ) {
    // 处理组件名问题
    if (updateMenuDto.component === 'LAYOUT') {
      const paths = updateMenuDto.path.split('/');
      updateMenuDto.name = upperCamelCase(paths.join('-'));
    } else {
      const paths = updateMenuDto.component?.split('/');
      paths.shift();
      paths.pop();
      const pathName = paths.join('-');
      updateMenuDto.name = upperCamelCase(pathName);
    }
    const res = await this.menuService.update(id, updateMenuDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除菜单' })
  @ApiParam({ name: 'id', description: '菜单id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.menuService.remove(id);
    return apiSucceed(res);
  }
}
