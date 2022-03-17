<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:46:30
 * @LastEditTime: 2022-03-16 18:31:34
 * @Description: Modify here please
-->

## YuYu-清酒零售商城-NestJs-Api
一个开源YuYu-清酒零售商城Api服务端，项目集成Nestjs+Mongodb+Jwt等。
项目是前后端分离，分为三端：Api服务端，Admin管理端，Web前端(uniapp),

Admin端仓库：<a href="https://github.com/z-xuanyu/fukucho-admin">点击跳转</a>
Web端uniapp仓库：<a href="https://github.com/z-xuanyu/fukucho-mall">点击跳转</a>
## 项目说明
为了迭代更多功能，方便管理，我们这里把服务端Api,分为两个项目来开发，一个是admin-api,一个是web-api,
admin-api只要是管理Admin站接口开发，web-api只要是负责web站api接口开发。

在Nestjs中创建多个子项目也非常简单。首先全局安装一下 Nest-cil,详细cli使用，可以去阅读官网文档。

#### 如何创建Nestjs子项目
```bash
 $ nest g app [project-name]
```
例如：nest g app admin

创建完成之后你会看到项目合并为 apps目下。apps目录下就是所有子目录。

### 项目目录结构

- apps 管理所有子项目
- - - admin 管理站Api项目

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

Nest is [MIT licensed](LICENSE).
