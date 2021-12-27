/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 10:08:58
 * @LastEditTime: 2021-12-27 11:15:33
 * @Description: Modify here please
 */

import { Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { ApiFail } from '../result.model';

@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: string): any {
    if (isValidObjectId(value)) {
      return value;
    } else {
      throw new ApiFail(101, 'id不存在或者错误');
    }
  }
}
