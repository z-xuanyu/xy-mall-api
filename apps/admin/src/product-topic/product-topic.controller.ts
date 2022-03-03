/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-28 16:45:17
 * @LastEditTime: 2022-03-03 10:54:50
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
import { ProductTopicService } from './product-topic.service';
import { CreateProductTopicDto } from './dto/create-product-topic.dto';
import { UpdateProductTopicDto } from './dto/update-product-topic.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { QueryProductTopicDto } from './dto/query-product-topic.dto';
import {
  apiSucceed,
  ApiSucceedResult,
  PaginationResult,
} from 'libs/common/ResponseResultModel';
import { ProductTopic } from 'libs/db/modules/product-topic.model';

@ApiTags('管理站--产品专题')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('product-topic')
export class ProductTopicController {
  constructor(private readonly productTopicService: ProductTopicService) {}

  @Post()
  @ApiOperation({ summary: '新增产品专题' })
  async create(
    @Body() createProductTopicDto: CreateProductTopicDto,
  ): Promise<ApiSucceedResult<ProductTopic>> {
    const res = await this.productTopicService.create(createProductTopicDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '产品专题列表' })
  async findAll(
    @Query()
    parameters: QueryProductTopicDto,
  ): Promise<ApiSucceedResult<PaginationResult<Array<ProductTopic>>>> {
    const res = await this.productTopicService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '产品专题详情' })
  @ApiParam({ name: 'id', description: '产品专题id' })
  async findOne(@Param('id') id: string) {
    return this.productTopicService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新产品专题信息' })
  @ApiParam({ name: 'id', description: '产品专题id' })
  async update(
    @Param('id') id: string,
    @Body() updateProductTopicDto: UpdateProductTopicDto,
  ) {
    return this.productTopicService.update(id, updateProductTopicDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除产品专题' })
  @ApiParam({ name: 'id', description: '产品专题id' })
  async remove(@Param('id') id: string) {
    return this.productTopicService.remove(id);
  }
}
