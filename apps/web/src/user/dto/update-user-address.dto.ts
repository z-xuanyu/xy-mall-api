/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 17:59:45
 * @LastEditTime: 2022-03-08 18:02:36
 * @Description: Modify here please
 */

import { PartialType } from '@nestjs/swagger';
import { CreateUserAddressDto } from './create-user-address.dto';

export class UpdateUserAddressDto extends PartialType(CreateUserAddressDto) {}
