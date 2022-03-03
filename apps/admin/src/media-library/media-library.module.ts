/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:42:17
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { MediaLibraryService } from './media-library.service';
import { MediaLibraryController } from './media-library.controller';

@Module({
  controllers: [MediaLibraryController],
  providers: [MediaLibraryService],
})
export class MediaLibraryModule {}
