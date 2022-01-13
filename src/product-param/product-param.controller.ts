/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-12 15:47:53
 * @LastEditTime: 2022-01-13 10:26:23
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
import { ProductParamService } from './product-param.service';
import { CreateProductParamDto } from './dto/create-product-param.dto';
import { UpdateProductParamDto } from './dto/update-product-param.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { apiSucceed } from '@app/common/ResponseResultModel';
import { QueryProductParamDto } from './dto/query-product-param.dto';
import { ParseIdPipe } from '@app/common/pipe/parse-id.pipe';

@ApiTags('管理站--产品参数模板')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('product-param')
export class ProductParamController {
  constructor(private readonly productParamService: ProductParamService) {}

  @Post()
  @ApiOperation({ summary: '新增参数模板' })
  async create(@Body() createProductParamDto: CreateProductParamDto) {
    const res = await this.productParamService.create(createProductParamDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '参数模板列表' })
  async findAll(@Query() parameters: QueryProductParamDto) {
    const res = this.productParamService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '参数模板信息' })
  @ApiParam({ name: 'id', description: '参数模板id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = this.productParamService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新参数模板' })
  @ApiParam({ name: 'id', description: '参数模板id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateProductParamDto: UpdateProductParamDto,
  ) {
    const res = this.productParamService.update(id, updateProductParamDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除参数模板' })
  @ApiParam({ name: 'id', description: '参数模板id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = this.productParamService.remove(id);
    return apiSucceed(res);
  }
}
