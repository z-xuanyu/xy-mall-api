/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-22 09:56:57
 * @LastEditTime: 2022-04-26 10:31:22
 * @Description: 客服管理接口控制器
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
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { CustomerServiceService } from './customer-service.service';
import { CreateCustomerServiceDto } from './dto/create-customer-service.dto';
import { QueryCustomerServiceDto } from './dto/query-customer-service.dto';
import { UpdateCustomerServiceDto } from './dto/update-customer-service.dto';

@ApiTags('客服管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('customerService')
export class CustomerServiceController {
  constructor(private readonly customerServiceService: CustomerServiceService) {}

  @Post()
  @ApiOperation({ summary: '新增客服' })
  async create(@Body() createCustomerServiceDto: CreateCustomerServiceDto) {
    const res = await this.customerServiceService.create(createCustomerServiceDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '客服列表' })
  async findAll(@Query() queryCustomerServiceDto: QueryCustomerServiceDto) {
    const res = await this.customerServiceService.findAll(queryCustomerServiceDto);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '客服信息' })
  @ApiParam({ name: 'id', description: '客服id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.customerServiceService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新客服' })
  @ApiParam({ name: 'id', description: '客服id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateCustomerServiceDto: UpdateCustomerServiceDto,
  ) {
    const res = await this.customerServiceService.update(id, updateCustomerServiceDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除客服' })
  @ApiParam({ name: 'id', description: '客服id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.customerServiceService.remove(id);
    return apiSucceed(res);
  }

  @Get(':id/getConversationRecord')
  @ApiOperation({ summary: '获取客服会话列表' })
  @ApiParam({ name: 'id', description: '客服id' })
  async getChatConversationRecord(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.customerServiceService.getChatConversationRecord(id);
    return apiSucceed(res);
  }

  @Get(':id/getChatMessageList')
  @ApiOperation({ summary: '获取客服聊天记录列表' })
  @ApiParam({ name: 'id', description: '客服id' })
  @ApiQuery({ name: 'targetId', description: '目标用户id' })
  async getChatMessageList(
    @Param('id', new ParseIdPipe()) id: string,
    @Query('targetId') targetId: string,
  ) {
    const res = await this.customerServiceService.getChatMessageList(id, targetId);
    return apiSucceed(res);
  }
}
