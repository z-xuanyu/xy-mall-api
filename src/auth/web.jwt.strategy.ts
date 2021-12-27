/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-24 17:31:17
 * @LastEditTime: 2021-12-27 14:25:25
 * @Description: web站 jwt
 */
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@app/db/modules/user.model';

export class WebJwtStrategy extends PassportStrategy(Strategy, 'web-jwt') {
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'xuanyu',
      ignoreExpiration: false,
    } as StrategyOptions);
  }
  async validate(payload: any): Promise<User> {
    return await this.userModel.findById(payload.id);
  }
}
