/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-28 14:22:03
 * @LastEditTime: 2022-03-28 14:24:35
 * @Description: Modify here please
 */
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryMenuDto extends PaginationParametersDto {
  // 菜单名称
  title: string;
}
