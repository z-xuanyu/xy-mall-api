/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:54:20
 * @LastEditTime: 2022-06-27 11:55:42
 * @Description: Modify here please
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ApiConfig, ApiConfigKit, WeChat } from 'tnwx';
import { AppService } from './app.service';
import { HandMsgAdapter } from './handMsgAdapter';
import { Request, Response } from 'express';
import * as getRawBody from 'raw-body';
import { FileUploadDto, RemoveFileDto } from './app.dto';

@ApiTags('首页')
@Controller()
export class AppController {
  // 微信公众号消息处理
  private msgAdapter = new HandMsgAdapter();
  constructor(private readonly appService: AppService) {
    // 初始化公众号配置
    const devApiConfig = new ApiConfig(
      'wxb1bcb0988520b14a',
      '980af11444c025acf3aabf81f8f20371',
      'xuanyutest',
      false,
      'Zw9VFJ2DtojjkuXlSheo9Qv3bGPLK9GrpcKNC3WTuM7',
    );
    ApiConfigKit.putApiConfig(devApiConfig);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 管理端文件上传
  @Post('upload')
  @UseGuards(AuthGuard('admin-jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: '文件上传' })
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '文件上传',
    type: FileUploadDto,
  })
  async upload(@UploadedFile('file') file: any, @Req() req): Promise<any> {
    const domain = `${req.protocol}://${req.headers.host}`;
    const res = await this.appService.upload(file, domain);
    return apiSucceed(res);
  }

  @Delete('romoveFile')
  @ApiOperation({ summary: '文件删除' })
  async romoveFile(@Body() file: RemoveFileDto) {
    const res = await this.appService.romoveFile(file.fileName, file.storageType);
    return apiSucceed(res);
  }

  @Get('weixin')
  @ApiOperation({ summary: '微信公众号接口' })
  getMsg(@Req() request: Request) {
    const signature = request.query.signature.toString(), //微信加密签名
      timestamp = request.query.timestamp.toString(), //时间戳
      nonce = request.query.nonce.toString(), //随机数
      echostr = request.query.echostr.toString(); //随机字符串
    console.log(signature, 777);
    return WeChat.checkSignature(signature, timestamp, nonce, echostr);
  }

  @Post('weixin')
  @ApiOperation({ summary: '微信公众号接受' })
  async PostMsg(@Res({ passthrough: true }) res: Response, @Req() request: Request) {
    const buffer: Buffer = await getRawBody(request);
    const msgXml = buffer.toString('utf-8');
    const data = await WeChat.handleMsg(this.msgAdapter, msgXml);
    res.status(HttpStatus.OK).send(data);
  }

  @Get('weixin/auth')
  @ApiOperation({ summary: '微信公众号登录授权回调' })
  async weixinAuth(@Req() request: Request) {
    console.log(request);
    console.log('回调成功');
  }
}
