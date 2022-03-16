/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:54:20
 * @LastEditTime: 2022-03-16 14:14:16
 * @Description: Modify here please
 */
import {
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { AppService } from './app.service';

class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

@ApiTags('首页')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 管理端文件上传
  @Post('upload')
  @UseGuards(AuthGuard('admin-jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '管理端--文件上传' })
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '文件上传',
    type: FileUploadDto,
  })
  async upload(@UploadedFile('file') file: any, @Req() req): Promise<any> {
    const domain = `${req.protocol}://${req.headers.host}`;
    const res = await this.appService.upload(file, domain);
    return apiSucceed(res?.url);
  }
}
