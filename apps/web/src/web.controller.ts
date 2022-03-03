/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:56:14
 * @LastEditTime: 2022-03-03 11:12:48
 * @Description: Modify here please
 */
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WebService } from './web.service';

@ApiTags('首页')
@Controller()
export class WebController {
  constructor(private readonly webService: WebService) {}

  @Get()
  getHello(): string {
    return this.webService.getHello();
  }
}
