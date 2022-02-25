/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-25 15:58:54
 * @LastEditTime: 2022-02-25 16:28:11
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
import { UserAddressService } from './user-address.service';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { apiSucceed } from '@app/common/ResponseResultModel';
import { QueryUserAddressDto } from './dto/query-user-address.dto';
import { ParseIdPipe } from '@app/common/pipe/parse-id.pipe';

@ApiTags('管理站--会员地址')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('user-address')
export class UserAddressController {
  constructor(private readonly userAddressService: UserAddressService) {}

  @Post()
  @ApiOperation({ summary: '添加会员地址' })
  async create(@Body() createUserAddressDto: CreateUserAddressDto) {
    const res = await this.userAddressService.create(createUserAddressDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '获取会员地址列表' })
  async findAll(@Query() queryUserAddressDto: QueryUserAddressDto) {
    const res = this.userAddressService.findAll(queryUserAddressDto);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取会员地址' })
  @ApiParam({ name: 'id', description: '地址id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.userAddressService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新会员地址' })
  @ApiParam({ name: 'id', description: '地址id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateUserAddressDto: UpdateUserAddressDto,
  ) {
    const res = await this.userAddressService.update(id, updateUserAddressDto);
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除会员地址' })
  @ApiParam({ name: 'id', description: '地址id' })
  async remove(@Param('id') id: string) {
    const res = await this.userAddressService.remove(id);
    return apiSucceed(res);
  }
}
