/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:54:20
 * @LastEditTime: 2022-03-18 11:15:25
 * @Description: Modify here please
 */
import {
  Controller,
  Get,
  Post,
  Req,
  Res,
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
import { ApiConfig, ApiConfigKit, WeChat } from 'tnwx';
import { AppService } from './app.service';
import { HandMsgAdapter } from './handMsgAdapter';
import { Request, Response } from 'express';
import * as getRawBody from 'raw-body';

class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

@ApiTags('首页')
@Controller()
export class AppController {
  // 微信公众号消息处理
  private msgAdapter = new HandMsgAdapter();
  constructor(private readonly appService: AppService) {
    // 初始化公众号配置
    const devApiConfig = new ApiConfig(
      'wxb1bcb0988520b14a',
      '56e9a2ea5ffed507b3cbb8f9167ce516',
      'xuanyutest',
      false,
      'Zw9VFJ2DtojjkuXlSheo9Qv3bGPLK9GrpcKNC3WTuM7',
    );
    ApiConfigKit.putApiConfig(devApiConfig);
    ApiConfigKit.devMode = true;
  }

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

  @Get('weixin')
  getMsg(@Req() request: Request) {
    const signature = request.query.signature.toString(), //微信加密签名
      timestamp = request.query.timestamp.toString(), //时间戳
      nonce = request.query.nonce.toString(), //随机数
      echostr = request.query.echostr.toString(); //随机字符串
    return WeChat.checkSignature(signature, timestamp, nonce, echostr);
  }

  @Post('weixin')
  async PostMsg(@Res() res: Response) {
    // const buffer: Buffer = await getRawBody(req);
    // const msgXml = buffer.toString('utf-8');
    // const data = await WeChat.handleMsg(this.msgAdapter, msgXml);
    res.send(`<xml>
    <ToUserName><![CDATA[o-bHRs8SmQTWQqBi2n1vatcrTAw8]]></ToUserName>
    <FromUserName><![CDATA[gh_cfd61f5e4587]]></FromUserName>
    <CreateTime>${new Date().getTime()}</CreateTime>
    <MsgType><![CDATA[text]]></MsgType>
    <Content><![CDATA[你好]]></Content>
  </xml>`);
  }
}
