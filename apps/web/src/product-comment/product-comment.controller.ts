/*
 * @Author: xuanyu
 * @LastEditors: xuanyu 969718197@qq.com
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:46:06
 * @LastEditTime: 2023-08-02 15:28:31
 * @Description: 商品评价
 */
import { Controller, Get, Post, Body, UseGuards, Param, Query } from '@nestjs/common';
import { ProductCommentService } from './product-comment.service';
import { CreateProductCommentDto } from './dto/create-product-comment.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../auth/current-user.decorator';
import { UserDocument } from 'libs/db/modules/user.model';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';

@ApiTags('商品评价')
@Controller('productComment')
export class ProductCommentController {
  constructor(private readonly productCommentService: ProductCommentService) {
    console.log('ProductCommentController');
  }

  @Post()
  @UseGuards(AuthGuard('web-jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '创建商品评论' })
  async create(
    @Body() createProductCommentDto: CreateProductCommentDto,
    @CurrentUser() user: UserDocument,
  ) {
    createProductCommentDto.userId = user?._id;
    const res = await this.productCommentService.create(createProductCommentDto);
    return apiSucceed(res);
  }

  @Get('user/comments')
  @UseGuards(AuthGuard('web-jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取用户商品评论列表' })
  async findUserComments(@CurrentUser() user: UserDocument) {
    const res = await this.productCommentService.findUserComments(user?._id);
    const reslut = res.map((item) => {
      const obj: any = item.toObject();
      return {
        info: {
          content: obj.content,
          nickName: obj.userId.nickName,
          avatar: obj.userId.avatarUrl,
          time: obj.createdAt,
          replay: obj.replyCount,
          like: obj.likeCount,
          score: obj.rate,
        },
        videos: obj.videos,
        images: obj.images.map((v) => ({ imgUrl: v })),
        follow: {
          contnet: obj.followContent || '',
          day: obj.followDays,
        },
        replyCount: obj.replyCount,
      };
    });
    return apiSucceed(reslut);
  }

  @Get('product/:id')
  @ApiParam({ name: 'id', description: '商品id' })
  @ApiQuery({
    name: 'type',
    description: '筛选类型',
    type: Number,
    required: false,
    enum: [0, 1, 2, 3, 4],
    example: '0: 全部，1: 带图，2: 好评，3: 中评，4: 差评',
  })
  @ApiOperation({ summary: '获取指定商品评论列表' })
  async findProductComments(
    @Param('id', new ParseIdPipe()) id: string,
    @Query('type') type: number,
  ) {
    const { comments, tabs } = await this.productCommentService.findProductComments(id, type);
    const reslut = comments.map((item) => {
      const obj: any = item.toObject();
      return {
        info: {
          content: obj.content,
          nickName: obj.userId.nickName,
          avatar: obj.userId.avatarUrl,
          time: new Date(obj.createdAt).toLocaleDateString(),
          replay: obj.replyCount,
          like: obj.likeCount,
          score: obj.rate,
        },
        videos: obj.videos,
        images: obj.images.map((v) => ({ imgUrl: v })),
        follow: {
          contnet: obj.followContent || null,
          day: obj.followDays,
        },
        replyContent: obj.replyContent || null,
      };
    });
    return apiSucceed({ comments: reslut, tabs });
  }
}
