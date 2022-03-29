/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:22:58
 * @LastEditTime: 2022-03-29 17:58:48
 * @Description: Modify here please
 */
import {
  Controller,
  Get,
  Param,
  Delete,
  UseGuards,
  Query,
  Patch,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { QueryProductCommentDto } from './dto/query-product-comment.dto';
import { ReplyProductCommentDto } from './dto/reply-product-comment.dto';
import { ProductCommentService } from './product-comment.service';

@ApiTags('商品评价')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('product-comment')
export class ProductCommentController {
  constructor(private readonly productCommentService: ProductCommentService) {}

  @Get()
  @ApiOperation({ summary: '获取商品评价列表' })
  async findAll(@Query() parameters: QueryProductCommentDto) {
    const res = await this.productCommentService.findAll(parameters);
    return apiSucceed(res);
  }

  @Patch(':id/reply')
  @ApiParam({ name: 'id', description: '评论记录id' })
  @ApiOperation({ summary: '回复商品评价' })
  async replyComment(
    @Param('id') id: string,
    @Body() replyProductCommentDto: ReplyProductCommentDto,
  ) {
    const res = await this.productCommentService.replyComment(
      id,
      replyProductCommentDto.content,
    );
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: '评论记录id' })
  @ApiOperation({ summary: '删除商品评价' })
  async remove(@Param('id') id: string) {
    const res = await this.productCommentService.remove(id);
    return apiSucceed(res);
  }
}
