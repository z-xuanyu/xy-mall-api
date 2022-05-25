/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 16:17:19
 * @LastEditTime: 2022-03-25 15:55:24
 * @Description: 分类模块控制器
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
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { apiSucceed, ApiSucceedResult, PaginationResult } from 'libs/common/ResponseResultModel';
import { Category } from 'libs/db/modules/category.model';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { QueryCategoryDto } from './dto/query-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('商品分类管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: '新增分类' })
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<ApiSucceedResult<Category>> {
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
  async findOne(@Param('id', new ParseIdPipe()) id: string): Promise<ApiSucceedResult<Category>> {
    const res = await this.categoryService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新分类' })
  @ApiParam({ name: 'id', description: '分类id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<ApiSucceedResult<Category>> {
    const res = await this.categoryService.update(id, updateCategoryDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除分类' })
  @ApiParam({ name: 'id', description: '分类id' })
  async remove(@Param('id', new ParseIdPipe()) id: string): Promise<ApiSucceedResult<Category>> {
    const res = await this.categoryService.remove(id);
    return apiSucceed(res);
  }
}
