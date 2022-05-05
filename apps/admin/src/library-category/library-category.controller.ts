/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-07 10:52:56
 * @LastEditTime: 2022-05-05 11:16:21
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
} from '@nestjs/common';
import { LibraryCategoryService } from './library-category.service';
import { CreateLibraryCategoryDto } from './dto/create-library-category.dto';
import { UpdateLibraryCategoryDto } from './dto/update-library-category.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { ParseIdPipe } from 'libs/common/pipe/parse-id.pipe';

@ApiTags('媒体库分类')
@UseGuards(AuthGuard('admin-jwt'))
@ApiBearerAuth()
@Controller('libraryCategory')
export class LibraryCategoryController {
  constructor(
    private readonly libraryCategoryService: LibraryCategoryService,
  ) {}

  @Post()
  @ApiOperation({ summary: '新增文件分类' })
  async create(@Body() createLibraryCategoryDto: CreateLibraryCategoryDto) {
    const res = await this.libraryCategoryService.create(
      createLibraryCategoryDto,
    );
    return apiSucceed(res);
  }

  @Get()
  @ApiOperation({ summary: '文件分类列表' })
  async findAll() {
    const res = await this.libraryCategoryService.findAll();
    return apiSucceed(res);
  }

  @Get(':id')
  @ApiOperation({ summary: '文件分类信息' })
  @ApiParam({ name: 'id', description: '文件分类id' })
  async findOne(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.libraryCategoryService.findOne(id);
    return apiSucceed(res);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新文件分类' })
  @ApiParam({ name: 'id', description: '文件分类id' })
  update(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() updateLibraryCategoryDto: UpdateLibraryCategoryDto,
  ) {
    const res = this.libraryCategoryService.update(
      id,
      updateLibraryCategoryDto,
    );
    return apiSucceed(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文件分类' })
  @ApiParam({ name: 'id', description: '文件分类id' })
  async remove(@Param('id', new ParseIdPipe()) id: string) {
    const res = await this.libraryCategoryService.remove(id);
    return apiSucceed(res);
  }
}
