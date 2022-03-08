/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-08 10:14:34
 * @LastEditTime: 2022-03-08 11:14:23
 * @Description: Modify here please
 */
import { Injectable, Logger } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { SiteSettings } from 'libs/db/modules/site-setting.model';
import { InjectModel } from 'nestjs-typegoose';
import { SetFileStorageDto } from './dto/set-file-storage.dto';

@Injectable()
export class SettingsService {
  // 注入
  constructor(
    @InjectModel(SiteSettings)
    private settingModel: ReturnModelType<typeof SiteSettings>,
  ) {}

  // 获取文件存储配置项
  async findFileStorageSetting() {
    return await this.settingModel.find();
  }

  // 设置文件存储项
  async setFileStorage(setFileStorageDto: SetFileStorageDto) {
    try {
      const res = await this.settingModel.find();
      if (res.length) {
        return await this.settingModel.updateOne({
          fileStorage: setFileStorageDto,
        });
      } else {
        return await this.settingModel.create({
          fileStorage: setFileStorageDto,
        });
      }
    } catch (err) {
      Logger.log(err, '文件存储设置失败');
    }
  }
}
