/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-17 10:12:28
 * @LastEditTime: 2022-06-30 17:32:19
 * @Description: 订单模块
 */
import { Controller, Get, Post, Body, Param, Delete, UseGuards, Query, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { CurrentUser } from '../auth/current-user.decorator';
import { UserDocument } from 'libs/db/modules/user.model';
import { AuthGuard } from '@nestjs/passport';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { QueryUserOrderDto } from './dto/query-user-oder.dto';
import { UpdateOrderAddressDto } from './dto/update-order-address.dto';

@ApiTags('用户订单')
@UseGuards(AuthGuard('web-jwt'))
@ApiBearerAuth()
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {
    console.log('OrderController');
  }

  @Post()
  @ApiOperation({ summary: '创建订单' })
  async create(@Body() createOrderDto: CreateOrderDto, @CurrentUser() user: UserDocument) {
    createOrderDto.userId = user?._id;
    const res = await this.orderService.create(createOrderDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '获取用户订单列表' })
  async findAll(@CurrentUser() user: UserDocument, @Query() queryUserOrderDto: QueryUserOrderDto) {
    const res = await this.orderService.findAll(user?._id, queryUserOrderDto);
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
  @ApiOperation({ summary: '取消订单' })
  @ApiParam({ name: 'id', description: '订单id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.orderService.remove(id);
    return apiSucceed(res);
  }

  @Put(':id/take')
  @ApiOperation({ summary: '确认收货' })
  @ApiParam({ name: 'id', description: '订单id' })
  async confirmTake(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.orderService.confirmTake(id);
    return apiSucceed(res);
  }

  @Put('updateAddress')
  @ApiOperation({ summary: '更新订单收货地址' })
  async updateOrderAddress(@Body() updateOrderAddressDto: UpdateOrderAddressDto) {
    const res = await this.orderService.updateOrderAddress(
      updateOrderAddressDto.orderId,
      updateOrderAddressDto.addressId,
    );
    return apiSucceed(res);
  }
}
