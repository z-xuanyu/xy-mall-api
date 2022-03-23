/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-06 10:49:12
 * @LastEditTime: 2022-03-23 11:05:56
 * @Description: 数据库链接字符串配置  175.178.107.120
 */

export const baseDbConfig = {
  // 数据库地址
  host: '175.178.107.120',
  // 端口
  port: '27017',
  // 用户名
  userName: 'ayu-dev',
  // 密码
  password: '123456',
  // 数据库名称
  dbName: 'nest-jp',
};

export const dbConfig = {
  url: `mongodb://${baseDbConfig.userName}:${baseDbConfig.password}@${baseDbConfig.host}:${baseDbConfig.port}/${baseDbConfig.dbName}?authSource=admin`,
};
