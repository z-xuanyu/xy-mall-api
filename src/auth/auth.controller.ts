/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:19:09
 * @LastEditTime: 2021-12-24 18:11:52
 * @Description: Modify here please
 */
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminLoginDto } from './dto/adminl.login.dto';

@ApiTags('登录')
@Controller('auth')
export class AuthController {
  // 注入
  constructor(private jwtService: JwtService) {}

  @ApiOperation({ summary: '管理登录' })
  @Post('admin/login')
  @UseGuards(AuthGuard('admin-local'))
  async login(@Body() dto: AdminLoginDto, @Req() req: any): Promise<any> {
    return {
      code: 1,
      result: {
        token: this.jwtService.sign({
          email: req.user.email,
          id: String(req.user._id),
        }),
        data: {
          email: req.user.email,
          name: req.user.name,
        },
      },
      message: '登录成功',
    };
  }
}
