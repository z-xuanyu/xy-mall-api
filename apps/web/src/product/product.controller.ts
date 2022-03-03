/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 14:42:51
 * @LastEditTime: 2022-03-03 17:50:24
 * @Description: Modify here please
 */
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
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
import { ProductService } from './product.service';

@ApiTags('商品相关')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: '获取全部商品信息' })
  async findAll() {
    const res = await this.productService.findAll();
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取商品信息' })
  @ApiParam({ name: 'id', description: '商品id' })
  async findOne(
    @Param('id', new ParseIdPipe()) id: string,
    @CurrentUser() user: UserDocument,
  ) {
    const res = await this.productService.findOne(id, user?._id);
    return apiSucceed(res);
  }

  @Post('collection/:id')
  @UseGuards(AuthGuard('web-jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '用户收藏改商品' })
  @ApiParam({ name: 'id', description: '商品id' })
  async collection(
    @Param('id', new ParseIdPipe()) id: string,
    @CurrentUser() user: UserDocument,
  ) {
    const res = await this.productService.collection({
      userId: user?._id,
      productId: id,
    });
    return apiSucceed(res);
  }

  @Delete('collection/:id')
  @UseGuards(AuthGuard('web-jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '删除收藏改商品' })
  @ApiParam({ name: 'id', description: '商品id' })
  async delCollection(
    @Param('id', new ParseIdPipe()) id: string,
    @CurrentUser() user: UserDocument,
  ) {
    const res = await this.productService.removeCollection({
      userId: user?._id,
      productId: id,
    });

    return apiSucceed(res);
  }
}
