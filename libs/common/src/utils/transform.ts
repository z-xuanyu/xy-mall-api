/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-28 14:52:03
 * @LastEditTime: 2022-03-28 14:54:44
 * @Description: Modify here please
 */

// 中划线命名转换成驼峰命名
export function upperCamelCase(name: string) {
  return name
    .replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
    .replace(/^\S/, (s) => s.toUpperCase());
}
