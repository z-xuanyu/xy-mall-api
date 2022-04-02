/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-02 17:15:13
 * @LastEditTime: 2022-04-02 17:16:34
 * @Description: Modify here please
 */
import { ApiProperty } from '@nestjs/swagger';
import { PaginationParametersDto } from 'libs/common/PaginationParametersDto';

export class QueryProductUnitDto extends PaginationParametersDto {
  @ApiProperty({ name: '单位名称', required: false })
  name: string;
}
