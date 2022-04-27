/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-27 11:15:35
 * @LastEditTime: 2022-04-27 11:35:18
 * @Description: Modify here please
 */
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { apiSucceed } from 'libs/common/ResponseResultModel';
import { UserDocument } from 'libs/db/modules/user.model';
import { CurrentUser } from '../auth/current-user.decorator';
import { ChatNessageService } from './chat-nessage.service';

@ApiTags('客服聊天信息')
@UseGuards(AuthGuard('web-jwt'))
@ApiBearerAuth()
@Controller('chatMessage')
export class ChatNessageController {
  constructor(private readonly chatNessageService: ChatNessageService) {}
  @Get()
  @ApiQuery({ name: 'cuServiceId', description: '客服id' })
  async getChatMessageList(
    @CurrentUser() user: UserDocument,
    @Query('cuServiceId') cuServiceId: string,
  ) {
    const res = await this.chatNessageService.getChatMessageList(
      cuServiceId,
      user._id,
    );
    return apiSucceed(res);
  }
}
