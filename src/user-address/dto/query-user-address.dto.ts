import { PaginationParametersDto } from '@app/common/PaginationParametersDto';
import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-02-25 16:05:15
 * @LastEditTime: 2022-02-25 16:08:59
 * @Description: Modify here please
 */
export class QueryUserAddressDto extends PaginationParametersDto {
  @ApiProperty({ title: '用户id', required: true })
  userId: string;

  @ApiProperty({ title: '收货人名称', required: false })
  name: string;
}
