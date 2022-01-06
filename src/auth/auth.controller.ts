/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:19:09
 * @LastEditTime: 2022-01-06 10:48:02
 * @Description: 登录控制器
 */
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminLoginDto } from './dto/adminl.login.dto';
import { WebLoginDto } from './dto/web.login.dto';
import { apiSucceed, ApiSucceedResult } from '@app/common/ResponseResultModel';
import { LoginResultDto } from './dto/login.result.dto';
import { User } from '@app/db/modules/user.model';
import { WebRegisterDto } from './dto/web.register.dto';
import { UserService } from 'src/user/user.service';
import { AdminService } from 'src/admin/admin.service';
import { CurrentUser } from './current-user.decorator';
import { AdminDocument } from '@app/db/modules/admin.model';

@ApiTags('登录')
@Controller('auth')
export class AuthController {
  // 注入
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private adminService: AdminService,
  ) {}

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
  @ApiOperation({ summary: 'web站--会员登录' })
  @Post('web/login')
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

  // web端注册
  @Post('web/register')
  @ApiOperation({ summary: 'web站--注册' })
  async portalRegister(
    @Body() registerDto: WebRegisterDto,
  ): Promise<ApiSucceedResult<User>> {
    const user = await this.userService.create(registerDto);
    return apiSucceed(user);
  }
}
