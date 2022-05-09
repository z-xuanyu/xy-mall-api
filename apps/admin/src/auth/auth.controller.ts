/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:19:09
 * @LastEditTime: 2022-05-09 16:08:22
 * @Description: 登录控制器
 */
import {
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminLoginDto } from './dto/adminl.login.dto';
import { LoginResultDto } from './dto/login.result.dto';
import { apiSucceed, ApiSucceedResult } from 'libs/common/ResponseResultModel';
import { AdminDocument } from 'libs/db/modules/admin.model';
import { CurrentUser } from './current-user.decorator';
import { Cache } from 'cache-manager';
import * as svgCaptcha from 'svg-captcha';

@ApiTags('登录')
@Controller('auth')
export class AuthController {
  // 注入
  constructor(
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @ApiOperation({ summary: '登录' })
  @Post('admin/login')
  @UseGuards(AuthGuard('admin-local'))
  async adminLogin(
    @Body() dto: AdminLoginDto,
    @Req() req: any,
  ): Promise<ApiSucceedResult<LoginResultDto>> {
    // 校验验证码
    const captcha = await this.cacheManager.get(
      `captcha_${dto.captcha.toLocaleUpperCase()}`,
    );
    if (!captcha) {
      return {
        code: 101,
        message: '验证码错误!',
      };
    }
    // 生成token
    const accessToken = this.jwtService.sign({
      email: req.user.email,
      id: String(req.user._id),
    });
    const data: LoginResultDto = {
      email: req.user.email,
      name: req.user.name,
      accessToken,
    };
    return apiSucceed(data);
  }

  @Get('admin/info')
  @ApiOperation({ summary: '当前登录用户信息' })
  @UseGuards(AuthGuard('admin-jwt'))
  @ApiBearerAuth()
  async currentLoginInfo(@CurrentUser() user: AdminDocument): Promise<any> {
    const data = {
      name: user.name,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      roles: ['super'],
      email: user.email,
    };

    return apiSucceed(data);
  }

  @Get('admin/getCaptcha')
  @ApiOperation({ summary: '获取验证码' })
  async getCaptcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#cc9966',
    });
    await this.cacheManager.set(
      `captcha_${captcha.text.toLocaleUpperCase()}`,
      captcha.text,
      {
        ttl: 300, // 5分钟失效
      },
    );
    return captcha.data;
  }
}
