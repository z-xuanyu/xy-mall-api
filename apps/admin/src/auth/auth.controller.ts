/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:19:09
 * @LastEditTime: 2022-03-03 10:31:15
 * @Description: 登录控制器
 */
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminLoginDto } from './dto/adminl.login.dto';
import { LoginResultDto } from './dto/login.result.dto';
import { apiSucceed, ApiSucceedResult } from 'libs/common/ResponseResultModel';
import { AdminDocument } from 'libs/db/modules/admin.model';
import { CurrentUser } from './current-user.decorator';

@ApiTags('登录')
@Controller('auth')
export class AuthController {
  // 注入
  constructor(private jwtService: JwtService) {}

  @ApiOperation({ summary: '管理站--登录' })
  @Post('admin/login')
  @UseGuards(AuthGuard('admin-local'))
  async adminLogin(
    @Body() dto: AdminLoginDto,
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

  @Get('admin/info')
  @ApiOperation({ summary: '管理站--当前登录用户信息' })
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
}
