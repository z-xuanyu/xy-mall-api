/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:13:40
 * @LastEditTime: 2022-05-25 12:13:56
 * @Description: Modify here please
 */
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { apiSucceed, ApiSucceedResult } from 'libs/common/ResponseResultModel';
import { AuthService } from './auth.service';
import { LoginResultDto } from './dto/login.result.dto';
import { WebLoginDto } from './dto/web.login.dto';
import { WebRegisterDto } from './dto/web.register.dto';

@ApiTags('登录')
@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService, private authServe: AuthService) {}

  @ApiOperation({ summary: 'web站--会员登录' })
  @Post('login')
  @UseGuards(AuthGuard('web-local'))
  async webLogin(
    @Body() dto: WebLoginDto,
    @Req() req: any,
  ): Promise<ApiSucceedResult<LoginResultDto>> {
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

  @Post('register')
  @ApiOperation({ summary: 'web站--会员注册' })
  async register(@Body() registerDto: WebRegisterDto) {
    const res = await this.authServe.register(registerDto);
    apiSucceed(res);
  }
}
