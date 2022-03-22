/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:56:14
 * @LastEditTime: 2022-03-22 10:11:46
 * @Description: Modify here please
 */
import {
  Controller,
  Get,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { WebService } from './web.service';
// 多图上传
class multipleFileUploadDto {
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  files: any[];
}

@ApiTags('首页')
@Controller()
export class WebController {
  constructor(private readonly webService: WebService) {}

  @Get()
  getHello(): string {
    return this.webService.getHello();
  }

  @Get('homeData')
  @ApiOperation({ summary: '获取首页相关数据接口' })
  async getHomeData() {
    const res = await this.webService.getHomeData();
    return apiSucceed(res);
  }

  @Post('multiple/upload')
  @ApiOperation({ summary: '多图上传' })
  @ApiBody({
    description: '多图上传',
    type: multipleFileUploadDto,
  })
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  async multipleUpload(
    @UploadedFiles() files: Array<any>,
    @Req() req: any,
  ): Promise<any> {
    const domain = `${req.protocol}://${req.headers.host}`;
    const res = await this.webService.multipleUpload(files, domain);
    return apiSucceed(res);
  }
}
