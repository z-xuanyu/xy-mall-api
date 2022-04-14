/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-23 10:38:54
 * @LastEditTime: 2022-04-14 17:26:04
 * @Description: 初始使用数据脚本
 */
import * as mongodb from 'mongodb';
import { hashSync } from 'bcryptjs';
import { baseDbConfig, dbConfig } from '../../common/src/config/db.config';

// 权限菜单

// 初始化数据
const mongoClient = mongodb.MongoClient;

mongoClient.connect(dbConfig.url, async (err, db) => {
  try {
    const DB = db.db(baseDbConfig.dbName);
    console.log('开始重建数据表');
    await DB.createCollection('admin_test');
    await DB.createCollection('sitesetting_test');
    console.log('开始初始化数据库！');
    const InitTestColl = DB.collection('admins');
    const SiteSetting = DB.collection('sitesettings');
    // 索引
    // await InitTestColl.createIndexes([{ key: { _id: 1 } }]);
    // 管理员
    await InitTestColl.insertOne({
      name: 'admin',
      email: 'admin@qq.com',
      password: hashSync('123456'),
      status: true,
    });

    // 站点设置
    await SiteSetting.insertOne({
      fileStorage: {
        mode: 1,
        aliOss: {
          region: '',
          accessKeyId: '',
          accessKeySecret: '',
          bucket: '',
        },
      },
    });
    console.log('初始化完成！');
  } catch (error) {
    console.log('数据库表名已存在,请先删除重名表!');
    // await DB.dropCollection('admin_test');
  }
});
