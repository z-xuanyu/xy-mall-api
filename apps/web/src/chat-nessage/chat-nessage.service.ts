/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-27 11:15:35
 * @LastEditTime: 2022-04-27 11:19:50
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ChatMessages } from 'libs/db/modules/chat-messages.model';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ChatNessageService {
  constructor(
    @InjectModel(ChatMessages)
    private chatMessageModel: ReturnModelType<typeof ChatMessages>,
  ) {}

  /**
   * 获取客服聊天记录列表
   *
   * @param {string} id 客服id
   * @param {string} userId 用户id
   * @return {*}
   * @memberof CustomerServiceService
   */
  async getChatMessageList(id: string, userId: string): Promise<Array<ChatMessages>> {
    return await this.chatMessageModel
      .find({
        $or: [
          {
            userId: id,
            targetId: userId,
          },
          {
            targetId: id,
            userId: userId,
          },
        ],
      })
      .populate({ path: 'user', select: ['name', 'avatar'] })
      .populate({ path: 'target', select: ['name', 'avatar'] });
  }
}
