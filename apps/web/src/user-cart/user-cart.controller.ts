/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-15 11:02:01
 * @LastEditTime: 2022-03-15 11:25:15
 * @Description: Modify here please
 */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserCartService } from './user-cart.service';
import { CreateUserCartDto } from './dto/create-user-cart.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { UserDocument } from 'libs/db/modules/user.model';
import { CurrentUser } from '../auth/current-user.decorator';
import { apiSucceed } from 'libs/common/ResponseResultModel';

@Controller('user-cart')
export class UserCartController {
  constructor(private readonly userCartService: UserCartService) {}

  @Post()
  @ApiOperation({ summary: '加入购物车' })
  async create(
    @Body() createUserCartDto: CreateUserCartDto,
    @CurrentUser() user: UserDocument,
  ) {
    createUserCartDto.userId = user?._id;
    const res = await this.userCartService.create(createUserCartDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '获取用户购物车列表' })
  async findAll(@CurrentUser() user: UserDocument) {
    return await this.userCartService.findAll(user?._id);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除购物车记录' })
  @ApiParam({ name: 'id', description: '记录id' })
  async remove(@Param('id') id: string) {
    return await this.userCartService.remove(id);
  }
}
