/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-16 17:17:53
 * @LastEditTime: 2022-02-16 17:22:34
 * @Description: Modify here please
 */
import { PartialType } from '@nestjs/swagger';
import { CreateClassifyNavigationDto } from './create-classify-navigation.dto';

export class UpdateClassifyNavigationDto extends PartialType(CreateClassifyNavigationDto) {}
