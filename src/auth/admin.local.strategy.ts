/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:20:13
 * @LastEditTime: 2021-12-24 17:48:08
 * @Description: Modify here please
 */
import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { BadRequestException } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { Admin } from '@app/db/modules/admin.model';

export class AdminLocalStrategy extends PassportStrategy(
  Strategy,
  'admin-local',
) {
  constructor(
    @InjectModel(Admin) private adminModel: ReturnModelType<typeof Admin>,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  // 校验管理端 用户和密码
  async validate(email: string, password: string): Promise<Admin> {
    console.log(email, password);
    const adminInfo = await this.adminModel
      .findOne({ email })
      .select('+password');
    if (!adminInfo) {
      throw new BadRequestException('用户名不正确');
    }
    if (!compareSync(password, adminInfo.password)) {
      throw new BadRequestException('密码不正确');
    }
    if (!adminInfo.status) {
      throw new BadRequestException('用户已被禁用');
    }
    return adminInfo;
  }
}
