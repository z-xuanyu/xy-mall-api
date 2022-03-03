/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:47:25
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { ProductParamService } from './product-param.service';
import { ProductParamController } from './product-param.controller';

@Module({
  controllers: [ProductParamController],
  providers: [ProductParamService],
})
export class ProductParamModule {}
