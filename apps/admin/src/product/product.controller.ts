/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 15:01:54
 * @LastEditTime: 2022-04-01 15:20:01
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
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import {
  BatchUpdateHotStatusDto,
  BatchUpdateTimeLimitStatusDto,
  ProductStatusDto,
  UpdateProductDto,
} from './dto/update-product.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { QueryProductDto } from './dto/query-product.dto';
import { Product } from 'libs/db/modules/product.model';
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from 'libs/common/ResponseResultModel';

@ApiTags('商品管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: '新增商品' })
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ApiSucceedResult<Product>> {
    const res = await this.productService.create(createProductDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '商品列表' })
  async findAll(
    @Query()
    parameters: QueryProductDto,
  ): Promise<ApiSucceedResult<PaginationResult<Array<Product>>>> {
    const res = await this.productService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '商品详情' })
  @ApiParam({ name: 'id', description: '商品id' })
  async findOne(@Param('id') id: string): Promise<ApiSucceedResult<Product>> {
    const res = await this.productService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新商品' })
  @ApiParam({ name: 'id', description: '商品id' })
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ApiSucceedResult<Product>> {
    const res = await this.productService.update(id, updateProductDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除商品' })
  @ApiParam({ name: 'id', description: '商品id' })
  async remove(@Param('id') id: string): Promise<ApiSucceedResult<Product>> {
    const res = await this.productService.remove(id);
    return apiSucceed(res);
  }

  @Put('updateStatus/:id')
  @ApiOperation({ summary: '更新商品状态' })
  @ApiParam({ name: 'id', description: '商品id' })
  async updateStatus(
    @Param('id') id: string,
    @Body() paramsDto: ProductStatusDto,
  ) {
    await this.productService.updateStatus(id, paramsDto.status);
    return apiSucceed();
  }

  @Put('updateHotStatus/:id')
  @ApiOperation({ summary: '更新商品热门推荐状态' })
  @ApiParam({ name: 'id', description: '商品id' })
  async updateHotStatus(
    @Param('id') id: string,
    @Body() paramsDto: ProductStatusDto,
  ) {
    await this.productService.updateHotStatus(id, paramsDto.status);
    return apiSucceed();
  }

  @Put('batchUpdateHotStatus')
  @ApiOperation({ summary: '批量更新商品热门推荐状态' })
  async batchUpdateHotStatus(
    @Body() batchUpdateHotStatusDto: BatchUpdateHotStatusDto,
  ) {
    await this.productService.batchUpdateHotStatus(
      batchUpdateHotStatusDto.ids,
      batchUpdateHotStatusDto.status,
    );
    return apiSucceed();
  }

  @Put('updateTimeLimitStatus/:id')
  @ApiOperation({ summary: '更新商品限时精选状态' })
  @ApiParam({ name: 'id', description: '商品id' })
  async updateTimeLimitStatus(
    @Param('id') id: string,
    @Body() paramsDto: ProductStatusDto,
  ) {
    await this.productService.updateTimeLimitStatus(id, paramsDto.status);
    return apiSucceed();
  }

  @Put('batchUpdateTimeLimitStatus')
  @ApiOperation({ summary: '批量更新商品限时精选状态' })
  async batchUpdateTimeLimitStatus(
    @Body() batchUpdateTimeLimitStatusDto: BatchUpdateTimeLimitStatusDto,
  ) {
    await this.productService.batchUpdateTimeLimitStatus(
      batchUpdateTimeLimitStatusDto.ids,
      batchUpdateTimeLimitStatusDto.status,
    );
    return apiSucceed();
  }
}
