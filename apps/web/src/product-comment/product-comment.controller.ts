/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:46:06
 * @LastEditTime: 2022-03-21 18:14:33
 * @Description: Modify here please
 */
import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { ProductCommentService } from './product-comment.service';
import { CreateProductCommentDto } from './dto/create-product-comment.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../auth/current-user.decorator';
import { UserDocument } from 'libs/db/modules/user.model';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';

@ApiTags('商品评价')
@Controller('product-comment')
export class ProductCommentController {
  constructor(private readonly productCommentService: ProductCommentService) {}

  @Post()
  @UseGuards(AuthGuard('web-jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '创建商品评论' })
  create(
    @Body() createProductCommentDto: CreateProductCommentDto,
    @CurrentUser() user: UserDocument,
  ) {
    createProductCommentDto.userId = user?._id;
    return this.productCommentService.create(createProductCommentDto);
  }

  @Get('user/comments')
  @UseGuards(AuthGuard('web-jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取用户商品评论列表' })
  async findUserComments(@CurrentUser() user: UserDocument) {
    const res = await this.productCommentService.findUserComments(user?._id);
    return apiSucceed(res);
  }

  @Get('product/:id')
  @ApiParam({ name: 'id', description: '商品id' })
  @ApiOperation({ summary: '获取指定商品评论列表' })
  async findProductComments(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.productCommentService.findProductComments(id);
    return apiSucceed(res);
  }
}
