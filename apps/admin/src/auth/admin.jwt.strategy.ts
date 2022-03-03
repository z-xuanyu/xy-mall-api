/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:31:17
 * @LastEditTime: 2022-03-03 10:29:10
 * @Description: 管理站 管理员jwt
 */
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Admin } from 'libs/db/modules/admin.model';
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';
import { adminJwtConfig } from 'libs/common/config/jwt.config';

export class AdminJwtStrategy extends PassportStrategy(Strategy, 'admin-jwt') {
  constructor(
    @InjectModel(Admin) private adminModel: ReturnModelType<typeof Admin>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: adminJwtConfig.secret,
      ignoreExpiration: false,
    } as StrategyOptions);
  }
  async validate(payload: any): Promise<Admin> {
    return await this.adminModel.findById(payload.id);
  }
}
