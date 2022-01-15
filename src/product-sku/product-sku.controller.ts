/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-15 11:36:15
 * @LastEditTime: 2022-01-15 12:06:05
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
import { ProductSkuService } from './product-sku.service';
import { CreateProductSkuDto } from './dto/create-product-sku.dto';
import { UpdateProductSkuDto } from './dto/update-product-sku.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { QueryProductSkuDto } from './dto/query-product-sku.dto';
import { apiSucceed } from '@app/common/ResponseResultModel';
import { ParseIdPipe } from '@app/common/pipe/parse-id.pipe';

@ApiTags('管理站--产品规格模板')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('product-sku')
export class ProductSkuController {
  constructor(private readonly productSkuService: ProductSkuService) {}

  @Post()
  @ApiOperation({ summary: '添加产品规格模板' })
  async create(@Body() createProductSkuDto: CreateProductSkuDto) {
    const res = await this.productSkuService.create(createProductSkuDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '产品规格模板列表' })
  async findAll(@Query() parameters: QueryProductSkuDto) {
    const res = await this.productSkuService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: '模板id' })
  @ApiOperation({ summary: '产品规格模板详情' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.productSkuService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: '模板id' })
  @ApiOperation({ summary: '更新产品规格模板' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateProductSkuDto: UpdateProductSkuDto,
  ) {
    const res = await this.productSkuService.update(id, updateProductSkuDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: '模板id' })
  @ApiOperation({ summary: '删除产品规格模板' })
  async remove(@Param('id') id: string) {
    const res = await this.productSkuService.remove(id);
    return apiSucceed(res);
  }
}
