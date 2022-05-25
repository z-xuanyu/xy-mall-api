/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:19:52
 * @LastEditTime: 2022-05-25 11:34:20
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from 'libs/db/modules/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { WebRegisterDto } from './dto/web.register.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private userModel: ReturnModelType<typeof User>) {}

  //注册会员
  async register(registerDto: WebRegisterDto) {
    return this.userModel.create(registerDto);
  }
}
