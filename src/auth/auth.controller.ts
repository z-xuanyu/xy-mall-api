/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:19:09
 * @LastEditTime: 2021-12-27 15:29:00
 * @Description: 登录控制器
 */
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminLoginDto } from './dto/adminl.login.dto';
import { WebLoginDto } from './dto/web.login.dto';
import { apiSucceed, ApiSucceedResult } from '@app/common/result.model';
import { LoginResultDto } from './dto/login.result.dto';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@app/db/modules/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { WebRegisterDto } from './dto/web.register.dto';

@ApiTags('登录')
@Controller('auth')
export class AuthController {
  // 注入
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
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
    const user = await this.userModel.create(registerDto);
    return apiSucceed(user);
  }
}
