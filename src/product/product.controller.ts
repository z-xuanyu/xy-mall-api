/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 15:01:54
 * @LastEditTime: 2021-12-28 15:27:01
 * @Description: 产品控制器
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
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from '@app/common/ResponseResultModel';
import { Product } from '@app/db/modules/product.model';
import { QueryProductDto } from './dto/query-product.dto';

@ApiTags('管理站--产品')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: '新增产品' })
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ApiSucceedResult<Product>> {
    const res = await this.productService.create(createProductDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '产品列表' })
  async findAll(
    @Query()
    parameters: QueryProductDto,
  ): Promise<ApiSucceedResult<PaginationResult<Array<Product>>>> {
    const res = await this.productService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '产品详情' })
  async findOne(@Param('id') id: string): Promise<ApiSucceedResult<Product>> {
    const res = await this.productService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新产品' })
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ApiSucceedResult<Product>> {
    const res = await this.productService.update(id, updateProductDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除产品' })
  async remove(@Param('id') id: string): Promise<ApiSucceedResult<Product>> {
    const res = await this.productService.remove(id);
    return apiSucceed(res);
  }
}
