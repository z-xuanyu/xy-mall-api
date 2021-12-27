/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 16:17:19
 * @LastEditTime: 2021-12-27 17:55:55
 * @Description: 分类模块控制器
 */
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from '@app/common/ResponseResultModel';
import { Category } from '@app/db/modules/category.model';
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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { QueryCategoryDto } from './dto/query-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('管理站--分类管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: '新增分类' })
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<ApiSucceedResult<Category>> {
    const res = await this.categoryService.create(createCategoryDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '分类列表' })
  async findAll(
    @Query() parameters: QueryCategoryDto,
  ): Promise<ApiSucceedResult<PaginationResult<Array<Category>>>> {
    const res = await this.categoryService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '分类信息' })
  @ApiParam({ name: 'id', description: '分类id' })
  async findOne(@Param('id') id: string): Promise<ApiSucceedResult<Category>> {
    const res = await this.categoryService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新分类' })
  @ApiParam({ name: 'id', description: '分类id' })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<ApiSucceedResult<Category>> {
    const res = await this.categoryService.update(id, updateCategoryDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除分类' })
  @ApiParam({ name: 'id', description: '分类id' })
  async remove(@Param('id') id: string): Promise<ApiSucceedResult<Category>> {
    const res = await this.categoryService.remove(id);
    return apiSucceed(res);
  }
}
