<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 11:46:30
 * @LastEditTime: 2022-03-25 11:05:52
 * @Description: Modify here please
-->

## YuYu-清酒零售商城-NestJs-Api
一个开源YuYu-清酒零售商城Api服务端，项目集成Nestjs+Mongodb+Jwt等。
项目是前后端分离，分为三端：Api服务端，Admin管理端，Web前端(uniapp),

Admin端仓库：<a href="https://github.com/z-xuanyu/fukucho-admin">点击跳转</a>
Web端uniapp仓库：<a href="https://github.com/z-xuanyu/fukucho-mall">点击跳转</a>
### 项目说明
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
```bash
├── .husky                     # 项目Git提交规范
├── apps                       # 项目容器
│   │── admin                  # admin端
│   └── web                    # web端
├── libs                       # 公共模块与配置
│   │── common                 # 公共模块
│   └── db                     # 数据库相关
├── .prettierrc                # prettierrc 配置项
├── .eslintrc.js               # eslint 配置项
├── tsconfig.json              # TypeScript配置
├── commitlint.config          # 代码提交规范
├── nest-cli                   # nest cli 配置
└── package.json               # package.json
```
每个子项目都是相同的目录结构,这里是按官方脚手架（nest-cli）推荐生成的。
例如开发user一个模块，使用官方nest-cli 生成Restful风格api，那么就执行下面命令(注意：记得全局安装 nest-cli)

```bash
$ nest g res user
```
生成如下：
![user](https://www.zhouxuanyu.com/usr/uploads/2022/03/955512880.png)

user模块的 serivice controller modules dto 还有一些单元测试。都归纳再user目录下。推荐使用此方式。



### 功能模块
Admin端

- [x] 管理员模块(已完成)
- [x] 权限角色模块(已完成)
- [x] 商品管理模块(已完成)
- [x] 会员模块(已完成)
- [x] Banner模块(已完成)
- [x] 素材库模块(已完成)
- [x] 分类模块(已完成)
- [x] 标签模块(已完成)
- [x] 新闻模块(已完成)
- [x] 站点设置模块(已完成)
- [ ] 优惠券模块(开发中...)

Web(uniapp)端

- [x] 首页数据接口(已完成)
- [x] 商品相关接口(已完成)
- [x] 用户相关接口(已完成)
- [x] 购物车相关接口(已完成)
- [x] 订单相关接口(已完成)
### 项目启动

1、先克隆项目
```bash
$ git clone https://github.com/z-xuanyu/fukucho-api.git
```
2、安装项目依赖
```bash
$ yarn 或者 npm install 或者pnpm install
```
3、设置数据数据库链接字符串，文件目录在：<span style="color: red">libs/common/config/src/db.confug.ts</span> , 把里面链接替换成自己数据库信息，注意：先安装配置好Mongodb数据库，项目默认设置密码链接，建议大家配置密码链接数据库，详细配置<a href="https://www.zhouxuanyu.com/archives/88.html">点击查看配置教程</a>，如果想不想配置密码链接字符串，请修改链接字符串为：mongodb://127.0.0.1:27017/[数据库名]，

4、修改项目启动端口,文件目录在: <span style="color: red">libs/common/config/src/port.config.ts</span>, 项目有分admin端，web端，需要设置两个不用端口，这里默认admin端：3008， web端：3009。需要修改自行修改。

5、修改项目jwt秘钥与失效时间。文件目录在：<span style="color: red">libs/common/config/src/jwt.config.ts</span>, 默认jwt 失效时间 1 天。

6、初始化数据库，执行一下命令
```bash
$ yarn initDb
```
###### 初始化完成之后Admin端的默认管理员账号：admnin@qq.com 密码：123456

7、运行项目

```bash
# 开发环境 Amdin端
$ npm run start:admin-dev

# 开发环境 Web端
$ npm run start:web-dev

# 生产环境 mode Admin端
$ npm run start:admin-prod

# 生产环境 mode web端
$ npm run start:admin-prod
```

8、项目运行完成之后，会看到控制台有输出swagger 接口文档api地址，例如：http://localhost:3008/api-docs
### 打包项目
```bash
# Amdin端
$ npm run build:admin

# Web端
$ npm run build:web

```
## 测试

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
