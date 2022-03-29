/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-29 17:56:56
 * @LastEditTime: 2022-03-29 17:59:39
 * @Description: Modify here please
 */

import { ApiProperty } from '@nestjs/swagger';

export class ReplyProductCommentDto {
  @ApiProperty({ title: '回复商品评论' })
  content?: string;
}
