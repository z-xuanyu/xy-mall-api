/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-02 17:02:45
 * @LastEditTime: 2022-04-02 17:17:26
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
import { ProductUnitService } from './product-unit.service';
import { CreateProductUnitDto } from './dto/create-product-unit.dto';
import { UpdateProductUnitDto } from './dto/update-product-unit.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { QueryProductUnitDto } from './dto/query-product-unit.dto';

@ApiTags('商品单位')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('product-unit')
export class ProductUnitController {
  constructor(private readonly productUnitService: ProductUnitService) {}

  @Post()
  @ApiOperation({ summary: '新增商品单位' })
  async create(@Body() createProductUnitDto: CreateProductUnitDto) {
    const res = await this.productUnitService.create(createProductUnitDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '商品单位列表' })
  async findAll(@Query() queryProductUnitDto: QueryProductUnitDto) {
    const res = await this.productUnitService.findAll(queryProductUnitDto);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '商品单位详情' })
  @ApiParam({ name: 'id', description: '单位id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.productUnitService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: '单位id' })
  @ApiOperation({ summary: '更新商品单位' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateProductUnitDto: UpdateProductUnitDto,
  ) {
    const res = await this.productUnitService.update(id, updateProductUnitDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除商品单位' })
  @ApiParam({ name: 'id', description: '单位id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.productUnitService.remove(id);
    return apiSucceed(res);
  }
}
