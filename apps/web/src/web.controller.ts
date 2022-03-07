/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:56:14
 * @LastEditTime: 2022-03-07 15:58:32
 * @Description: Modify here please
 */
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { WebService } from './web.service';

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
}
