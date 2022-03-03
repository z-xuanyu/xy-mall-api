/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:20:13
 * @LastEditTime: 2022-03-03 10:28:06
 * @Description: Modify here please
 */
import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { compareSync } from 'bcryptjs';
import { Admin } from 'libs/db/modules/admin.model';
import { ApiFail } from 'libs/common/ResponseResultModel';

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
    const adminInfo = await this.adminModel
      .findOne({ email })
      .select('+password');
    if (!adminInfo) {
      throw new ApiFail(101, '用户名不正确');
    }
    if (!compareSync(password, adminInfo.password)) {
      throw new ApiFail(102, '密码不正确');
    }
    if (!adminInfo.status) {
      throw new ApiFail(103, '用户已被禁用');
    }
    return adminInfo;
  }
}
