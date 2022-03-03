/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 16:09:06
 * @LastEditTime: 2022-03-03 18:19:38
 * @Description: Modify here please
 */
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { UserDocument } from 'libs/db/modules/user.model';
import { CurrentUser } from '../auth/current-user.decorator';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
import { UserService } from './user.service';

@ApiTags('用户相关')
@Controller('user')
@UseGuards(AuthGuard('web-jwt'))
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('collections')
  @ApiOperation({ summary: '获取用户收藏商品列表' })
  async getUserCollectionList(@CurrentUser() user: UserDocument) {
    const res = await this.userService.findUserCollectionList(user?._id);
    return apiSucceed(res);
  }

  @Get('viewsHistory')
  @ApiOperation({ summary: '获取用户浏览商品记录列表' })
  async getUserViewsHistories(@CurrentUser() user: UserDocument) {
    const res = await this.userService.findUserViewsHistoryAll(user?._id);
    return apiSucceed(res);
  }

  @Get('address')
  @ApiOperation({ summary: '获取用户地址列表' })
  async getUserAddress(@CurrentUser() user: UserDocument) {
    const res = await this.userService.findUserAddressAll(user?._id);
    apiSucceed(res);
  }

  @Get('address/:id')
  @ApiOperation({ summary: '获取用户地址详情' })
  @ApiParam({ name: 'id', description: '地址id' })
  async getUserAddressInfo(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.userService.findUserAddressOne(id);
    return apiSucceed(res);
  }

  @Patch('address/:id')
  @ApiOperation({ summary: '更新用户地址信息' })
  @ApiParam({ name: 'id', description: '地址id' })
  async updateUserAddressInfo(
    @Param('id', new ParseIdPipe()) id: string,
    updateUserAddressDto: UpdateUserAddressDto,
  ) {
    const res = await this.userService.updateUserAddress(
      id,
      updateUserAddressDto,
    );
    return apiSucceed(res);
  }

  @Delete()
  @ApiOperation({ summary: '删除用户地址信息' })
  @ApiParam({ name: 'id', description: '地址id' })
  async removeUserAddressInfo(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.userService.removeUserAddress(id);
    return apiSucceed(res);
  }
}
