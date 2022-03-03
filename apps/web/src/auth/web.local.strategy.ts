/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:20:13
 * @LastEditTime: 2022-03-03 11:15:34
 * @Description: web站会员登录策略
 */
import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { compareSync } from 'bcryptjs';
import { User } from 'libs/db/modules/user.model';
import { ApiFail } from 'libs/common/ResponseResultModel';

export class WebLocalStrategy extends PassportStrategy(Strategy, 'web-local') {
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  // 校验web站 用户和密码
  async validate(email: string, password: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).select('+password');
    if (!user) {
      throw new ApiFail(101, '用户名不正确');
    }
    if (!compareSync(password, user.password)) {
      throw new ApiFail(102, '密码不正确');
    }
    if (!user.status) {
      throw new ApiFail(103, '用户已被禁用');
    }
    return user;
  }
}
