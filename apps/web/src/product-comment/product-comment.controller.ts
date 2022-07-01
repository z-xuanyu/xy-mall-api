/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-21 17:46:06
 * @LastEditTime: 2022-07-01 12:05:55
 * @Description: Modify here please
 */
import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
  UseInterceptors,
  UploadedFiles,
  Req,
} from '@nestjs/common';
import { ProductCommentService } from './product-comment.service';
import { CreateProductCommentDto } from './dto/create-product-comment.dto';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../auth/current-user.decorator';
import { UserDocument } from 'libs/db/modules/user.model';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';
import { FilesInterceptor } from '@nestjs/platform-express';
import { WebService } from '../web.service';

@ApiTags('商品评价')
@Controller('productComment')
export class ProductCommentController {
  constructor(
    private readonly productCommentService: ProductCommentService,
    private readonly webService: WebService,
  ) {
    console.log('ProductCommentController');
  }

  @Post()
  @UseGuards(AuthGuard('web-jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '创建商品评论' })
  @UseInterceptors(FilesInterceptor('images'))
  @ApiConsumes('multipart/form-data')
  async create(
    @Body() createProductCommentDto: CreateProductCommentDto,
    @CurrentUser() user: UserDocument,
    @UploadedFiles() images: Array<any>,
    @Req() req: any,
  ) {
    createProductCommentDto.userId = user?._id;
    const domain = `${req.protocol}://${req.headers.host}`;
    const imgs = await this.webService.multipleUpload(images, domain);
    createProductCommentDto.images = imgs;
    await this.productCommentService.create(createProductCommentDto);
    return apiSucceed();
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
