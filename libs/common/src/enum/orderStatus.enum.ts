/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-19 17:28:14
 * @LastEditTime: 2022-03-22 15:37:54
 * @Description: 订单状态枚举
 */

export enum OrderStatus {
  PENDING_PAY = 1, // 待支付，
  PENDING_DELIVER = 2, // 待发货
  PENDING_TAKE = 3, // 待收货
  PENDING_COMMENT = 4, // 待评价
  REFUND = 5, // 退款/售后
  FINISH = 6, // 完成
}
