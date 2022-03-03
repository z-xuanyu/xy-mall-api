/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:50:16
 * @Description: Modify here please
 */
import { Module } from '@nestjs/common';
import { ProductSkuService } from './product-sku.service';
import { ProductSkuController } from './product-sku.controller';

@Module({
  controllers: [ProductSkuController],
  providers: [ProductSkuService],
})
export class ProductSkuModule {}
