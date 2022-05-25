/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 10:22:36
 * @LastEditTime: 2022-03-03 10:40:21
 * @Description: Modify here please
 */
import { PartialType } from '@nestjs/swagger';
import { CreateLibraryCategoryDto } from './create-library-category.dto';

export class UpdateLibraryCategoryDto extends PartialType(CreateLibraryCategoryDto) {}
