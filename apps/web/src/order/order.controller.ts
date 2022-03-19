/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-17 10:12:28
 * @LastEditTime: 2022-03-19 18:01:40
 * @Description: Modify here please
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { CurrentUser } from '../auth/current-user.decorator';
import { UserDocument } from 'libs/db/modules/user.model';
import { AuthGuard } from '@nestjs/passport';
import { apiSucceed } from 'libs/common/ResponseResultModel';

@ApiTags('用户订单')
@UseGuards(AuthGuard('web-jwt'))
@ApiBearerAuth()
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: '创建订单' })
  async create(
    @Body() createOrderDto: CreateOrderDto,
    @CurrentUser() user: UserDocument,
  ) {
    createOrderDto.userId = user?._id;
    const res = await this.orderService.create(createOrderDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '获取用户订单列表' })
  async findAll(@CurrentUser() user: UserDocument) {
    const res = await this.orderService.findAll(user?._id);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取订单详细信息' })
  @ApiParam({ name: 'id', description: '订单id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.orderService.findOne(id);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除订单' })
  @ApiParam({ name: 'id', description: '订单id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.orderService.remove(id);
    return apiSucceed(res);
  }
}
