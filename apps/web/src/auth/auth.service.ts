/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:19:52
 * @LastEditTime: 2022-05-25 15:02:47
 * @Description: 登录授权
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from 'libs/db/modules/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { MiniProgramRegisterDto } from './dto/mini-program-login.dto';
import { WebRegisterDto } from './dto/web.register.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private userModel: ReturnModelType<typeof User>) {}

  //注册会员
  async register(registerDto: WebRegisterDto) {
    return await this.userModel.create(registerDto);
  }

  // 小程序登录
  async miniProgramLogin(miniProgramRegisterDto: MiniProgramRegisterDto): Promise<User> {
    //查询用户是否存在
    const info = await this.userModel.findOne({ openid: miniProgramRegisterDto.openid });
    // 如果不存在，创建用户
    if (!info) {
      return await this.userModel.create(miniProgramRegisterDto);
    }
    return info;
  }
}
