/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-07 11:20:51
 * @LastEditTime: 2022-01-07 11:57:51
 * @Description: Modify here please
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { MediaLibraryService } from './media-library.service';
import { CreateMediaLibraryDto } from './dto/create-media-library.dto';
import { UpdateMediaLibraryDto } from './dto/update-media-library.dto';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { apiSucceed } from '@app/common/ResponseResultModel';
import { QueryMediaLibraryDto } from './dto/query-media-library.dto';
import { ParseIdPipe } from '@app/common/pipe/parse-id.pipe';

@ApiTags('管理站--媒体库文件管理')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('media-library')
export class MediaLibraryController {
  constructor(private readonly mediaLibraryService: MediaLibraryService) {}

  @Post()
  @ApiOperation({ summary: '添加媒体文件' })
  async create(@Body() createMediaLibraryDto: CreateMediaLibraryDto) {
    const res = await this.mediaLibraryService.create(createMediaLibraryDto);
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '媒体文件列表' })
  async findAll(@Query() parameters: QueryMediaLibraryDto) {
    const res = await this.mediaLibraryService.findAll(parameters);
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '媒体文件信息' })
  @ApiParam({ name: 'id', description: '媒体文件id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.mediaLibraryService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '媒体文件信息' })
  @ApiParam({ name: 'id', description: '媒体文件id' })
  async update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateMediaLibraryDto: UpdateMediaLibraryDto,
  ) {
    const res = await this.mediaLibraryService.update(
      id,
      updateMediaLibraryDto,
    );
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '媒体文件信息' })
  @ApiParam({ name: 'id', description: '媒体文件id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.mediaLibraryService.remove(id);
    return apiSucceed(res);
  }
}
