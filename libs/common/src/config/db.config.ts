/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-01-06 10:49:12
 * @LastEditTime: 2022-02-10 15:05:32
 * @Description: 数据库链接字符串配置
 */

const baseConfig = {
  // 数据库地址
  host: '175.178.107.120',
  // 端口
  port: '27017',
  // 用户名
  userName: 'jp-admin',
  // 密码
  password: 'Yushao,19970415.',
  // 数据库名称
  dbName: 'nest-jp',
};

export const dbConfig = {
  url: `mongodb://${baseConfig.userName}:${baseConfig.password}@${baseConfig.host}:${baseConfig.port}/${baseConfig.dbName}?authSource=admin`,
};
