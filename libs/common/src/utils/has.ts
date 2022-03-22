/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-22 10:24:34
 * @LastEditTime: 2022-03-22 10:43:36
 * @Description: Modify here please
 */

import * as fs from 'fs';
import { join } from 'path';

/**
 * 文件是否存在
 *
 * @export
 * @param {string} dirName 文件或者目录名称
 * @return {*}
 */
export function dirIsExist(dirName: string): Promise<any> {
  return new Promise((resolve) => {
    fs.stat(join(__dirname, dirName), (err, stats) => {
      if (err) {
        resolve(false);
      } else {
        resolve(stats);
      }
    });
  });
}

/**
 * 创建目录
 *
 * @export
 * @param {string} dirName 文件或者目录名称
 * @return {*}
 */
export function createMkdir(dirName: string): Promise<boolean> {
  return new Promise((resolve) => {
    fs.mkdir(join(__dirname, dirName), (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}
