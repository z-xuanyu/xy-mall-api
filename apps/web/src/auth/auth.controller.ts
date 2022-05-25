/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:13:40
 * @LastEditTime: 2022-05-25 15:19:18
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
import { ApiConfig, MiniProgramApi, ApiConfigKit } from 'tnwx';
import { MiniLoginDto } from './dto/mini-program-login.dto';

@ApiTags('登录')
@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService, private authServe: AuthService) {
    // 初始小程序配置
    const devApiConfig = new ApiConfig('wx38e9ca4801b37264', 'bfd7c86e9c3764a7e87d46da05d898bd');
    ApiConfigKit.putApiConfig(devApiConfig);
  }

  @ApiOperation({ summary: 'web-会员登录' })
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
  @ApiOperation({ summary: 'web-会员注册' })
  async register(@Body() registerDto: WebRegisterDto) {
    const res = await this.authServe.register(registerDto);
    apiSucceed(res);
  }

  @Post('miniProgramLogin')
  @ApiOperation({ summary: '小程序登录' })
  async minProgramLogin(@Body() miniLoginDto: MiniLoginDto) {
    const res = await MiniProgramApi.code2Session(
      ApiConfigKit.getAppId,
      ApiConfigKit.getApiConfig.getAppScrect,
      miniLoginDto.code,
    );
    if (!res.openid) {
      return {
        code: 1001,
        message: '用户code错误',
      };
    }

    const userInfo: any = await this.authServe.miniProgramLogin({
      openid: res.openid,
      sessionKey: res.session_key,
      nickName: miniLoginDto.nickName,
      avatarUrl: miniLoginDto.avatarUrl,
    });

    // 生成token
    const accessToken = this.jwtService.sign({
      openid: res.openid,
      id: String(userInfo?._id),
    });
    return apiSucceed({ accessToken, nickName: userInfo.nickName, avatarUrl: userInfo.avatarUrl });
  }
}
