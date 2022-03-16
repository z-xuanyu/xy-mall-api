/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-16 17:35:40
 * @LastEditTime: 2022-03-16 17:53:09
 * @Description: 订单模块控制器
 */
import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('订单模块')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @ApiOperation({ summary: '获取订单列表' })
  async findAll() {
    const res = await this.orderService.findAll();
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取订单详信息' })
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
