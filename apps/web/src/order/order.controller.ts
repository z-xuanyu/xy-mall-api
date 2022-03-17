/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-17 10:12:28
 * @LastEditTime: 2022-03-17 10:27:14
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

@ApiTags('用户订单')
@UseGuards(AuthGuard('web-jwt'))
@ApiBearerAuth()
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: '创建订单' })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: '获取用户订单列表' })
  async findAll(@CurrentUser() user: UserDocument) {
    return this.orderService.findAll(user?._id);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取订单详细信息' })
  @ApiParam({ name: 'id', description: '订单id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    return await this.orderService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除订单' })
  @ApiParam({ name: 'id', description: '订单id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    return await this.orderService.remove(id);
  }
}
