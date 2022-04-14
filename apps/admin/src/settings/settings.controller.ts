/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-08 10:14:34
 * @LastEditTime: 2022-04-14 18:29:43
 * @Description: Modify here please
 */
import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { SetFileStorageDto } from './dto/set-file-storage.dto';
import { SettingsService } from './settings.service';

@ApiTags('站点设置')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('fileStorage')
  @ApiOperation({ summary: '获取文件存储设置项' })
  async findFileStorageSetting() {
    const res: any = await this.settingsService.findFileStorageSetting();
    const data = res.length ? res[0].fileStorage : [];
    return apiSucceed(data);
  }

  @Put('fileStorage')
  @ApiOperation({ summary: '设置文件存储设置项' })
  async setFileStorage(@Body() setFileStorageDto: SetFileStorageDto) {
    const res = await this.settingsService.setFileStorage(setFileStorageDto);
    return apiSucceed(res);
  }
}
