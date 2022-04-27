/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-22 09:56:57
 * @LastEditTime: 2022-04-26 17:57:26
 * @Description: Modify here please
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose/lib/types';
import { ChatConversationRecord } from 'libs/db/modules/chat-conversation-record.model';
import { ChatMessages } from 'libs/db/modules/chat-messages.model';
import { CustomerService } from 'libs/db/modules/customer-service.model';
import { InjectModel } from 'nestjs-typegoose';
import { CreateCustomerServiceDto } from './dto/create-customer-service.dto';
import { QueryCustomerServiceDto } from './dto/query-customer-service.dto';
import { UpdateCustomerServiceDto } from './dto/update-customer-service.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class CustomerServiceService {
  constructor(
    // 客服
    @InjectModel(CustomerService)
    private customerServiceModel: ReturnModelType<typeof CustomerService>,
    // 会话列表
    @InjectModel(ChatConversationRecord)
    private chatConversationRecordModel: ReturnModelType<
      typeof ChatConversationRecord
    >,
    // 聊天记录
    @InjectModel(ChatMessages)
    private chatMessagesModel: ReturnModelType<typeof ChatMessages>,
  ) {}

  // 添加客服
  async create(createCustomerServiceDto: CreateCustomerServiceDto) {
    return await this.customerServiceModel.create(createCustomerServiceDto);
  }

  // 客服列表
  async findAll(parameters: QueryCustomerServiceDto) {
    return await this.customerServiceModel.find({
      name: { $regex: new RegExp(parameters.name, 'i') },
    });
  }

  // 客服详细
  async findOne(id: string) {
    return await this.customerServiceModel.findById(id);
  }

  // 更新客服信息
  async update(id: string, updateCustomerServiceDto: UpdateCustomerServiceDto) {
    return await this.customerServiceModel.findByIdAndUpdate(
      id,
      updateCustomerServiceDto,
    );
  }

  // 删除客服
  async remove(id: string) {
    return await this.customerServiceModel.findByIdAndDelete(id);
  }

  /**
   * 获取客服会话列表
   *
   * @param {string} id 客服id
   * @return {*}
   * @memberof CustomerServiceService
   */
  async getChatConversationRecord(
    id: string,
  ): Promise<Array<ChatConversationRecord>> {
    return await this.chatConversationRecordModel.aggregate([
      {
        $match: {
          customerServiceId: new ObjectId(id),
        },
      },
      {
        $lookup: {
          from: 'users',
          foreignField: '_id',
          localField: 'userId',
          as: 'user',
        },
      },
      {
        $unwind: '$user',
      },
      {
        $lookup: {
          from: 'customerservices',
          foreignField: '_id',
          localField: 'customerServiceId',
          as: 'customerService',
        },
      },
      {
        $unwind: '$customerService',
      },
      {
        $project: {
          messageType: 1,
          createdAt: 1,
          customerServiceId: 1,
          isTourist: 1,
          source: 1,
          unreadNum: 1,
          updatedAt: 1,
          userId: 1,
          messageContent: 1,
          'user.avatar': 1,
          'user.name': 1,
          'customerService.name': 1,
          'customerService.avatar': 1,
        },
      },
    ]);
  }

  /**
   * 获取客服聊天记录列表
   *
   * @param {string} id 客服id
   * @param {string} targetId 目标用户id
   * @return {*}
   * @memberof CustomerServiceService
   */
  async getChatMessageList(
    id: string,
    targetId: string,
  ): Promise<Array<ChatMessages>> {
    return await this.chatMessagesModel
      .find({
        $or: [
          {
            userId: id,
            targetId: targetId,
          },
          {
            targetId: id,
            userId: targetId,
          },
        ],
      })
      .populate({ path: 'user', select: ['name', 'avatar'] })
      .populate({ path: 'target', select: ['name', 'avatar'] });
  }
}
