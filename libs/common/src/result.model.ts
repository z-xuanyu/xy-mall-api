/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-27 10:30:12
 * @LastEditTime: 2021-12-27 12:00:12
 * @Description: 接口返回
 */

import { HttpException, HttpStatus } from '@nestjs/common';

// 成功返回
export class ApiSucceedResult<T> {
  code: number;
  result?: T;
  message: string;
}

// 分页返回
export class PaginationResult<T> {
  total: number;
  items: T;
}
// 成功
export function apiSucceed<T>(data?: T): ApiSucceedResult<T> {
  return {
    code: 0,
    result: data,
    message: '成功',
  };
}

// 失败
export class ApiFail extends HttpException {
  constructor(code = 101, message = '失败') {
    super(
      {
        code,
        message,
      },
      HttpStatus.OK,
    );
  }
}
