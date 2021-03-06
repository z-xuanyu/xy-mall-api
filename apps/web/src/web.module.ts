/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:56:14
 * @LastEditTime: 2022-03-22 10:51:08
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { WebController } from './web.controller';
import { WebService } from './web.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from 'libs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { UserCartModule } from './user-cart/user-cart.module';
import { OrderModule } from './order/order.module';
import { ProductCommentModule } from './product-comment/product-comment.module';
import { ChatNessageModule } from './chat-nessage/chat-nessage.module';

@Module({
  imports: [
    AuthModule,
    CommonModule,
    ProductModule,
    UserModule,
    UserCartModule,
    OrderModule,
    ProductCommentModule,
    ChatNessageModule,
  ],
  controllers: [WebController],
  providers: [WebService],
  exports: [WebService],
})
export class WebModule {}
