/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = [
    ,
    /* 0 */ /* 1 */
    /***/ (module) => {
      module.exports = require('@nestjs/core');

      /***/
    },
    /* 2 */
    /***/ (module) => {
      module.exports = require('@nestjs/swagger');

      /***/
    },
    /* 3 */
    /***/ (module) => {
      module.exports = require('express-rate-limit');

      /***/
    },
    /* 4 */
    /***/ (module) => {
      module.exports = require('helmet');

      /***/
    },
    /* 5 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.webPort = exports.adminPort = void 0;
      exports.adminPort = 3008;
      exports.webPort = 3009;

      /***/
    },
    /* 6 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.HttpExceptionFilter = void 0;
      const common_1 = __webpack_require__(7);
      let HttpExceptionFilter = class HttpExceptionFilter {
        catch(exception, host) {
          const ctx = host.switchToHttp();
          const response = ctx.getResponse();
          const request = ctx.getRequest();
          const status =
            exception instanceof common_1.HttpException
              ? exception.getStatus()
              : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
          let message = exception.message;
          let code = 100001;
          try {
            const messageObj = JSON.parse(exception.message);
            message = messageObj.message;
            code = messageObj.code;
          } catch (e) {}
          common_1.Logger.log(exception, '请求错误信息');
          const errorResponse = {
            status,
            message,
            code,
            path: request.url,
            method: request.method,
            timestamp: new Date().toLocaleDateString(),
          };
          common_1.Logger.error(
            `【${Date.now()}】${request.method} ${request.url}`,
            JSON.stringify(errorResponse),
            'HttpExceptionFilter',
          );
          response.status(status);
          response.header('Content-Type', 'application/json; charset=utf-8');
          response.send(errorResponse);
        }
      };
      HttpExceptionFilter = __decorate(
        [(0, common_1.Catch)()],
        HttpExceptionFilter,
      );
      exports.HttpExceptionFilter = HttpExceptionFilter;

      /***/
    },
    /* 7 */
    /***/ (module) => {
      module.exports = require('@nestjs/common');

      /***/
    },
    /* 8 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ValidationDtoPipe = void 0;
      const common_1 = __webpack_require__(7);
      const class_validator_1 = __webpack_require__(9);
      const class_transformer_1 = __webpack_require__(10);
      const ResponseResultModel_1 = __webpack_require__(11);
      let ValidationDtoPipe = class ValidationDtoPipe {
        async transform(value, { metatype }) {
          if (!metatype || !this.toValidate(metatype)) {
            return value;
          }
          const object = (0, class_transformer_1.plainToClass)(metatype, value);
          const errors = await (0, class_validator_1.validate)(object);
          if (errors.length > 0) {
            throw new ResponseResultModel_1.ApiFail(
              101,
              `${
                JSON.stringify(errors[0].constraints)
                  .split(':')[1]
                  .split('"')[1]
              }`,
            );
          }
          return value;
        }
        toValidate(metatype) {
          const types = [String, Boolean, Number, Array, Object];
          return !types.includes(metatype);
        }
      };
      ValidationDtoPipe = __decorate(
        [(0, common_1.Injectable)()],
        ValidationDtoPipe,
      );
      exports.ValidationDtoPipe = ValidationDtoPipe;

      /***/
    },
    /* 9 */
    /***/ (module) => {
      module.exports = require('class-validator');

      /***/
    },
    /* 10 */
    /***/ (module) => {
      module.exports = require('class-transformer');

      /***/
    },
    /* 11 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ApiFail =
        exports.apiSucceed =
        exports.PaginationResult =
        exports.ApiSucceedResult =
          void 0;
      const common_1 = __webpack_require__(7);
      class ApiSucceedResult {}
      exports.ApiSucceedResult = ApiSucceedResult;
      class PaginationResult {}
      exports.PaginationResult = PaginationResult;
      function apiSucceed(data) {
        return {
          code: 0,
          result: data,
          message: '成功',
        };
      }
      exports.apiSucceed = apiSucceed;
      class ApiFail extends common_1.HttpException {
        constructor(code = 101, message = '失败') {
          super(
            {
              code,
              message,
            },
            common_1.HttpStatus.OK,
          );
        }
      }
      exports.ApiFail = ApiFail;

      /***/
    },
    /* 12 */
    /***/ (module) => {
      module.exports = require('path');

      /***/
    },
    /* 13 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AppModule = void 0;
      const common_1 = __webpack_require__(7);
      const common_2 = __webpack_require__(14);
      const app_controller_1 = __webpack_require__(57);
      const app_service_1 = __webpack_require__(61);
      const auth_module_1 = __webpack_require__(68);
      const admin_module_1 = __webpack_require__(78);
      const user_module_1 = __webpack_require__(87);
      const user_address_module_1 = __webpack_require__(96);
      const category_module_1 = __webpack_require__(102);
      const news_module_1 = __webpack_require__(108);
      const tag_module_1 = __webpack_require__(114);
      const product_module_1 = __webpack_require__(120);
      const product_param_module_1 = __webpack_require__(126);
      const product_sku_module_1 = __webpack_require__(132);
      const product_topic_module_1 = __webpack_require__(138);
      const banner_module_1 = __webpack_require__(144);
      const library_category_module_1 = __webpack_require__(151);
      const media_library_module_1 = __webpack_require__(156);
      const classify_navigation_module_1 = __webpack_require__(162);
      const user_collection_module_1 = __webpack_require__(169);
      const caht_module_1 = __webpack_require__(174);
      const settings_module_1 = __webpack_require__(179);
      const order_module_1 = __webpack_require__(183);
      const product_comment_module_1 = __webpack_require__(188);
      const role_module_1 = __webpack_require__(193);
      const menu_module_1 = __webpack_require__(199);
      const product_unit_module_1 = __webpack_require__(206);
      const customer_service_module_1 = __webpack_require__(212);
      const platform_express_1 = __webpack_require__(59);
      const multer_1 = __webpack_require__(219);
      const nuid = __webpack_require__(220);
      const path_1 = __webpack_require__(12);
      let AppModule = class AppModule {};
      AppModule = __decorate(
        [
          (0, common_1.Module)({
            imports: [
              common_2.CommonModule,
              caht_module_1.ChatMessageModule,
              auth_module_1.AuthModule,
              platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                  destination: (0, path_1.join)(__dirname, 'uploads-images'),
                  filename: (req, file, cb) => {
                    const filename = `${nuid.next()}.${
                      file.mimetype.split('/')[1]
                    }`;
                    return cb(null, filename);
                  },
                }),
              }),
              admin_module_1.AdminModule,
              role_module_1.RoleModule,
              menu_module_1.MenuModule,
              user_module_1.UserModule,
              user_address_module_1.UserAddressModule,
              user_collection_module_1.UserCollectionModule,
              order_module_1.OrderModule,
              news_module_1.NewsModule,
              tag_module_1.TagModule,
              product_module_1.ProductModule,
              category_module_1.CategoryModule,
              product_param_module_1.ProductParamModule,
              product_sku_module_1.ProductSkuModule,
              product_topic_module_1.ProductTopicModule,
              product_comment_module_1.ProductCommentModule,
              banner_module_1.BannerModule,
              library_category_module_1.LibraryCategoryModule,
              media_library_module_1.MediaLibraryModule,
              classify_navigation_module_1.ClassifyNavigationModule,
              product_unit_module_1.ProductUnitModule,
              customer_service_module_1.CustomerServiceModule,
              settings_module_1.SettingsModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
          }),
        ],
        AppModule,
      );
      exports.AppModule = AppModule;

      /***/
    },
    /* 14 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                !desc ||
                ('get' in desc
                  ? !m.__esModule
                  : desc.writable || desc.configurable)
              ) {
                desc = {
                  enumerable: true,
                  get: function () {
                    return m[k];
                  },
                };
              }
              Object.defineProperty(o, k2, desc);
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __exportStar =
        (this && this.__exportStar) ||
        function (m, exports) {
          for (var p in m)
            if (
              p !== 'default' &&
              !Object.prototype.hasOwnProperty.call(exports, p)
            )
              __createBinding(exports, m, p);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      __exportStar(__webpack_require__(15), exports);
      __exportStar(__webpack_require__(56), exports);

      /***/
    },
    /* 15 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CommonModule = void 0;
      const common_1 = __webpack_require__(7);
      const config_1 = __webpack_require__(16);
      const db_1 = __webpack_require__(17);
      const common_service_1 = __webpack_require__(56);
      let CommonModule = class CommonModule {};
      CommonModule = __decorate(
        [
          (0, common_1.Global)(),
          (0, common_1.Module)({
            imports: [
              db_1.DbModule,
              config_1.ConfigModule.forRoot({
                isGlobal: true,
              }),
            ],
            providers: [common_service_1.CommonService],
            exports: [common_service_1.CommonService],
          }),
        ],
        CommonModule,
      );
      exports.CommonModule = CommonModule;

      /***/
    },
    /* 16 */
    /***/ (module) => {
      module.exports = require('@nestjs/config');

      /***/
    },
    /* 17 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                !desc ||
                ('get' in desc
                  ? !m.__esModule
                  : desc.writable || desc.configurable)
              ) {
                desc = {
                  enumerable: true,
                  get: function () {
                    return m[k];
                  },
                };
              }
              Object.defineProperty(o, k2, desc);
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __exportStar =
        (this && this.__exportStar) ||
        function (m, exports) {
          for (var p in m)
            if (
              p !== 'default' &&
              !Object.prototype.hasOwnProperty.call(exports, p)
            )
              __createBinding(exports, m, p);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      __exportStar(__webpack_require__(18), exports);
      __exportStar(__webpack_require__(21), exports);

      /***/
    },
    /* 18 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.DbModule = void 0;
      const common_1 = __webpack_require__(7);
      const db_config_1 = __webpack_require__(19);
      const nestjs_typegoose_1 = __webpack_require__(20);
      const db_service_1 = __webpack_require__(21);
      const admin_model_1 = __webpack_require__(22);
      const banner_model_1 = __webpack_require__(27);
      const category_model_1 = __webpack_require__(31);
      const chat_conversation_record_model_1 = __webpack_require__(33);
      const chat_messages_model_1 = __webpack_require__(37);
      const classify_navigation_model_1 = __webpack_require__(38);
      const customer_service_model_1 = __webpack_require__(34);
      const library_category_model_1 = __webpack_require__(39);
      const media_library_model_1 = __webpack_require__(40);
      const menu_model_1 = __webpack_require__(26);
      const news_model_1 = __webpack_require__(41);
      const order_model_1 = __webpack_require__(42);
      const product_comment_model_1 = __webpack_require__(45);
      const product_param_model_1 = __webpack_require__(46);
      const product_sku_attr_model_1 = __webpack_require__(47);
      const product_sku_model_1 = __webpack_require__(48);
      const product_topic_model_1 = __webpack_require__(49);
      const product_unit_model_1 = __webpack_require__(50);
      const product_model_1 = __webpack_require__(29);
      const role_model_1 = __webpack_require__(25);
      const site_setting_model_1 = __webpack_require__(51);
      const tag_model_1 = __webpack_require__(32);
      const user_address_model_1 = __webpack_require__(44);
      const user_cart_model_1 = __webpack_require__(53);
      const user_collection_model_1 = __webpack_require__(54);
      const user_views_history_model_1 = __webpack_require__(55);
      const user_model_1 = __webpack_require__(35);
      const models = nestjs_typegoose_1.TypegooseModule.forFeature([
        admin_model_1.Admin,
        role_model_1.Role,
        menu_model_1.Menu,
        user_model_1.User,
        user_address_model_1.UserAddress,
        user_collection_model_1.UserCollection,
        user_views_history_model_1.UserViewsHistory,
        user_cart_model_1.UserCart,
        classify_navigation_model_1.ClassifyNavigation,
        tag_model_1.Tag,
        news_model_1.News,
        product_model_1.Product,
        category_model_1.Category,
        product_param_model_1.ProductParam,
        product_topic_model_1.ProductTopic,
        product_sku_model_1.ProductSku,
        product_sku_attr_model_1.ProductSkuAttr,
        product_unit_model_1.ProductUnit,
        product_comment_model_1.ProductComment,
        order_model_1.Order,
        banner_model_1.Banner,
        library_category_model_1.LibraryCategory,
        media_library_model_1.MediaLibrary,
        customer_service_model_1.CustomerService,
        chat_conversation_record_model_1.ChatConversationRecord,
        chat_messages_model_1.ChatMessages,
        site_setting_model_1.SiteSettings,
      ]);
      let DbModule = class DbModule {};
      DbModule = __decorate(
        [
          (0, common_1.Global)(),
          (0, common_1.Module)({
            imports: [
              nestjs_typegoose_1.TypegooseModule.forRoot(
                db_config_1.dbConfig.url,
                {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                },
              ),
              models,
            ],
            providers: [db_service_1.DbService],
            exports: [db_service_1.DbService, models],
          }),
        ],
        DbModule,
      );
      exports.DbModule = DbModule;

      /***/
    },
    /* 19 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.dbConfig = exports.baseDbConfig = void 0;
      exports.baseDbConfig = {
        host: '175.178.107.120',
        port: '27017',
        userName: 'ayu-dev',
        password: '123456',
        dbName: 'nest-jp',
      };
      exports.dbConfig = {
        url: `mongodb://${exports.baseDbConfig.userName}:${exports.baseDbConfig.password}@${exports.baseDbConfig.host}:${exports.baseDbConfig.port}/${exports.baseDbConfig.dbName}?authSource=admin`,
      };

      /***/
    },
    /* 20 */
    /***/ (module) => {
      module.exports = require('nestjs-typegoose');

      /***/
    },
    /* 21 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.DbService = void 0;
      const common_1 = __webpack_require__(7);
      let DbService = class DbService {};
      DbService = __decorate([(0, common_1.Injectable)()], DbService);
      exports.DbService = DbService;

      /***/
    },
    /* 22 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Admin = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const bcryptjs_1 = __webpack_require__(24);
      const role_model_1 = __webpack_require__(25);
      let Admin = class Admin {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Admin.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '邮箱' }),
          (0, typegoose_1.prop)({ required: true, unique: true }),
          __metadata('design:type', String),
        ],
        Admin.prototype,
        'email',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '密码' }),
          (0, typegoose_1.prop)({
            required: true,
            select: false,
            get(val) {
              return val;
            },
            set(val) {
              return val ? (0, bcryptjs_1.hashSync)(val) : val;
            },
          }),
          __metadata('design:type', String),
        ],
        Admin.prototype,
        'password',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '关联角色' }),
          (0, typegoose_1.prop)({
            ref: () => role_model_1.Role,
            type: [role_model_1.Role],
          }),
          __metadata('design:type', Array),
        ],
        Admin.prototype,
        'roleIds',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态' }),
          (0, typegoose_1.prop)({ default: true }),
          __metadata('design:type', Boolean),
        ],
        Admin.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否在线' }),
          (0, typegoose_1.prop)({ type: Boolean, default: false }),
          __metadata('design:type', Boolean),
        ],
        Admin.prototype,
        'isOnline',
        void 0,
      );
      Admin = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        Admin,
      );
      exports.Admin = Admin;

      /***/
    },
    /* 23 */
    /***/ (module) => {
      module.exports = require('@typegoose/typegoose');

      /***/
    },
    /* 24 */
    /***/ (module) => {
      module.exports = require('bcryptjs');

      /***/
    },
    /* 25 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Role = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const menu_model_1 = __webpack_require__(26);
      let Role = class Role {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '角色名' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        Role.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '角色标识' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        Role.prototype,
        'label',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '备注' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        Role.prototype,
        'remark',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '关联的菜单' }),
          (0, typegoose_1.prop)({ ref: () => menu_model_1.Menu, default: [] }),
          __metadata('design:type', Array),
        ],
        Role.prototype,
        'menuIds',
        void 0,
      );
      Role = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        Role,
      );
      exports.Role = Role;

      /***/
    },
    /* 26 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var Menu_1, _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Menu = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      class TagItem {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否显示小圆点' }),
          (0, typegoose_1.prop)({ type: Boolean, default: false }),
          __metadata('design:type', Boolean),
        ],
        TagItem.prototype,
        'dot',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '内容' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        TagItem.prototype,
        'content',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '类型' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        TagItem.prototype,
        'type',
        void 0,
      );
      class MetaItem {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '菜单栏icon' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        MetaItem.prototype,
        'icon',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '菜单Tag' }),
          (0, typegoose_1.prop)({ type: TagItem }),
          __metadata('design:type', TagItem),
        ],
        MetaItem.prototype,
        'tag',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否禁用' }),
          (0, typegoose_1.prop)({ type: Boolean, default: false }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'disabled',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否隐藏菜单' }),
          (0, typegoose_1.prop)({ default: false, type: Boolean }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'hideMenu',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '菜单名称' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        MetaItem.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否固定标签' }),
          (0, typegoose_1.prop)({ default: false, type: Boolean }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'affix',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否忽略KeepAlive缓存' }),
          (0, typegoose_1.prop)({ default: false, type: Boolean }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'ignoreKeepAlive',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '隐藏所有子菜单' }),
          (0, typegoose_1.prop)({ default: false, type: Boolean }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'hideChildrenInMenu',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '当前激活的菜单。用于配置详情页时左侧激活的菜单路径',
          }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        MetaItem.prototype,
        'currentActiveMenu',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '菜单排序，只对第一级有效' }),
          (0, typegoose_1.prop)({ type: Number, default: 1 }),
          __metadata('design:type', Number),
        ],
        MetaItem.prototype,
        'orderNo',
        void 0,
      );
      let Menu = (Menu_1 = class Menu {});
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '路由名称' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        Menu.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '路由路径' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        Menu.prototype,
        'path',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '组件路径' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        Menu.prototype,
        'component',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '菜单mate' }),
          (0, typegoose_1.prop)({ type: MetaItem }),
          __metadata('design:type', MetaItem),
        ],
        Menu.prototype,
        'meta',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '上级id', default: null }),
          (0, typegoose_1.prop)({ ref: () => Menu_1, default: null }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        Menu.prototype,
        'parentId',
        void 0,
      );
      Menu = Menu_1 = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        Menu,
      );
      exports.Menu = Menu;

      /***/
    },
    /* 27 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Banner = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const banner_enum_1 = __webpack_require__(28);
      const product_model_1 = __webpack_require__(29);
      let Banner = class Banner {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Banner.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: 'banner排序',
            description: '整数数字类型',
          }),
          (0, typegoose_1.prop)({ default: 1 }),
          __metadata('design:type', Number),
        ],
        Banner.prototype,
        'sort',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'banner图片' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Banner.prototype,
        'image',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '链接' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        Banner.prototype,
        'url',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '类型' }),
          (0, typegoose_1.prop)({
            enum: banner_enum_1.BannerType,
            type: Number,
            default: banner_enum_1.BannerType.None,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof banner_enum_1.BannerType !== 'undefined' &&
              banner_enum_1.BannerType) === 'function'
              ? _a
              : Object,
          ),
        ],
        Banner.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态' }),
          (0, typegoose_1.prop)({
            enum: banner_enum_1.BannerStatus,
            type: Number,
            default: banner_enum_1.BannerStatus.Normal,
          }),
          __metadata(
            'design:type',
            typeof (_b =
              typeof banner_enum_1.BannerStatus !== 'undefined' &&
              banner_enum_1.BannerStatus) === 'function'
              ? _b
              : Object,
          ),
        ],
        Banner.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '关联产品id' }),
          (0, typegoose_1.prop)({
            ref: () => product_model_1.Product,
            default: null,
          }),
          __metadata(
            'design:type',
            typeof (_c =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _c
              : Object,
          ),
        ],
        Banner.prototype,
        'product',
        void 0,
      );
      Banner = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        Banner,
      );
      exports.Banner = Banner;

      /***/
    },
    /* 28 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.BannerStatus = exports.BannerType = void 0;
      var BannerType;
      (function (BannerType) {
        BannerType[(BannerType['ExternalLink'] = 1)] = 'ExternalLink';
        BannerType[(BannerType['RelatedProduct'] = 2)] = 'RelatedProduct';
        BannerType[(BannerType['None'] = 3)] = 'None';
      })((BannerType = exports.BannerType || (exports.BannerType = {})));
      var BannerStatus;
      (function (BannerStatus) {
        BannerStatus[(BannerStatus['Disable'] = 1)] = 'Disable';
        BannerStatus[(BannerStatus['Normal'] = 2)] = 'Normal';
      })((BannerStatus = exports.BannerStatus || (exports.BannerStatus = {})));

      /***/
    },
    /* 29 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Product = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const product_enum_1 = __webpack_require__(30);
      const category_model_1 = __webpack_require__(31);
      const tag_model_1 = __webpack_require__(32);
      let SkuDataType = class SkuDataType {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格价格' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'price',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '库存' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'inventory',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '成本价' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'costPrice',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '重量' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'weight',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格图片' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        SkuDataType.prototype,
        'image',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '货号' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'artNo',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格名称集合' }),
          (0, typegoose_1.prop)({ type: [String] }),
          __metadata('design:type', Array),
        ],
        SkuDataType.prototype,
        'skuNames',
        void 0,
      );
      SkuDataType = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        SkuDataType,
      );
      class SkuAttrType {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格属性名称' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        SkuAttrType.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格属性名称' }),
          (0, typegoose_1.prop)({ type: [String] }),
          __metadata('design:type', Array),
        ],
        SkuAttrType.prototype,
        'values',
        void 0,
      );
      class Product {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品标题' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Product.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '副标题' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Product.prototype,
        'subTitle',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品图片' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Product.prototype,
        'pic',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品轮播图' }),
          (0, typegoose_1.prop)({ type: [String] }),
          __metadata('design:type', Array),
        ],
        Product.prototype,
        'bannerImg',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品描述' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Product.prototype,
        'description',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品分类' }),
          (0, typegoose_1.prop)({ ref: () => category_model_1.Category }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        Product.prototype,
        'category',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品标签' }),
          (0, typegoose_1.prop)({
            type: [tag_model_1.Tag],
            ref: () => tag_model_1.Tag,
          }),
          __metadata('design:type', Array),
        ],
        Product.prototype,
        'tags',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品价格' }),
          (0, typegoose_1.prop)({ default: 0, required: true }),
          __metadata('design:type', Number),
        ],
        Product.prototype,
        'price',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '折扣价' }),
          (0, typegoose_1.prop)({ type: Number, default: 0 }),
          __metadata('design:type', Number),
        ],
        Product.prototype,
        'costPrice',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品库存' }),
          (0, typegoose_1.prop)({ default: 0, required: true }),
          __metadata('design:type', Number),
        ],
        Product.prototype,
        'inventory',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品销量' }),
          (0, typegoose_1.prop)({ default: 0, required: true }),
          __metadata('design:type', Number),
        ],
        Product.prototype,
        'sales',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品浏览量' }),
          (0, typegoose_1.prop)({ default: 0, required: true }),
          __metadata('design:type', Number),
        ],
        Product.prototype,
        'views',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格类型' }),
          (0, typegoose_1.prop)({
            default: product_enum_1.ProductSkuSelectType.SINGLE,
            type: Number,
            enum: product_enum_1.ProductSkuSelectType,
          }),
          __metadata(
            'design:type',
            typeof (_b =
              typeof product_enum_1.ProductSkuSelectType !== 'undefined' &&
              product_enum_1.ProductSkuSelectType) === 'function'
              ? _b
              : Object,
          ),
        ],
        Product.prototype,
        'skuType',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品规格' }),
          (0, typegoose_1.prop)({ type: [SkuDataType] }),
          __metadata('design:type', Array),
        ],
        Product.prototype,
        'skus',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格属性' }),
          (0, typegoose_1.prop)({ type: [SkuAttrType] }),
          __metadata('design:type', Array),
        ],
        Product.prototype,
        'skuAttrs',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '商品排序',
            description: '整数数字类型',
          }),
          (0, typegoose_1.prop)({ default: 1 }),
          __metadata('design:type', Number),
        ],
        Product.prototype,
        'sort',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '分类状态', example: true }),
          (0, typegoose_1.prop)({ default: true }),
          __metadata('design:type', Boolean),
        ],
        Product.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否限时精选', example: false }),
          (0, typegoose_1.prop)({ default: false }),
          __metadata('design:type', Boolean),
        ],
        Product.prototype,
        'isTimeLimit',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否热门推荐', example: false }),
          (0, typegoose_1.prop)({ default: false }),
          __metadata('design:type', Boolean),
        ],
        Product.prototype,
        'isHot',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '分享数', example: 0 }),
          (0, typegoose_1.prop)({ default: 0 }),
          __metadata('design:type', Number),
        ],
        Product.prototype,
        'shareCount',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '收藏数', example: 0 }),
          (0, typegoose_1.prop)({ default: 0 }),
          __metadata('design:type', Number),
        ],
        Product.prototype,
        'collectionCount',
        void 0,
      );
      exports.Product = Product;

      /***/
    },
    /* 30 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductSkuSelectType = void 0;
      var ProductSkuSelectType;
      (function (ProductSkuSelectType) {
        ProductSkuSelectType[(ProductSkuSelectType['SINGLE'] = 1)] = 'SINGLE';
        ProductSkuSelectType[(ProductSkuSelectType['MULTIPLE'] = 2)] =
          'MULTIPLE';
        ProductSkuSelectType[(ProductSkuSelectType['NONE'] = 3)] = 'NONE';
      })(
        (ProductSkuSelectType =
          exports.ProductSkuSelectType || (exports.ProductSkuSelectType = {})),
      );

      /***/
    },
    /* 31 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var Category_1, _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Category = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      let Category = (Category_1 = class Category {});
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Category.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '类别排序',
            description: '整数数字类型',
          }),
          (0, typegoose_1.prop)({ default: 1 }),
          __metadata('design:type', Number),
        ],
        Category.prototype,
        'sort',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '分类状态', example: true }),
          (0, typegoose_1.prop)({ default: true }),
          __metadata('design:type', Boolean),
        ],
        Category.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '上级分类', default: null }),
          (0, typegoose_1.prop)({ ref: () => Category_1, default: null }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        Category.prototype,
        'parentId',
        void 0,
      );
      Category = Category_1 = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        Category,
      );
      exports.Category = Category;

      /***/
    },
    /* 32 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Tag = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      let Tag = class Tag {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, typegoose_1.prop)({ required: true, trim: true }),
          __metadata('design:type', String),
        ],
        Tag.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '描述' }),
          (0, typegoose_1.prop)({ required: true, trim: true }),
          __metadata('design:type', String),
        ],
        Tag.prototype,
        'description',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '标签类型' }),
          (0, typegoose_1.prop)({ required: true, type: Number }),
          __metadata('design:type', Number),
        ],
        Tag.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态' }),
          (0, typegoose_1.prop)({ required: true, default: true }),
          __metadata('design:type', Boolean),
        ],
        Tag.prototype,
        'status',
        void 0,
      );
      Tag = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        Tag,
      );
      exports.Tag = Tag;

      /***/
    },
    /* 33 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ChatConversationRecord = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const customer_service_model_1 = __webpack_require__(34);
      const user_model_1 = __webpack_require__(35);
      let ChatConversationRecord = class ChatConversationRecord {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户d' }),
          (0, typegoose_1.prop)({
            required: true,
            ref: () => user_model_1.User,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        ChatConversationRecord.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '客服id' }),
          (0, typegoose_1.prop)({
            required: true,
            ref: () => customer_service_model_1.CustomerService,
          }),
          __metadata(
            'design:type',
            typeof (_b =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        ChatConversationRecord.prototype,
        'customerServiceId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否为游客' }),
          (0, typegoose_1.prop)({ type: Boolean, default: false }),
          __metadata('design:type', Boolean),
        ],
        ChatConversationRecord.prototype,
        'isTourist',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否在线', default: false }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        ChatConversationRecord.prototype,
        'isOnline',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '信息来源设备',
            description: '1: pc, 2: 微信(公众号), 3: 小程序 4: h5',
          }),
          (0, typegoose_1.prop)({ type: Number, default: 4 }),
          __metadata('design:type', Number),
        ],
        ChatConversationRecord.prototype,
        'source',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '消息未读数' }),
          (0, typegoose_1.prop)({ type: Number, default: 0 }),
          __metadata('design:type', Number),
        ],
        ChatConversationRecord.prototype,
        'unreadNum',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '最新一条消息内容' }),
          (0, typegoose_1.prop)({ type: String, default: '' }),
          __metadata('design:type', String),
        ],
        ChatConversationRecord.prototype,
        'messageContent',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            type: '消息类型',
            description: '1: 文本，2: 表情，3: 图片, 4: 语音，5：商品推送',
          }),
          (0, typegoose_1.prop)({ type: Number, default: 1 }),
          __metadata('design:type', Number),
        ],
        ChatConversationRecord.prototype,
        'messageType',
        void 0,
      );
      ChatConversationRecord = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        ChatConversationRecord,
      );
      exports.ChatConversationRecord = ChatConversationRecord;

      /***/
    },
    /* 34 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CustomerService = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const bcryptjs_1 = __webpack_require__(24);
      let CustomerService = class CustomerService {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '客服名称' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        CustomerService.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '手机号' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        CustomerService.prototype,
        'phone',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '密码' }),
          (0, typegoose_1.prop)({
            required: true,
            select: false,
            get(val) {
              return val;
            },
            set(val) {
              return val ? (0, bcryptjs_1.hashSync)(val) : val;
            },
          }),
          __metadata('design:type', String),
        ],
        CustomerService.prototype,
        'password',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '头像' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        CustomerService.prototype,
        'avatar',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否在线' }),
          (0, typegoose_1.prop)({ type: Boolean }),
          __metadata('design:type', Boolean),
        ],
        CustomerService.prototype,
        'isOnline',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态' }),
          (0, typegoose_1.prop)({ type: Boolean, default: true }),
          __metadata('design:type', Boolean),
        ],
        CustomerService.prototype,
        'status',
        void 0,
      );
      CustomerService = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        CustomerService,
      );
      exports.CustomerService = CustomerService;

      /***/
    },
    /* 35 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.User = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const bcryptjs_1 = __webpack_require__(24);
      const user_enum_1 = __webpack_require__(36);
      let User = class User {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        User.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '邮箱' }),
          (0, typegoose_1.prop)({
            index: true,
            required: true,
            unique: true,
            trim: true,
          }),
          __metadata('design:type', String),
        ],
        User.prototype,
        'email',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '头像' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        User.prototype,
        'avatar',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '性别',
            enum: user_enum_1.Gender,
            type: Number,
          }),
          (0, typegoose_1.prop)(),
          __metadata(
            'design:type',
            typeof (_a =
              typeof user_enum_1.Gender !== 'undefined' &&
              user_enum_1.Gender) === 'function'
              ? _a
              : Object,
          ),
        ],
        User.prototype,
        'gender',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '手机号' }),
          (0, typegoose_1.prop)({ trim: true, type: String, unique: true }),
          __metadata('design:type', String),
        ],
        User.prototype,
        'phone',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '登录次数' }),
          (0, typegoose_1.prop)({ default: 0 }),
          __metadata('design:type', Number),
        ],
        User.prototype,
        'loginCount',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '密码' }),
          (0, typegoose_1.prop)({
            required: true,
            select: false,
            trim: true,
            get(val) {
              return val;
            },
            set(val) {
              return val ? (0, bcryptjs_1.hashSync)(val) : val;
            },
          }),
          __metadata('design:type', String),
        ],
        User.prototype,
        'password',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '消费金额' }),
          (0, typegoose_1.prop)({ default: 0 }),
          __metadata('design:type', Number),
        ],
        User.prototype,
        'consumptionAmount',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '消费次数' }),
          (0, typegoose_1.prop)({ default: 0 }),
          __metadata('design:type', Number),
        ],
        User.prototype,
        'consumptionCount',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态' }),
          (0, typegoose_1.prop)({ default: true, type: Boolean }),
          __metadata('design:type', Boolean),
        ],
        User.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否在线' }),
          (0, typegoose_1.prop)({ type: Boolean, default: false }),
          __metadata('design:type', Boolean),
        ],
        User.prototype,
        'isOnline',
        void 0,
      );
      User = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
            options: {
              allowMixed: typegoose_1.Severity.ALLOW,
            },
          }),
        ],
        User,
      );
      exports.User = User;

      /***/
    },
    /* 36 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Gender = void 0;
      var Gender;
      (function (Gender) {
        Gender[(Gender['Boy'] = 1)] = 'Boy';
        Gender[(Gender['Girl'] = 2)] = 'Girl';
      })((Gender = exports.Gender || (exports.Gender = {})));

      /***/
    },
    /* 37 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ChatMessages = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      class PushProductType {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品标题' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        PushProductType.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品id' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        PushProductType.prototype,
        'id',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品封面图' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        PushProductType.prototype,
        'pic',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品价格' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        PushProductType.prototype,
        'price',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品库存' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        PushProductType.prototype,
        'inventory',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品销量' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        PushProductType.prototype,
        'sales',
        void 0,
      );
      let ChatMessages = class ChatMessages {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '发送人关联表' }),
          (0, typegoose_1.prop)({
            enum: ['User', 'CustomerService'],
            required: true,
          }),
          __metadata('design:type', String),
        ],
        ChatMessages.prototype,
        'userRef',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '接受人关联表' }),
          (0, typegoose_1.prop)({
            enum: ['User', 'CustomerService'],
            required: true,
          }),
          __metadata('design:type', String),
        ],
        ChatMessages.prototype,
        'targetRef',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '发送人id' }),
          (0, typegoose_1.prop)({ required: true, refPath: 'userRef' }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        ChatMessages.prototype,
        'user',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '接收人id' }),
          (0, typegoose_1.prop)({ required: true, refPath: 'targetRef' }),
          __metadata(
            'design:type',
            typeof (_b =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        ChatMessages.prototype,
        'target',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否已读' }),
          (0, typegoose_1.prop)({ type: Boolean, default: false }),
          __metadata('design:type', Boolean),
        ],
        ChatMessages.prototype,
        'isRead',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '信息内容' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        ChatMessages.prototype,
        'content',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否为游客' }),
          (0, typegoose_1.prop)({ type: Boolean, default: false }),
          __metadata('design:type', Boolean),
        ],
        ChatMessages.prototype,
        'isTourist',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '信息类型',
            description: '1: 文本，2: 表情，3: 图片, 4: 语音，5：商品推送',
          }),
          (0, typegoose_1.prop)({ text: Number, default: 1 }),
          __metadata('design:type', Number),
        ],
        ChatMessages.prototype,
        'messageType',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '推送商品信息' }),
          (0, typegoose_1.prop)({ type: PushProductType }),
          __metadata('design:type', PushProductType),
        ],
        ChatMessages.prototype,
        'product',
        void 0,
      );
      ChatMessages = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        ChatMessages,
      );
      exports.ChatMessages = ChatMessages;

      /***/
    },
    /* 38 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassifyNavigation = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      let ClassifyNavigation = class ClassifyNavigation {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '导航名称' }),
          (0, typegoose_1.prop)({ required: true, trim: true }),
          __metadata('design:type', String),
        ],
        ClassifyNavigation.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '导航图片' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        ClassifyNavigation.prototype,
        'pic',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '导航图片' }),
          (0, typegoose_1.prop)({ required: true, default: 1 }),
          __metadata('design:type', Number),
        ],
        ClassifyNavigation.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '页面路径' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        ClassifyNavigation.prototype,
        'pagePath',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '网页url' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        ClassifyNavigation.prototype,
        'url',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态' }),
          (0, typegoose_1.prop)({ default: true }),
          __metadata('design:type', Boolean),
        ],
        ClassifyNavigation.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '排序' }),
          (0, typegoose_1.prop)({ type: Number, default: 1 }),
          __metadata('design:type', Number),
        ],
        ClassifyNavigation.prototype,
        'sort',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '备注' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        ClassifyNavigation.prototype,
        'remark',
        void 0,
      );
      ClassifyNavigation = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        ClassifyNavigation,
      );
      exports.ClassifyNavigation = ClassifyNavigation;

      /***/
    },
    /* 39 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var LibraryCategory_1, _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.LibraryCategory = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      let LibraryCategory = (LibraryCategory_1 = class LibraryCategory {});
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        LibraryCategory.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '上级分类' }),
          (0, typegoose_1.prop)({
            ref: () => LibraryCategory_1,
            default: null,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        LibraryCategory.prototype,
        'parentId',
        void 0,
      );
      LibraryCategory = LibraryCategory_1 = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        LibraryCategory,
      );
      exports.LibraryCategory = LibraryCategory;

      /***/
    },
    /* 40 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MediaLibrary = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const library_category_model_1 = __webpack_require__(39);
      let MediaLibrary = class MediaLibrary {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        MediaLibrary.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件分类' }),
          (0, typegoose_1.prop)({
            ref: () => library_category_model_1.LibraryCategory,
            default: null,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        MediaLibrary.prototype,
        'categoryId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件地址' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        MediaLibrary.prototype,
        'url',
        void 0,
      );
      MediaLibrary = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        MediaLibrary,
      );
      exports.MediaLibrary = MediaLibrary;

      /***/
    },
    /* 41 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.News = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const tag_model_1 = __webpack_require__(32);
      let News = class News {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文章标题' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        News.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文章标签' }),
          (0, typegoose_1.prop)({ required: true, ref: () => tag_model_1.Tag }),
          __metadata('design:type', Array),
        ],
        News.prototype,
        'tags',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文章内容' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        News.prototype,
        'content',
        void 0,
      );
      News = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        News,
      );
      exports.News = News;

      /***/
    },
    /* 42 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Order = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const orderStatus_enum_1 = __webpack_require__(43);
      const product_model_1 = __webpack_require__(29);
      const user_address_model_1 = __webpack_require__(44);
      const user_model_1 = __webpack_require__(35);
      class BuyProduct {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品id' }),
          (0, typegoose_1.prop)({ ref: () => product_model_1.Product }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        BuyProduct.prototype,
        'productId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品选购数量' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        BuyProduct.prototype,
        'num',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品价格' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Number),
        ],
        BuyProduct.prototype,
        'price',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品规格名' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        BuyProduct.prototype,
        'skuName',
        void 0,
      );
      let Order = class Order {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '订单编号',
            default:
              String(new Date().getFullYear) + String(new Date().getTime()),
          }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        Order.prototype,
        'orderNo',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '订单选购商品集合' }),
          (0, typegoose_1.prop)({ type: [BuyProduct] }),
          __metadata(
            'design:type',
            typeof (_b = typeof Array !== 'undefined' && Array) === 'function'
              ? _b
              : Object,
          ),
        ],
        Order.prototype,
        'products',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '下单人' }),
          (0, typegoose_1.prop)({ ref: () => user_model_1.User }),
          __metadata(
            'design:type',
            typeof (_c =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _c
              : Object,
          ),
        ],
        Order.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '订单总额' }),
          (0, typegoose_1.prop)({ type: Number }),
          __metadata('design:type', Number),
        ],
        Order.prototype,
        'totalPrice',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '实际付款' }),
          (0, typegoose_1.prop)({ type: Number }),
          __metadata('design:type', Number),
        ],
        Order.prototype,
        'payment',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '支付状态' }),
          (0, typegoose_1.prop)({
            type: Number,
            default: orderStatus_enum_1.OrderStatus.PENDING_PAY,
            enum: orderStatus_enum_1.OrderStatus,
          }),
          __metadata(
            'design:type',
            typeof (_d =
              typeof orderStatus_enum_1.OrderStatus !== 'undefined' &&
              orderStatus_enum_1.OrderStatus) === 'function'
              ? _d
              : Object,
          ),
        ],
        Order.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '订单类型' }),
          (0, typegoose_1.prop)({ type: Number, default: 1 }),
          __metadata('design:type', Number),
        ],
        Order.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '支付方式' }),
          (0, typegoose_1.prop)({ type: Number, default: 0 }),
          __metadata('design:type', Number),
        ],
        Order.prototype,
        'paymentType',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '支付编号' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        Order.prototype,
        'payNumber',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '订单收货人地址' }),
          (0, typegoose_1.prop)({
            ref: () => user_address_model_1.UserAddress,
          }),
          __metadata(
            'design:type',
            typeof (_e =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _e
              : Object,
          ),
        ],
        Order.prototype,
        'addressId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '支付时间' }),
          (0, typegoose_1.prop)({ type: Date }),
          __metadata(
            'design:type',
            typeof (_f = typeof Date !== 'undefined' && Date) === 'function'
              ? _f
              : Object,
          ),
        ],
        Order.prototype,
        'payTime',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '发货时间' }),
          (0, typegoose_1.prop)({ type: Date }),
          __metadata(
            'design:type',
            typeof (_g = typeof Date !== 'undefined' && Date) === 'function'
              ? _g
              : Object,
          ),
        ],
        Order.prototype,
        'sendTime',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '收货时间' }),
          (0, typegoose_1.prop)({ type: Date }),
          __metadata(
            'design:type',
            typeof (_h = typeof Date !== 'undefined' && Date) === 'function'
              ? _h
              : Object,
          ),
        ],
        Order.prototype,
        'receivedTime',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '评价时间' }),
          (0, typegoose_1.prop)({ type: Date }),
          __metadata(
            'design:type',
            typeof (_j = typeof Date !== 'undefined' && Date) === 'function'
              ? _j
              : Object,
          ),
        ],
        Order.prototype,
        'evaluateTime',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '完成时间' }),
          (0, typegoose_1.prop)({ type: Date }),
          __metadata(
            'design:type',
            typeof (_k = typeof Date !== 'undefined' && Date) === 'function'
              ? _k
              : Object,
          ),
        ],
        Order.prototype,
        'finishTime',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '订单来源' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        Order.prototype,
        'source',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '备注' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        Order.prototype,
        'remark',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否已经删除' }),
          (0, typegoose_1.prop)({ type: Boolean, default: false }),
          __metadata('design:type', Boolean),
        ],
        Order.prototype,
        'isDelete',
        void 0,
      );
      Order = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        Order,
      );
      exports.Order = Order;

      /***/
    },
    /* 43 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.OrderStatus = void 0;
      var OrderStatus;
      (function (OrderStatus) {
        OrderStatus[(OrderStatus['PENDING_PAY'] = 1)] = 'PENDING_PAY';
        OrderStatus[(OrderStatus['PENDING_DELIVER'] = 2)] = 'PENDING_DELIVER';
        OrderStatus[(OrderStatus['PENDING_TAKE'] = 3)] = 'PENDING_TAKE';
        OrderStatus[(OrderStatus['PENDING_COMMENT'] = 4)] = 'PENDING_COMMENT';
        OrderStatus[(OrderStatus['REFUND'] = 5)] = 'REFUND';
        OrderStatus[(OrderStatus['FINISH'] = 6)] = 'FINISH';
      })((OrderStatus = exports.OrderStatus || (exports.OrderStatus = {})));

      /***/
    },
    /* 44 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserAddress = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const user_model_1 = __webpack_require__(35);
      let UserAddress = class UserAddress {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '收货名字' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        UserAddress.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '收货人手机号' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        UserAddress.prototype,
        'phone',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '收货人地址' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        UserAddress.prototype,
        'address',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '详细地址' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        UserAddress.prototype,
        'detail',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '备注' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        UserAddress.prototype,
        'remark',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否为默认' }),
          (0, typegoose_1.prop)({ default: false }),
          __metadata('design:type', Boolean),
        ],
        UserAddress.prototype,
        'isDefault',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '关联用户id' }),
          (0, typegoose_1.prop)({ ref: () => user_model_1.User }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        UserAddress.prototype,
        'userId',
        void 0,
      );
      UserAddress = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        UserAddress,
      );
      exports.UserAddress = UserAddress;

      /***/
    },
    /* 45 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductComment = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const product_model_1 = __webpack_require__(29);
      const user_model_1 = __webpack_require__(35);
      let ProductComment = class ProductComment {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户ID' }),
          (0, typegoose_1.prop)({ ref: () => user_model_1.User }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        ProductComment.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品ID' }),
          (0, typegoose_1.prop)({ ref: () => product_model_1.Product }),
          __metadata(
            'design:type',
            typeof (_b =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        ProductComment.prototype,
        'productId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '评分星级' }),
          (0, typegoose_1.prop)({ type: Number, default: 0 }),
          __metadata('design:type', Number),
        ],
        ProductComment.prototype,
        'rate',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '内容' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        ProductComment.prototype,
        'content',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '评论商品图片' }),
          (0, typegoose_1.prop)({ type: [String] }),
          __metadata(
            'design:type',
            typeof (_c = typeof Array !== 'undefined' && Array) === 'function'
              ? _c
              : Object,
          ),
        ],
        ProductComment.prototype,
        'images',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '回复内容' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        ProductComment.prototype,
        'replyContent',
        void 0,
      );
      ProductComment = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        ProductComment,
      );
      exports.ProductComment = ProductComment;

      /***/
    },
    /* 46 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductParam = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      class ParamTpye {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '参数名' }),
          __metadata('design:type', String),
        ],
        ParamTpye.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '参数值' }),
          __metadata('design:type', String),
        ],
        ParamTpye.prototype,
        'value',
        void 0,
      );
      let ProductParam = class ProductParam {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '参数模板名称' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        ProductParam.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '参数模板名称' }),
          (0, typegoose_1.prop)({ required: true, type: [ParamTpye] }),
          __metadata('design:type', Array),
        ],
        ProductParam.prototype,
        'params',
        void 0,
      );
      ProductParam = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        ProductParam,
      );
      exports.ProductParam = ProductParam;

      /***/
    },
    /* 47 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductSkuAttr = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const product_model_1 = __webpack_require__(29);
      let ProductSkuAttr = class ProductSkuAttr {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '属性名称' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        ProductSkuAttr.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品id' }),
          (0, typegoose_1.prop)({
            ref: () => product_model_1.Product,
            default: null,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        ProductSkuAttr.prototype,
        'productId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '属性值' }),
          (0, typegoose_1.prop)({ type: [String] }),
          __metadata('design:type', Array),
        ],
        ProductSkuAttr.prototype,
        'values',
        void 0,
      );
      ProductSkuAttr = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        ProductSkuAttr,
      );
      exports.ProductSkuAttr = ProductSkuAttr;

      /***/
    },
    /* 48 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductSku = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const product_model_1 = __webpack_require__(29);
      let ProductSku = class ProductSku {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品id' }),
          (0, typegoose_1.prop)({
            ref: () => product_model_1.Product,
            required: true,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        ProductSku.prototype,
        'productId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格商品图片' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        ProductSku.prototype,
        'image',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格商品库存' }),
          (0, typegoose_1.prop)({ required: true, type: Number }),
          __metadata('design:type', Number),
        ],
        ProductSku.prototype,
        'inventory',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格商品原价' }),
          (0, typegoose_1.prop)({ required: true, type: Number }),
          __metadata('design:type', Number),
        ],
        ProductSku.prototype,
        'costPrice',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格商品价格' }),
          (0, typegoose_1.prop)({ required: true, type: Number }),
          __metadata('design:type', Number),
        ],
        ProductSku.prototype,
        'price',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)(),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', Object),
        ],
        ProductSku.prototype,
        'weight',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '货号' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Object),
        ],
        ProductSku.prototype,
        'artNo',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格属性值集' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', Array),
        ],
        ProductSku.prototype,
        'skuNames',
        void 0,
      );
      ProductSku = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
            options: {
              allowMixed: typegoose_1.Severity.ALLOW,
            },
          }),
        ],
        ProductSku,
      );
      exports.ProductSku = ProductSku;

      /***/
    },
    /* 49 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductTopic = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const category_model_1 = __webpack_require__(31);
      let ProductTopic = class ProductTopic {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品专题标题' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        ProductTopic.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品专题大标题' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        ProductTopic.prototype,
        'bigTitle',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品专题描述' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        ProductTopic.prototype,
        'description',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品专题图片' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        ProductTopic.prototype,
        'pic',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品分类id' }),
          (0, typegoose_1.prop)({
            ref: () => category_model_1.Category,
            required: true,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        ProductTopic.prototype,
        'category',
        void 0,
      );
      ProductTopic = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        ProductTopic,
      );
      exports.ProductTopic = ProductTopic;

      /***/
    },
    /* 50 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductUnit = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      let ProductUnit = class ProductUnit {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品单位名称' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        ProductUnit.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品单位名称' }),
          (0, typegoose_1.prop)({ default: 1 }),
          __metadata('design:type', Number),
        ],
        ProductUnit.prototype,
        'sort',
        void 0,
      );
      ProductUnit = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        ProductUnit,
      );
      exports.ProductUnit = ProductUnit;

      /***/
    },
    /* 51 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.SiteSettings = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const fileStorageMode_enum_1 = __webpack_require__(52);
      class AliOss {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'region' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        AliOss.prototype,
        'region',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'accessKeyId' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        AliOss.prototype,
        'accessKeyId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'accessKeySecret' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        AliOss.prototype,
        'accessKeySecret',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'bucket' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        AliOss.prototype,
        'bucket',
        void 0,
      );
      let FileStorage = class FileStorage {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '文件存储模式',
            enum: fileStorageMode_enum_1.FileStorageModeEnum,
            default: fileStorageMode_enum_1.FileStorageModeEnum.LOCAL,
          }),
          (0, typegoose_1.prop)(),
          __metadata(
            'design:type',
            typeof (_a =
              typeof fileStorageMode_enum_1.FileStorageModeEnum !==
                'undefined' && fileStorageMode_enum_1.FileStorageModeEnum) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        FileStorage.prototype,
        'mode',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '阿里云oss' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', AliOss),
        ],
        FileStorage.prototype,
        'aliOss',
        void 0,
      );
      FileStorage = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
            options: {
              allowMixed: typegoose_1.Severity.ALLOW,
            },
          }),
        ],
        FileStorage,
      );
      class SiteSettings {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件存储' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', FileStorage),
        ],
        SiteSettings.prototype,
        'fileStorage',
        void 0,
      );
      exports.SiteSettings = SiteSettings;

      /***/
    },
    /* 52 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.FileStorageModeEnum = void 0;
      var FileStorageModeEnum;
      (function (FileStorageModeEnum) {
        FileStorageModeEnum[(FileStorageModeEnum['LOCAL'] = 1)] = 'LOCAL';
        FileStorageModeEnum[(FileStorageModeEnum['ALIOSS'] = 2)] = 'ALIOSS';
        FileStorageModeEnum[(FileStorageModeEnum['QINIUOSS'] = 3)] = 'QINIUOSS';
      })(
        (FileStorageModeEnum =
          exports.FileStorageModeEnum || (exports.FileStorageModeEnum = {})),
      );

      /***/
    },
    /* 53 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserCart = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const product_model_1 = __webpack_require__(29);
      const user_model_1 = __webpack_require__(35);
      let UserCart = class UserCart {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id' }),
          (0, typegoose_1.prop)({ ref: () => user_model_1.User }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        UserCart.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品id' }),
          (0, typegoose_1.prop)({ ref: () => product_model_1.Product }),
          __metadata(
            'design:type',
            typeof (_b =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        UserCart.prototype,
        'productId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品名称' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        UserCart.prototype,
        'productName',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品封面图' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        UserCart.prototype,
        'productPic',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '选购数量' }),
          (0, typegoose_1.prop)({ type: Number }),
          __metadata('design:type', Number),
        ],
        UserCart.prototype,
        'num',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '选购规格名称' }),
          (0, typegoose_1.prop)({ type: String }),
          __metadata('design:type', String),
        ],
        UserCart.prototype,
        'skuName',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '选购规格价格' }),
          (0, typegoose_1.prop)({ type: Number }),
          __metadata('design:type', Number),
        ],
        UserCart.prototype,
        'price',
        void 0,
      );
      UserCart = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        UserCart,
      );
      exports.UserCart = UserCart;

      /***/
    },
    /* 54 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserCollection = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const product_model_1 = __webpack_require__(29);
      const user_model_1 = __webpack_require__(35);
      let UserCollection = class UserCollection {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id' }),
          (0, typegoose_1.prop)({
            ref: () => user_model_1.User,
            required: true,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        UserCollection.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品id' }),
          (0, typegoose_1.prop)({
            ref: () => product_model_1.Product,
            required: true,
          }),
          __metadata(
            'design:type',
            typeof (_b =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        UserCollection.prototype,
        'productId',
        void 0,
      );
      UserCollection = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        UserCollection,
      );
      exports.UserCollection = UserCollection;

      /***/
    },
    /* 55 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserViewsHistory = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(23);
      const product_model_1 = __webpack_require__(29);
      const user_model_1 = __webpack_require__(35);
      let UserViewsHistory = class UserViewsHistory {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id' }),
          (0, typegoose_1.prop)({
            ref: () => user_model_1.User,
            required: true,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        UserViewsHistory.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品id' }),
          (0, typegoose_1.prop)({
            ref: () => product_model_1.Product,
            required: true,
          }),
          __metadata(
            'design:type',
            typeof (_b =
              typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        UserViewsHistory.prototype,
        'productId',
        void 0,
      );
      UserViewsHistory = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        UserViewsHistory,
      );
      exports.UserViewsHistory = UserViewsHistory;

      /***/
    },
    /* 56 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CommonService = void 0;
      const common_1 = __webpack_require__(7);
      let CommonService = class CommonService {};
      CommonService = __decorate([(0, common_1.Injectable)()], CommonService);
      exports.CommonService = CommonService;

      /***/
    },
    /* 57 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e, _f, _g, _h;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AppController = void 0;
      const common_1 = __webpack_require__(7);
      const passport_1 = __webpack_require__(58);
      const platform_express_1 = __webpack_require__(59);
      const swagger_1 = __webpack_require__(2);
      const ResponseResultModel_1 = __webpack_require__(11);
      const tnwx_1 = __webpack_require__(60);
      const app_service_1 = __webpack_require__(61);
      const handMsgAdapter_1 = __webpack_require__(65);
      const express_1 = __webpack_require__(66);
      const getRawBody = __webpack_require__(67);
      class FileUploadDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
          __metadata('design:type', Object),
        ],
        FileUploadDto.prototype,
        'file',
        void 0,
      );
      let AppController = class AppController {
        constructor(appService) {
          this.appService = appService;
          this.msgAdapter = new handMsgAdapter_1.HandMsgAdapter();
          const devApiConfig = new tnwx_1.ApiConfig(
            'wxb1bcb0988520b14a',
            '980af11444c025acf3aabf81f8f20371',
            'xuanyutest',
            false,
            'Zw9VFJ2DtojjkuXlSheo9Qv3bGPLK9GrpcKNC3WTuM7',
          );
          tnwx_1.ApiConfigKit.putApiConfig(devApiConfig);
        }
        getHello() {
          return this.appService.getHello();
        }
        async upload(file, req) {
          const domain = `${req.protocol}://${req.headers.host}`;
          const res = await this.appService.upload(file, domain);
          return (0, ResponseResultModel_1.apiSucceed)(
            res === null || res === void 0 ? void 0 : res.url,
          );
        }
        uploadFile(file) {
          console.log(file);
          return file;
        }
        getMsg(request) {
          const signature = request.query.signature.toString(),
            timestamp = request.query.timestamp.toString(),
            nonce = request.query.nonce.toString(),
            echostr = request.query.echostr.toString();
          console.log(signature, 777);
          return tnwx_1.WeChat.checkSignature(
            signature,
            timestamp,
            nonce,
            echostr,
          );
        }
        async PostMsg(res, request) {
          const buffer = await getRawBody(request);
          const msgXml = buffer.toString('utf-8');
          const data = await tnwx_1.WeChat.handleMsg(this.msgAdapter, msgXml);
          res.status(common_1.HttpStatus.OK).send(data);
        }
        async weixinAuth(request) {
          console.log(request);
          console.log('回调成功');
        }
      };
      __decorate(
        [
          (0, common_1.Get)(),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', []),
          __metadata('design:returntype', String),
        ],
        AppController.prototype,
        'getHello',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('upload'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, swagger_1.ApiOperation)({ summary: '管理端--文件上传' }),
          (0, common_1.UseInterceptors)(
            (0, platform_express_1.FileInterceptor)('file'),
          ),
          (0, swagger_1.ApiConsumes)('multipart/form-data'),
          (0, swagger_1.ApiBody)({
            description: '文件上传',
            type: FileUploadDto,
          }),
          __param(0, (0, common_1.UploadedFile)('file')),
          __param(1, (0, common_1.Req)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [Object, Object]),
          __metadata(
            'design:returntype',
            typeof (_a = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        AppController.prototype,
        'upload',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('uploadTest'),
          (0, swagger_1.ApiBody)({
            description: '文件上传',
            type: FileUploadDto,
          }),
          (0, common_1.UseInterceptors)(
            (0, platform_express_1.FileInterceptor)('file'),
          ),
          (0, swagger_1.ApiOperation)({ summary: '文件上传测试' }),
          (0, swagger_1.ApiConsumes)('multipart/form-data'),
          __param(0, (0, common_1.UploadedFile)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof Express !== 'undefined' &&
              (_b = Express.Multer) !== void 0 &&
              _b.File) === 'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', void 0),
        ],
        AppController.prototype,
        'uploadFile',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('weixin'),
          (0, swagger_1.ApiOperation)({ summary: '微信公众号接口' }),
          __param(0, (0, common_1.Req)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof express_1.Request !== 'undefined' && express_1.Request) ===
            'function'
              ? _d
              : Object,
          ]),
          __metadata('design:returntype', void 0),
        ],
        AppController.prototype,
        'getMsg',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('weixin'),
          (0, swagger_1.ApiOperation)({ summary: '微信公众号接受' }),
          __param(0, (0, common_1.Res)({ passthrough: true })),
          __param(1, (0, common_1.Req)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_e =
              typeof express_1.Response !== 'undefined' &&
              express_1.Response) === 'function'
              ? _e
              : Object,
            typeof (_f =
              typeof express_1.Request !== 'undefined' && express_1.Request) ===
            'function'
              ? _f
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        AppController.prototype,
        'PostMsg',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('weixin/auth'),
          (0, swagger_1.ApiOperation)({ summary: '微信公众号登录授权回调' }),
          __param(0, (0, common_1.Req)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_g =
              typeof express_1.Request !== 'undefined' && express_1.Request) ===
            'function'
              ? _g
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        AppController.prototype,
        'weixinAuth',
        null,
      );
      AppController = __decorate(
        [
          (0, swagger_1.ApiTags)('首页'),
          (0, common_1.Controller)(),
          __metadata('design:paramtypes', [
            typeof (_h =
              typeof app_service_1.AppService !== 'undefined' &&
              app_service_1.AppService) === 'function'
              ? _h
              : Object,
          ]),
        ],
        AppController,
      );
      exports.AppController = AppController;

      /***/
    },
    /* 58 */
    /***/ (module) => {
      module.exports = require('@nestjs/passport');

      /***/
    },
    /* 59 */
    /***/ (module) => {
      module.exports = require('@nestjs/platform-express');

      /***/
    },
    /* 60 */
    /***/ (module) => {
      module.exports = require('tnwx');

      /***/
    },
    /* 61 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AppService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const OSS = __webpack_require__(62);
      const fs = __webpack_require__(63);
      const has_1 = __webpack_require__(64);
      const site_setting_model_1 = __webpack_require__(51);
      const nestjs_typegoose_1 = __webpack_require__(20);
      const path_1 = __webpack_require__(12);
      let AppService = class AppService {
        constructor(settingModel) {
          this.settingModel = settingModel;
        }
        getHello() {
          return 'hello xuanyu';
        }
        async upload(file, domain) {
          try {
            const settingRes = await this.settingModel.find();
            this.fileStorageInfo = settingRes[0].fileStorage;
            if (this.fileStorageInfo.mode == 2) {
              this.aliOssClient = new OSS({
                region: this.fileStorageInfo.aliOss.region,
                accessKeyId: this.fileStorageInfo.aliOss.accessKeyId,
                accessKeySecret: this.fileStorageInfo.aliOss.accessKeySecret,
                bucket: this.fileStorageInfo.aliOss.bucket,
              });
              this.aliOssClient.useBucket(this.fileStorageInfo.aliOss.bucket);
            }
            let data;
            switch (~~this.fileStorageInfo.mode) {
              case 1:
                const stat = await (0, has_1.dirIsExist)('uploads-images');
                if (!stat) {
                  await (0, has_1.createMkdir)('uploads-images');
                }
                const writeImage = fs.createWriteStream(
                  (0, path_1.join)(
                    __dirname,
                    './uploads-images',
                    `${file.originalname}`,
                  ),
                );
                writeImage.write(file.buffer);
                data = {
                  url: `${domain}/uploads-images/${file.originalname}`,
                };
                break;
              case 2:
                data = await this.aliOssClient.put(
                  `/images/${file.originalname}`,
                  file.buffer,
                );
                break;
              default:
                break;
            }
            return data;
          } catch (err) {
            console.log(err, 4444);
            common_1.Logger.log(err, '上传错误');
          }
        }
      };
      AppService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              site_setting_model_1.SiteSettings,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        AppService,
      );
      exports.AppService = AppService;

      /***/
    },
    /* 62 */
    /***/ (module) => {
      module.exports = require('ali-oss');

      /***/
    },
    /* 63 */
    /***/ (module) => {
      module.exports = require('fs');

      /***/
    },
    /* 64 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.createMkdir = exports.dirIsExist = void 0;
      const fs = __webpack_require__(63);
      const path_1 = __webpack_require__(12);
      function dirIsExist(dirName) {
        return new Promise((resolve) => {
          fs.stat((0, path_1.join)(__dirname, dirName), (err, stats) => {
            if (err) {
              resolve(false);
            } else {
              resolve(stats);
            }
          });
        });
      }
      exports.dirIsExist = dirIsExist;
      function createMkdir(dirName) {
        return new Promise((resolve) => {
          fs.mkdir((0, path_1.join)(__dirname, dirName), (err) => {
            if (err) {
              resolve(false);
            } else {
              resolve(true);
            }
          });
        });
      }
      exports.createMkdir = createMkdir;

      /***/
    },
    /* 65 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.HandMsgAdapter = void 0;
      const tnwx_1 = __webpack_require__(60);
      class HandMsgAdapter {
        async processInWxVerifyDispatchEvent(inWxVerifyDispatchEvent) {
          console.log(inWxVerifyDispatchEvent);
          throw new Error('Method not implemented.');
        }
        async processInTextMsg(inTextMsg) {
          let outMsg;
          let content =
            'IJPay 让支付触手可及 \n\nhttps://gitee.com/javen205/IJPay';
          if ('1' === inTextMsg.getContent) {
            content = '轩钰博客 \n\nhttps://www.zhouxuanyu.com';
            outMsg = new tnwx_1.OutTextMsg(inTextMsg);
            outMsg.setContent(content);
          } else if ('2' === inTextMsg.getContent) {
            return this.renderOutTextMsg(inTextMsg, '');
          } else if ('3' === inTextMsg.getContent) {
            if (
              tnwx_1.ApiConfigKit.getApiConfig.getAppId == 'wx614c453e0d1dcd12'
            ) {
              content =
                '极速开发微信公众号 \n\nhttps://github.com/javen205/weixin_guide';
              outMsg = new tnwx_1.OutTextMsg(inTextMsg);
              outMsg.setContent(content);
            } else {
              content =
                '极速开发微信公众号 \n\nhttps://github.com/javen205/TNWX';
              outMsg = new tnwx_1.OutTextMsg(inTextMsg);
              outMsg.setContent(content);
            }
          } else if ('4' === inTextMsg.getContent) {
            outMsg = new tnwx_1.OutNewsMsg(inTextMsg);
            outMsg.addArticle(
              '聚合支付了解下',
              'IJPay 让支付触手可及',
              'https://gitee.com/javen205/IJPay/raw/master/assets/img/IJPay-t.png',
              'https://gitee.com/javen205/IJPay',
            );
          } else {
            outMsg = new tnwx_1.OutTextMsg(inTextMsg);
            outMsg.setContent(inTextMsg.getContent);
          }
          return outMsg;
        }
        async processInImageMsg(inImageMsg) {
          const outMsg = new tnwx_1.OutImageMsg(inImageMsg);
          outMsg.setMediaId = inImageMsg.getMediaId;
          return outMsg;
        }
        async processInVoiceMsg(inVoiceMsg) {
          const outMsg = new tnwx_1.OutVoiceMsg(inVoiceMsg);
          outMsg.setMediaId = inVoiceMsg.getMediaId;
          return outMsg;
        }
        async processInVideoMsg(inVideoMsg) {
          const outMsg = new tnwx_1.OutVideoMsg(inVideoMsg);
          outMsg.setMediaId = inVideoMsg.getMediaId;
          outMsg.setDescription = 'IJPay 让支付触手可及';
          outMsg.setTitle = '视频消息';
          return outMsg;
        }
        async processInShortVideoMsg(inShortVideoMsg) {
          const outMsg = new tnwx_1.OutVideoMsg(inShortVideoMsg);
          outMsg.setMediaId = inShortVideoMsg.getMediaId;
          outMsg.setDescription = 'TypeScript + Node.js 开发微信公众号';
          outMsg.setTitle = '短视频消息';
          return outMsg;
        }
        async processInLocationMsg(inLocationMsg) {
          return this.renderOutTextMsg(
            inLocationMsg,
            '位置消息... \n\nX:' +
              inLocationMsg.getLocation_X +
              ' Y:' +
              inLocationMsg.getLocation_Y +
              '\n\n' +
              inLocationMsg.getLabel,
          );
        }
        async processInLinkMsg(inLinkMsg) {
          const text = new tnwx_1.OutTextMsg(inLinkMsg);
          text.setContent('链接频消息...' + inLinkMsg.getUrl);
          return text;
        }
        async processInSpeechRecognitionResults(inSpeechRecognitionResults) {
          const text = new tnwx_1.OutTextMsg(inSpeechRecognitionResults);
          text.setContent(
            '语音识别消息...' + inSpeechRecognitionResults.getRecognition,
          );
          return text;
        }
        async processInFollowEvent(inFollowEvent) {
          if (
            tnwx_1.InFollowEvent.EVENT_INFOLLOW_SUBSCRIBE ==
            inFollowEvent.getEvent
          ) {
            console.log(inFollowEvent, '关注信息');
            return this.renderOutTextMsg(
              inFollowEvent,
              '感谢你的关注 么么哒 \n\nQQ：969718197',
            );
          } else if (
            tnwx_1.InFollowEvent.EVENT_INFOLLOW_UNSUBSCRIBE ==
            inFollowEvent.getEvent
          ) {
            console.error('取消关注：' + inFollowEvent.getFromUserName);
            return this.renderOutTextMsg(inFollowEvent);
          } else {
            return this.renderOutTextMsg(inFollowEvent);
          }
        }
        async processInQrCodeEvent(inQrCodeEvent) {
          if (
            tnwx_1.InQrCodeEvent.EVENT_INQRCODE_SUBSCRIBE ==
            inQrCodeEvent.getEvent
          ) {
            console.debug('扫码未关注：' + inQrCodeEvent.getFromUserName);
            return this.renderOutTextMsg(
              inQrCodeEvent,
              '感谢您的关注，二维码内容：' + inQrCodeEvent.getEventKey,
            );
          } else if (
            tnwx_1.InQrCodeEvent.EVENT_INQRCODE_SCAN == inQrCodeEvent.getEvent
          ) {
            console.debug('扫码已关注：' + inQrCodeEvent.getFromUserName);
            return this.renderOutTextMsg(inQrCodeEvent);
          } else {
            return this.renderOutTextMsg(inQrCodeEvent);
          }
        }
        async processInLocationEvent(inLocationEvent) {
          console.debug('发送地理位置事件：' + inLocationEvent.getFromUserName);
          return this.renderOutTextMsg(
            inLocationEvent,
            '地理位置是：' + inLocationEvent.getLatitude,
          );
        }
        async processInMenuEvent(inMenuEvent) {
          console.debug('菜单事件：' + inMenuEvent.getFromUserName);
          return this.renderOutTextMsg(
            inMenuEvent,
            '菜单事件内容是：' + inMenuEvent.getEventKey,
          );
        }
        async processInTemplateMsgEvent(inTemplateMsgEvent) {
          console.debug(
            '模板消息事件：' +
              inTemplateMsgEvent.getFromUserName +
              ' ' +
              inTemplateMsgEvent.getStatus,
          );
          return this.renderOutTextMsg(
            inTemplateMsgEvent,
            '消息发送状态：' + inTemplateMsgEvent.getStatus,
          );
        }
        async processInShakearoundUserShakeEvent(inShakearoundUserShakeEvent) {
          console.debug(
            '摇一摇事件：' +
              inShakearoundUserShakeEvent.getFromUserName +
              ' ' +
              inShakearoundUserShakeEvent.getUuid,
          );
          return this.renderOutTextMsg(
            inShakearoundUserShakeEvent,
            'uuid：' + inShakearoundUserShakeEvent.getUuid,
          );
        }
        async processInEnterAgentEvent(inEnterAgentEvent) {
          console.log('进入应用事件');
          return this.renderOutTextMsg(
            inEnterAgentEvent,
            inEnterAgentEvent.getFromUserName +
              ' 进入应用 ' +
              inEnterAgentEvent.getAgentId,
          );
        }
        async processInTaskEvent(inTaskEvent) {
          console.log('进入应用事件:');
          console.log(inTaskEvent);
          return this.renderOutTextMsg(
            inTaskEvent,
            inTaskEvent.getAgentId +
              ' key: ' +
              inTaskEvent.getEventKey +
              ' taskId: ' +
              inTaskEvent.getTaskId,
          );
        }
        async processInBatchJobResultEvent(inBatchJobResultEvent) {
          console.log(inBatchJobResultEvent);
          return this.renderOutTextMsg(
            inBatchJobResultEvent,
            inBatchJobResultEvent.getJobId,
          );
        }
        async processInUpdateUserEvent(inUpdateUserEvent) {
          console.log(inUpdateUserEvent);
          return this.renderOutTextMsg(
            inUpdateUserEvent,
            inUpdateUserEvent.getUserId,
          );
        }
        async processInUpdatePartyEvent(inUpdatePartyEvent) {
          console.log(inUpdatePartyEvent);
          return this.renderOutTextMsg(
            inUpdatePartyEvent,
            inUpdatePartyEvent.getParentId,
          );
        }
        async processInUpdateTagEvent(inUpdateTagEvent) {
          console.log(inUpdateTagEvent);
          return this.renderOutTextMsg(
            inUpdateTagEvent,
            inUpdateTagEvent.getTagId + '',
          );
        }
        async processInSuiteTicket(inSuiteTicket) {
          console.log(`inSuiteTicket:${JSON.stringify(inSuiteTicket)}`);
          const config = tnwx_1.QyApiConfigKit.getApiConfig;
          config.setTicket = inSuiteTicket.suiteTicket;
          const appId = config.getAppId;
          const corpId = config.getCorpId;
          tnwx_1.QyApiConfigKit.removeApiConfig(appId, corpId);
          tnwx_1.QyApiConfigKit.putApiConfig(config);
          tnwx_1.QyApiConfigKit.setCurrentAppId(appId, corpId);
          return 'success';
        }
        async processInComponentVerifyTicket(inComponentVerifyTicket) {
          console.log(
            `inComponentVerifyTicket:${JSON.stringify(
              inComponentVerifyTicket,
            )}`,
          );
          const appId = inComponentVerifyTicket.appId;
          const config = tnwx_1.ApiConfigKit.getApiConfigByAppId(appId);
          config.setTicket = inComponentVerifyTicket.getTicket;
          tnwx_1.ApiConfigKit.removeApiConfig(appId);
          tnwx_1.ApiConfigKit.putApiConfig(config);
          tnwx_1.ApiConfigKit.setCurrentAppId(appId);
          return 'success';
        }
        async processInAuthEvent(inAuthEvent) {
          console.log(`inAuthEvent:${JSON.stringify(inAuthEvent)}`);
          return 'success';
        }
        async processInAuthMpEvent(inAuthMpEvent) {
          console.log(`InAuthMpEvent:${JSON.stringify(inAuthMpEvent)}`);
          return 'success';
        }
        async processInExternalContactEvent(inExternalContactEvent) {
          console.log(
            `inExternalContactEvent:${JSON.stringify(inExternalContactEvent)}`,
          );
          return 'success';
        }
        async processIsNotDefinedMsg(inNotDefinedMsg) {
          return this.renderOutTextMsg(inNotDefinedMsg, '未知消息');
        }
        async processInBatchJobResult(inBatchJobResult) {
          console.log(inBatchJobResult.jobId);
          return 'success';
        }
        async processInExternalContact(inExternalContact) {
          console.log(inExternalContact.authCorpId);
          return 'success';
        }
        async processInRegisterCorp(inRegisterCorp) {
          console.log(inRegisterCorp.authCorpId);
          return 'success';
        }
        processInMassEvent(inMassEvent) {
          console.log(inMassEvent);
          return this.renderOutTextMsg(inMassEvent, inMassEvent.getToUserName);
        }
        async renderOutTextMsg(inMsg, content) {
          const OutMsg = new tnwx_1.OutTextMsg(inMsg);
          OutMsg.setContent(content ? content : ' ');
          return OutMsg;
        }
      }
      exports.HandMsgAdapter = HandMsgAdapter;

      /***/
    },
    /* 66 */
    /***/ (module) => {
      module.exports = require('express');

      /***/
    },
    /* 67 */
    /***/ (module) => {
      module.exports = require('raw-body');

      /***/
    },
    /* 68 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AuthModule = void 0;
      const common_1 = __webpack_require__(7);
      const jwt_1 = __webpack_require__(69);
      const passport_1 = __webpack_require__(58);
      const jwt_config_1 = __webpack_require__(70);
      const admin_jwt_strategy_1 = __webpack_require__(71);
      const admin_local_strategy_1 = __webpack_require__(73);
      const auth_controller_1 = __webpack_require__(75);
      let AuthModule = class AuthModule {};
      AuthModule = __decorate(
        [
          (0, common_1.Module)({
            imports: [
              passport_1.PassportModule,
              jwt_1.JwtModule.register({
                secret: jwt_config_1.adminJwtConfig.secret,
                signOptions: {
                  expiresIn: jwt_config_1.adminJwtConfig.expiresIn,
                },
              }),
            ],
            controllers: [auth_controller_1.AuthController],
            providers: [
              admin_local_strategy_1.AdminLocalStrategy,
              admin_jwt_strategy_1.AdminJwtStrategy,
            ],
          }),
        ],
        AuthModule,
      );
      exports.AuthModule = AuthModule;

      /***/
    },
    /* 69 */
    /***/ (module) => {
      module.exports = require('@nestjs/jwt');

      /***/
    },
    /* 70 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.webJwtConfig = exports.adminJwtConfig = void 0;
      exports.adminJwtConfig = {
        secret: 'xuanyu',
        expiresIn: '1d',
      };
      exports.webJwtConfig = {
        secret: 'xuanyu',
        expiresIn: '1d',
      };

      /***/
    },
    /* 71 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AdminJwtStrategy = void 0;
      const passport_1 = __webpack_require__(58);
      const nestjs_typegoose_1 = __webpack_require__(20);
      const typegoose_1 = __webpack_require__(23);
      const admin_model_1 = __webpack_require__(22);
      const passport_jwt_1 = __webpack_require__(72);
      const jwt_config_1 = __webpack_require__(70);
      let AdminJwtStrategy = class AdminJwtStrategy extends (0,
      passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'admin-jwt') {
        constructor(adminModel) {
          super({
            jwtFromRequest:
              passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwt_config_1.adminJwtConfig.secret,
            ignoreExpiration: false,
          });
          this.adminModel = adminModel;
        }
        async validate(payload) {
          return await this.adminModel.findById(payload.id);
        }
      };
      AdminJwtStrategy = __decorate(
        [
          __param(0, (0, nestjs_typegoose_1.InjectModel)(admin_model_1.Admin)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        AdminJwtStrategy,
      );
      exports.AdminJwtStrategy = AdminJwtStrategy;

      /***/
    },
    /* 72 */
    /***/ (module) => {
      module.exports = require('passport-jwt');

      /***/
    },
    /* 73 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AdminLocalStrategy = void 0;
      const passport_local_1 = __webpack_require__(74);
      const passport_1 = __webpack_require__(58);
      const nestjs_typegoose_1 = __webpack_require__(20);
      const typegoose_1 = __webpack_require__(23);
      const bcryptjs_1 = __webpack_require__(24);
      const admin_model_1 = __webpack_require__(22);
      const ResponseResultModel_1 = __webpack_require__(11);
      let AdminLocalStrategy = class AdminLocalStrategy extends (0,
      passport_1.PassportStrategy)(passport_local_1.Strategy, 'admin-local') {
        constructor(adminModel) {
          super({
            usernameField: 'email',
            passwordField: 'password',
          });
          this.adminModel = adminModel;
        }
        async validate(email, password) {
          const adminInfo = await this.adminModel
            .findOne({ email })
            .select('+password');
          if (!adminInfo) {
            throw new ResponseResultModel_1.ApiFail(101, '用户名不正确');
          }
          if (!(0, bcryptjs_1.compareSync)(password, adminInfo.password)) {
            throw new ResponseResultModel_1.ApiFail(102, '密码不正确');
          }
          if (!adminInfo.status) {
            throw new ResponseResultModel_1.ApiFail(103, '用户已被禁用');
          }
          return adminInfo;
        }
      };
      AdminLocalStrategy = __decorate(
        [
          __param(0, (0, nestjs_typegoose_1.InjectModel)(admin_model_1.Admin)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        AdminLocalStrategy,
      );
      exports.AdminLocalStrategy = AdminLocalStrategy;

      /***/
    },
    /* 74 */
    /***/ (module) => {
      module.exports = require('passport-local');

      /***/
    },
    /* 75 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AuthController = void 0;
      const common_1 = __webpack_require__(7);
      const passport_1 = __webpack_require__(58);
      const jwt_1 = __webpack_require__(69);
      const swagger_1 = __webpack_require__(2);
      const adminl_login_dto_1 = __webpack_require__(76);
      const ResponseResultModel_1 = __webpack_require__(11);
      const admin_model_1 = __webpack_require__(22);
      const current_user_decorator_1 = __webpack_require__(77);
      let AuthController = class AuthController {
        constructor(jwtService) {
          this.jwtService = jwtService;
        }
        async adminLogin(dto, req) {
          const accessToken = this.jwtService.sign({
            email: req.user.email,
            id: String(req.user._id),
          });
          const data = {
            email: req.user.email,
            name: req.user.name,
            accessToken,
          };
          return (0, ResponseResultModel_1.apiSucceed)(data);
        }
        async currentLoginInfo(user) {
          const data = {
            name: user.name,
            avatar:
              'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            roles: ['super'],
            email: user.email,
          };
          return (0, ResponseResultModel_1.apiSucceed)(data);
        }
      };
      __decorate(
        [
          (0, swagger_1.ApiOperation)({ summary: '管理站--登录' }),
          (0, common_1.Post)('admin/login'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-local')),
          __param(0, (0, common_1.Body)()),
          __param(1, (0, common_1.Req)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof adminl_login_dto_1.AdminLoginDto !== 'undefined' &&
              adminl_login_dto_1.AdminLoginDto) === 'function'
              ? _a
              : Object,
            Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        AuthController.prototype,
        'adminLogin',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('admin/info'),
          (0, swagger_1.ApiOperation)({ summary: '管理站--当前登录用户信息' }),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof admin_model_1.AdminDocument !== 'undefined' &&
              admin_model_1.AdminDocument) === 'function'
              ? _c
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        AuthController.prototype,
        'currentLoginInfo',
        null,
      );
      AuthController = __decorate(
        [
          (0, swagger_1.ApiTags)('登录'),
          (0, common_1.Controller)('auth'),
          __metadata('design:paramtypes', [
            typeof (_e =
              typeof jwt_1.JwtService !== 'undefined' && jwt_1.JwtService) ===
            'function'
              ? _e
              : Object,
          ]),
        ],
        AuthController,
      );
      exports.AuthController = AuthController;

      /***/
    },
    /* 76 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AdminLoginDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class AdminLoginDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '邮箱' }),
          __metadata('design:type', String),
        ],
        AdminLoginDto.prototype,
        'email',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '密码' }),
          __metadata('design:type', String),
        ],
        AdminLoginDto.prototype,
        'password',
        void 0,
      );
      exports.AdminLoginDto = AdminLoginDto;

      /***/
    },
    /* 77 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CurrentUser = void 0;
      const common_1 = __webpack_require__(7);
      exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
        const req = ctx.switchToHttp().getRequest();
        return req.user;
      });

      /***/
    },
    /* 78 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AdminModule = void 0;
      const common_1 = __webpack_require__(7);
      const admin_service_1 = __webpack_require__(79);
      const admin_controller_1 = __webpack_require__(80);
      let AdminModule = class AdminModule {};
      AdminModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [admin_controller_1.AdminController],
            providers: [admin_service_1.AdminService],
            exports: [admin_service_1.AdminService],
          }),
        ],
        AdminModule,
      );
      exports.AdminModule = AdminModule;

      /***/
    },
    /* 79 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AdminService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const ResponseResultModel_1 = __webpack_require__(11);
      const admin_model_1 = __webpack_require__(22);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let AdminService = class AdminService {
        constructor(adminModel) {
          this.adminModel = adminModel;
        }
        async create(createAdminDto) {
          const isHasEmail = await this.adminModel.findOne({
            email: createAdminDto.email,
          });
          if (isHasEmail) {
            throw new ResponseResultModel_1.ApiFail(102, '邮箱已经存在！');
          }
          const result = await this.adminModel.create(createAdminDto);
          if (!result) {
            throw new ResponseResultModel_1.ApiFail(
              400,
              '系统异常，请联系管理员',
            );
          }
          return result;
        }
        async findAll(parameters) {
          var _a;
          let total = 0;
          const result = await this.adminModel
            .find({
              $or: [
                {
                  name: { $regex: new RegExp(parameters.name, 'i') },
                  status:
                    (_a = parameters.status) !== null && _a !== void 0
                      ? _a
                      : { $ne: parameters.status },
                },
              ],
            })
            .populate({ path: 'roleIds', select: ['name'] })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.adminModel.findById(id);
        }
        async update(id, updateAdminDto) {
          return await this.adminModel.findByIdAndUpdate(id, updateAdminDto);
        }
        async remove(id) {
          return await this.adminModel.findOneAndDelete({ _id: id });
        }
        async updateStatus(id, updateStatusDto) {
          return await this.adminModel.findByIdAndUpdate(id, updateStatusDto);
        }
      };
      AdminService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(admin_model_1.Admin)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        AdminService,
      );
      exports.AdminService = AdminService;

      /***/
    },
    /* 80 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AdminController = void 0;
      const common_1 = __webpack_require__(7);
      const passport_1 = __webpack_require__(58);
      const swagger_1 = __webpack_require__(2);
      const parse_id_pipe_1 = __webpack_require__(81);
      const ResponseResultModel_1 = __webpack_require__(11);
      const admin_service_1 = __webpack_require__(79);
      const create_admin_dto_1 = __webpack_require__(83);
      const query_admin_dto_1 = __webpack_require__(84);
      const update_admin_dto_1 = __webpack_require__(86);
      let AdminController = class AdminController {
        constructor(adminService) {
          this.adminService = adminService;
        }
        async create(createAdminDto) {
          const res = await this.adminService.create(createAdminDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameter) {
          const res = await this.adminService.findAll(parameter);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.adminService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateAdminDto) {
          const res = await this.adminService.update(id, updateAdminDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.adminService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async updateStatus(id, updateStatusDto) {
          const res = await this.adminService.updateStatus(id, updateStatusDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增管理员' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_admin_dto_1.CreateAdminDto !== 'undefined' &&
              create_admin_dto_1.CreateAdminDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        AdminController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '管理员列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof query_admin_dto_1.QueryAdminDto !== 'undefined' &&
              query_admin_dto_1.QueryAdminDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        AdminController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '管理员信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '管理员id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_e = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _e
              : Object,
          ),
        ],
        AdminController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新管理员' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '管理员id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_f =
              typeof update_admin_dto_1.UpdateAdminDto !== 'undefined' &&
              update_admin_dto_1.UpdateAdminDto) === 'function'
              ? _f
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_g = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _g
              : Object,
          ),
        ],
        AdminController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除管理员' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '管理员id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_h = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _h
              : Object,
          ),
        ],
        AdminController.prototype,
        'remove',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('updateStatus/:id'),
          (0, swagger_1.ApiOperation)({ summary: '更新管理员状态' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '管理员id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_j =
              typeof update_admin_dto_1.UpdateStatusDto !== 'undefined' &&
              update_admin_dto_1.UpdateStatusDto) === 'function'
              ? _j
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_k = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _k
              : Object,
          ),
        ],
        AdminController.prototype,
        'updateStatus',
        null,
      );
      AdminController = __decorate(
        [
          (0, swagger_1.ApiTags)('管理员'),
          (0, common_1.Controller)('admin'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          __metadata('design:paramtypes', [
            typeof (_l =
              typeof admin_service_1.AdminService !== 'undefined' &&
              admin_service_1.AdminService) === 'function'
              ? _l
              : Object,
          ]),
        ],
        AdminController,
      );
      exports.AdminController = AdminController;

      /***/
    },
    /* 81 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ParseIdPipe = void 0;
      const common_1 = __webpack_require__(7);
      const mongoose_1 = __webpack_require__(82);
      const ResponseResultModel_1 = __webpack_require__(11);
      let ParseIdPipe = class ParseIdPipe {
        transform(value) {
          if ((0, mongoose_1.isValidObjectId)(value)) {
            return value;
          } else {
            throw new ResponseResultModel_1.ApiFail(101, 'id不存在或者错误');
          }
        }
      };
      ParseIdPipe = __decorate([(0, common_1.Injectable)()], ParseIdPipe);
      exports.ParseIdPipe = ParseIdPipe;

      /***/
    },
    /* 82 */
    /***/ (module) => {
      module.exports = require('mongoose');

      /***/
    },
    /* 83 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateAdminDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class CreateAdminDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户名' }),
          (0, class_validator_1.IsNotEmpty)({ message: '用户名不能为空' }),
          __metadata('design:type', String),
        ],
        CreateAdminDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户邮箱' }),
          (0, class_validator_1.IsString)({ message: '邮箱不能为空' }),
          (0, class_validator_1.IsEmail)(
            { ignore_max_length: true },
            { message: '请输入正确的邮箱' },
          ),
          __metadata('design:type', String),
        ],
        CreateAdminDto.prototype,
        'email',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户密码' }),
          (0, class_validator_1.IsNotEmpty)({ message: '密码不能为空' }),
          __metadata('design:type', String),
        ],
        CreateAdminDto.prototype,
        'password',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '关联的角色' }),
          (0, class_validator_1.IsNotEmpty)({ message: '角色不能为空' }),
          __metadata(
            'design:type',
            typeof (_a = typeof Array !== 'undefined' && Array) === 'function'
              ? _a
              : Object,
          ),
        ],
        CreateAdminDto.prototype,
        'roleIds',
        void 0,
      );
      exports.CreateAdminDto = CreateAdminDto;

      /***/
    },
    /* 84 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryAdminDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryAdminDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '分类名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryAdminDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '状态',
            default: true,
            required: false,
          }),
          __metadata('design:type', Boolean),
        ],
        QueryAdminDto.prototype,
        'status',
        void 0,
      );
      exports.QueryAdminDto = QueryAdminDto;

      /***/
    },
    /* 85 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.PaginationParametersDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            name: '页码',
            default: 1,
            required: false,
            type: Number,
          }),
          __metadata('design:type', Number),
        ],
        PaginationParametersDto.prototype,
        'pageNumber',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            name: '页数',
            default: 10,
            required: false,
            type: Number,
          }),
          __metadata('design:type', Number),
        ],
        PaginationParametersDto.prototype,
        'pageSize',
        void 0,
      );
      exports.PaginationParametersDto = PaginationParametersDto;

      /***/
    },
    /* 86 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateStatusDto = exports.UpdateAdminDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class UpdateAdminDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          __metadata('design:type', String),
        ],
        UpdateAdminDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '角色标识' }),
          __metadata(
            'design:type',
            typeof (_a = typeof Array !== 'undefined' && Array) === 'function'
              ? _a
              : Object,
          ),
        ],
        UpdateAdminDto.prototype,
        'roles',
        void 0,
      );
      exports.UpdateAdminDto = UpdateAdminDto;
      class UpdateStatusDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          __metadata('design:type', Boolean),
        ],
        UpdateStatusDto.prototype,
        'status',
        void 0,
      );
      exports.UpdateStatusDto = UpdateStatusDto;

      /***/
    },
    /* 87 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserModule = void 0;
      const common_1 = __webpack_require__(7);
      const user_service_1 = __webpack_require__(88);
      const user_controller_1 = __webpack_require__(90);
      let UserModule = class UserModule {};
      UserModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [user_controller_1.UserController],
            providers: [user_service_1.UserService],
            exports: [user_service_1.UserService],
          }),
        ],
        UserModule,
      );
      exports.UserModule = UserModule;

      /***/
    },
    /* 88 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const ResponseResultModel_1 = __webpack_require__(11);
      const user_collection_model_1 = __webpack_require__(54);
      const user_views_history_model_1 = __webpack_require__(55);
      const user_model_1 = __webpack_require__(35);
      const nestjs_typegoose_1 = __webpack_require__(20);
      const mongodb_1 = __webpack_require__(89);
      let UserService = class UserService {
        constructor(userModel, userViewsHistoryModel, userCollectionModel) {
          this.userModel = userModel;
          this.userViewsHistoryModel = userViewsHistoryModel;
          this.userCollectionModel = userCollectionModel;
        }
        async create(createUserDto) {
          const hasEmail = await this.userModel.findOne({
            email: createUserDto.email,
          });
          if (hasEmail) {
            throw new ResponseResultModel_1.ApiFail(102, '邮箱已存在');
          }
          return await this.userModel.create(createUserDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.userModel
            .find({ name: { $regex: new RegExp(parameters.name, 'i') } })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async getUserViewHistories(userId, parameters) {
          let total = 0;
          const result = await this.userViewsHistoryModel
            .aggregate([
              {
                $match: {
                  userId: new mongodb_1.ObjectId(userId),
                },
              },
              {
                $lookup: {
                  from: 'products',
                  foreignField: '_id',
                  localField: 'productId',
                  as: 'info',
                },
              },
              {
                $unwind: '$info',
              },
              {
                $project: {
                  title: '$info.title',
                  productId: '$info._id',
                  pic: '$info.pic',
                  price: '$info.price',
                  inventory: '$info.inventory',
                  sales: '$info.sales',
                },
              },
              {
                $match: {
                  title: { $regex: new RegExp(parameters.title, 'i') },
                },
              },
            ])
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            items: result,
            total,
          };
        }
        async getUserCollections(userId, parameters) {
          let total = 0;
          const result = await this.userCollectionModel
            .aggregate([
              {
                $match: {
                  userId: new mongodb_1.ObjectId(userId),
                },
              },
              {
                $lookup: {
                  from: 'products',
                  foreignField: '_id',
                  localField: 'productId',
                  as: 'info',
                },
              },
              {
                $unwind: '$info',
              },
              {
                $project: {
                  title: '$info.title',
                  productId: '$info._id',
                  pic: '$info.pic',
                  price: '$info.price',
                },
              },
              {
                $match: {
                  title: { $regex: new RegExp(parameters.title, 'i') },
                },
              },
            ])
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            items: result,
            total,
          };
        }
        async findOne(id) {
          return await this.userModel.findById(id);
        }
        async update(id, updateUserDto) {
          return await this.userModel.findByIdAndUpdate(id, updateUserDto);
        }
        async remove(id) {
          return await this.userModel.findOneAndDelete({ _id: id });
        }
      };
      UserService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.User)),
          __param(
            1,
            (0, nestjs_typegoose_1.InjectModel)(
              user_views_history_model_1.UserViewsHistory,
            ),
          ),
          __param(
            2,
            (0, nestjs_typegoose_1.InjectModel)(
              user_collection_model_1.UserCollection,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _b
              : Object,
            typeof (_c =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _c
              : Object,
          ]),
        ],
        UserService,
      );
      exports.UserService = UserService;

      /***/
    },
    /* 89 */
    /***/ (module) => {
      module.exports = require('mongodb');

      /***/
    },
    /* 90 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserController = void 0;
      const common_1 = __webpack_require__(7);
      const user_service_1 = __webpack_require__(88);
      const create_user_dto_1 = __webpack_require__(91);
      const update_user_dto_1 = __webpack_require__(92);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const query_user_dto_1 = __webpack_require__(93);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      const query_user_view_history_dto_1 = __webpack_require__(94);
      const query_user_collection_dto_1 = __webpack_require__(95);
      let UserController = class UserController {
        constructor(userService) {
          this.userService = userService;
        }
        async create(createUserDto) {
          const res = await this.userService.create(createUserDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.userService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.userService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateUserDto) {
          const res = await this.userService.update(id, updateUserDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.userService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getUserViewHistories(id, queryUserViewHistoryDto) {
          const res = await this.userService.getUserViewHistories(
            id,
            queryUserViewHistoryDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getUserCollections(id, queryUserCollectionDto) {
          const res = await this.userService.getUserCollections(
            id,
            queryUserCollectionDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '添加会员' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_user_dto_1.CreateUserDto !== 'undefined' &&
              create_user_dto_1.CreateUserDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        UserController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '会员列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof query_user_dto_1.QueryUserDto !== 'undefined' &&
              query_user_dto_1.QueryUserDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        UserController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '会员信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '会员id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_e = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _e
              : Object,
          ),
        ],
        UserController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新会员' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '会员id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_f =
              typeof update_user_dto_1.UpdateUserDto !== 'undefined' &&
              update_user_dto_1.UpdateUserDto) === 'function'
              ? _f
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_g = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _g
              : Object,
          ),
        ],
        UserController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除会员' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '会员id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_h = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _h
              : Object,
          ),
        ],
        UserController.prototype,
        'remove',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id/viewHistories'),
          (0, swagger_1.ApiOperation)({ summary: '获取会员商品浏览记录列表' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '会员id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_j =
              typeof query_user_view_history_dto_1.QueryUserViewHistoryDto !==
                'undefined' &&
              query_user_view_history_dto_1.QueryUserViewHistoryDto) ===
            'function'
              ? _j
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'getUserViewHistories',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id/collections'),
          (0, swagger_1.ApiOperation)({ summary: '获取会员商品收藏列表' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '会员id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_k =
              typeof query_user_collection_dto_1.QueryUserCollectionDto !==
                'undefined' &&
              query_user_collection_dto_1.QueryUserCollectionDto) === 'function'
              ? _k
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'getUserCollections',
        null,
      );
      UserController = __decorate(
        [
          (0, swagger_1.ApiTags)('会员管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('user'),
          __metadata('design:paramtypes', [
            typeof (_l =
              typeof user_service_1.UserService !== 'undefined' &&
              user_service_1.UserService) === 'function'
              ? _l
              : Object,
          ]),
        ],
        UserController,
      );
      exports.UserController = UserController;

      /***/
    },
    /* 91 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateUserDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class CreateUserDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, class_validator_1.IsNotEmpty)({ message: '用户名不能为空' }),
          __metadata('design:type', String),
        ],
        CreateUserDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '邮箱' }),
          (0, class_validator_1.IsString)({ message: '邮箱不能为空' }),
          (0, class_validator_1.IsEmail)(
            { ignore_max_length: true },
            { message: '请输入正确的邮箱' },
          ),
          __metadata('design:type', String),
        ],
        CreateUserDto.prototype,
        'email',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '手机号码' }),
          __metadata('design:type', String),
        ],
        CreateUserDto.prototype,
        'phone',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '密码' }),
          (0, class_validator_1.IsNotEmpty)({ message: '密码不能为空' }),
          __metadata('design:type', String),
        ],
        CreateUserDto.prototype,
        'password',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '头像' }),
          __metadata('design:type', String),
        ],
        CreateUserDto.prototype,
        'avatar',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '性别',
            default: 1,
            type: Number,
            description: '1: 男，2: 女',
          }),
          __metadata('design:type', Number),
        ],
        CreateUserDto.prototype,
        'gender',
        void 0,
      );
      exports.CreateUserDto = CreateUserDto;

      /***/
    },
    /* 92 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateUserDto = void 0;
      class UpdateUserDto {}
      exports.UpdateUserDto = UpdateUserDto;

      /***/
    },
    /* 93 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryUserDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryUserDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '会员名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryUserDto.prototype,
        'name',
        void 0,
      );
      exports.QueryUserDto = QueryUserDto;

      /***/
    },
    /* 94 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryUserViewHistoryDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryUserViewHistoryDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '商品标题', required: false }),
          __metadata('design:type', String),
        ],
        QueryUserViewHistoryDto.prototype,
        'title',
        void 0,
      );
      exports.QueryUserViewHistoryDto = QueryUserViewHistoryDto;

      /***/
    },
    /* 95 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryUserCollectionDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryUserCollectionDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '商品标题', required: false }),
          __metadata('design:type', String),
        ],
        QueryUserCollectionDto.prototype,
        'title',
        void 0,
      );
      exports.QueryUserCollectionDto = QueryUserCollectionDto;

      /***/
    },
    /* 96 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserAddressModule = void 0;
      const common_1 = __webpack_require__(7);
      const user_address_service_1 = __webpack_require__(97);
      const user_address_controller_1 = __webpack_require__(98);
      let UserAddressModule = class UserAddressModule {};
      UserAddressModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [user_address_controller_1.UserAddressController],
            providers: [user_address_service_1.UserAddressService],
          }),
        ],
        UserAddressModule,
      );
      exports.UserAddressModule = UserAddressModule;

      /***/
    },
    /* 97 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserAddressService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const user_address_model_1 = __webpack_require__(44);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let UserAddressService = class UserAddressService {
        constructor(userAddressModel) {
          this.userAddressModel = userAddressModel;
        }
        async create(createUserAddressDto) {
          return await this.userAddressModel.create(createUserAddressDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.userAddressModel
            .find({
              name: { $regex: new RegExp(parameters.name, 'i') },
              userId: parameters.userId,
            })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.userAddressModel.findById(id);
        }
        async update(id, updateUserAddressDto) {
          return await this.userAddressModel.findByIdAndUpdate(
            id,
            updateUserAddressDto,
          );
        }
        async remove(id) {
          return await this.userAddressModel.findByIdAndDelete(id);
        }
      };
      UserAddressService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              user_address_model_1.UserAddress,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        UserAddressService,
      );
      exports.UserAddressService = UserAddressService;

      /***/
    },
    /* 98 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserAddressController = void 0;
      const common_1 = __webpack_require__(7);
      const user_address_service_1 = __webpack_require__(97);
      const create_user_address_dto_1 = __webpack_require__(99);
      const update_user_address_dto_1 = __webpack_require__(100);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const query_user_address_dto_1 = __webpack_require__(101);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      let UserAddressController = class UserAddressController {
        constructor(userAddressService) {
          this.userAddressService = userAddressService;
        }
        async create(createUserAddressDto) {
          const res = await this.userAddressService.create(
            createUserAddressDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(queryUserAddressDto) {
          const res = await this.userAddressService.findAll(
            queryUserAddressDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.userAddressService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateUserAddressDto) {
          const res = await this.userAddressService.update(
            id,
            updateUserAddressDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.userAddressService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '添加会员地址' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_user_address_dto_1.CreateUserAddressDto !==
                'undefined' &&
              create_user_address_dto_1.CreateUserAddressDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserAddressController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '获取会员地址列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_user_address_dto_1.QueryUserAddressDto !==
                'undefined' && query_user_address_dto_1.QueryUserAddressDto) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserAddressController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '获取会员地址' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '地址id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        UserAddressController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新会员地址' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '地址id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_c =
              typeof update_user_address_dto_1.UpdateUserAddressDto !==
                'undefined' &&
              update_user_address_dto_1.UpdateUserAddressDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserAddressController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除会员地址' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '地址id' }),
          __param(0, (0, common_1.Param)('id')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        UserAddressController.prototype,
        'remove',
        null,
      );
      UserAddressController = __decorate(
        [
          (0, swagger_1.ApiTags)('会员地址'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('userAddress'),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof user_address_service_1.UserAddressService !==
                'undefined' && user_address_service_1.UserAddressService) ===
            'function'
              ? _d
              : Object,
          ]),
        ],
        UserAddressController,
      );
      exports.UserAddressController = UserAddressController;

      /***/
    },
    /* 99 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateUserAddressDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class CreateUserAddressDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '收货人名字' }),
          (0, class_validator_1.IsNotEmpty)({ message: '名字不能为空' }),
          __metadata('design:type', String),
        ],
        CreateUserAddressDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '收货人手机号' }),
          (0, class_validator_1.IsNotEmpty)({ message: '手机号不能为空' }),
          __metadata('design:type', String),
        ],
        CreateUserAddressDto.prototype,
        'phone',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id' }),
          (0, class_validator_1.IsNotEmpty)({ message: '用户id不能为空' }),
          __metadata('design:type', String),
        ],
        CreateUserAddressDto.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '地址' }),
          (0, class_validator_1.IsNotEmpty)({ message: '地址不能为空' }),
          __metadata('design:type', String),
        ],
        CreateUserAddressDto.prototype,
        'address',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '详细地址' }),
          (0, class_validator_1.IsNotEmpty)({ message: '详细不能为空' }),
          __metadata('design:type', String),
        ],
        CreateUserAddressDto.prototype,
        'detail',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '备注', required: false }),
          __metadata('design:type', String),
        ],
        CreateUserAddressDto.prototype,
        'remark',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否默认', default: false }),
          __metadata('design:type', Boolean),
        ],
        CreateUserAddressDto.prototype,
        'isDefault',
        void 0,
      );
      exports.CreateUserAddressDto = CreateUserAddressDto;

      /***/
    },
    /* 100 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateUserAddressDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_user_address_dto_1 = __webpack_require__(99);
      class UpdateUserAddressDto extends (0, swagger_1.PartialType)(
        create_user_address_dto_1.CreateUserAddressDto,
      ) {}
      exports.UpdateUserAddressDto = UpdateUserAddressDto;

      /***/
    },
    /* 101 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryUserAddressDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryUserAddressDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id', required: true }),
          __metadata('design:type', String),
        ],
        QueryUserAddressDto.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '收货人名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryUserAddressDto.prototype,
        'name',
        void 0,
      );
      exports.QueryUserAddressDto = QueryUserAddressDto;

      /***/
    },
    /* 102 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CategoryModule = void 0;
      const common_1 = __webpack_require__(7);
      const category_service_1 = __webpack_require__(103);
      const category_controller_1 = __webpack_require__(104);
      let CategoryModule = class CategoryModule {};
      CategoryModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [category_controller_1.CategoryController],
            providers: [category_service_1.CategoryService],
          }),
        ],
        CategoryModule,
      );
      exports.CategoryModule = CategoryModule;

      /***/
    },
    /* 103 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CategoryService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const category_model_1 = __webpack_require__(31);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let CategoryService = class CategoryService {
        constructor(categoryModel) {
          this.categoryModel = categoryModel;
        }
        async create(createCategoryDto) {
          return this.categoryModel.create(createCategoryDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.categoryModel
            .find({ name: { $regex: new RegExp(parameters.name, 'i') } })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return this.categoryModel.findById(id);
        }
        async update(id, updateCategoryDto) {
          return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto);
        }
        async remove(id) {
          return await this.categoryModel.findOneAndDelete({ _id: id });
        }
      };
      CategoryService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(category_model_1.Category),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        CategoryService,
      );
      exports.CategoryService = CategoryService;

      /***/
    },
    /* 104 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CategoryController = void 0;
      const common_1 = __webpack_require__(7);
      const passport_1 = __webpack_require__(58);
      const swagger_1 = __webpack_require__(2);
      const parse_id_pipe_1 = __webpack_require__(81);
      const ResponseResultModel_1 = __webpack_require__(11);
      const category_service_1 = __webpack_require__(103);
      const create_category_dto_1 = __webpack_require__(105);
      const query_category_dto_1 = __webpack_require__(106);
      const update_category_dto_1 = __webpack_require__(107);
      let CategoryController = class CategoryController {
        constructor(categoryService) {
          this.categoryService = categoryService;
        }
        async create(createCategoryDto) {
          const res = await this.categoryService.create(createCategoryDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.categoryService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.categoryService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateCategoryDto) {
          const res = await this.categoryService.update(id, updateCategoryDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.categoryService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增分类' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_category_dto_1.CreateCategoryDto !== 'undefined' &&
              create_category_dto_1.CreateCategoryDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        CategoryController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '分类列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof query_category_dto_1.QueryCategoryDto !== 'undefined' &&
              query_category_dto_1.QueryCategoryDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        CategoryController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '分类信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '分类id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_e = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _e
              : Object,
          ),
        ],
        CategoryController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新分类' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '分类id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_f =
              typeof update_category_dto_1.UpdateCategoryDto !== 'undefined' &&
              update_category_dto_1.UpdateCategoryDto) === 'function'
              ? _f
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_g = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _g
              : Object,
          ),
        ],
        CategoryController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除分类' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '分类id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_h = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _h
              : Object,
          ),
        ],
        CategoryController.prototype,
        'remove',
        null,
      );
      CategoryController = __decorate(
        [
          (0, swagger_1.ApiTags)('商品分类管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('category'),
          __metadata('design:paramtypes', [
            typeof (_j =
              typeof category_service_1.CategoryService !== 'undefined' &&
              category_service_1.CategoryService) === 'function'
              ? _j
              : Object,
          ]),
        ],
        CategoryController,
      );
      exports.CategoryController = CategoryController;

      /***/
    },
    /* 105 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateCategoryDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class CreateCategoryDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '分类名称' }),
          (0, class_validator_1.IsNotEmpty)({ message: '名称不能为空' }),
          __metadata('design:type', String),
        ],
        CreateCategoryDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '排序' }),
          __metadata('design:type', Number),
        ],
        CreateCategoryDto.prototype,
        'sort',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '上级分类' }),
          __metadata('design:type', String),
        ],
        CreateCategoryDto.prototype,
        'parentId',
        void 0,
      );
      exports.CreateCategoryDto = CreateCategoryDto;

      /***/
    },
    /* 106 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryCategoryDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryCategoryDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '分类名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryCategoryDto.prototype,
        'name',
        void 0,
      );
      exports.QueryCategoryDto = QueryCategoryDto;

      /***/
    },
    /* 107 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateCategoryDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_category_dto_1 = __webpack_require__(105);
      class UpdateCategoryDto extends (0, swagger_1.PartialType)(
        create_category_dto_1.CreateCategoryDto,
      ) {}
      exports.UpdateCategoryDto = UpdateCategoryDto;

      /***/
    },
    /* 108 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.NewsModule = void 0;
      const common_1 = __webpack_require__(7);
      const news_service_1 = __webpack_require__(109);
      const news_controller_1 = __webpack_require__(110);
      let NewsModule = class NewsModule {};
      NewsModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [news_controller_1.NewsController],
            providers: [news_service_1.NewsService],
          }),
        ],
        NewsModule,
      );
      exports.NewsModule = NewsModule;

      /***/
    },
    /* 109 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.NewsService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const news_model_1 = __webpack_require__(41);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let NewsService = class NewsService {
        constructor(newsModel) {
          this.newsModel = newsModel;
        }
        async create(createNewsDto) {
          return await this.newsModel.create(createNewsDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.newsModel
            .find({ name: { $regex: new RegExp(parameters.title, 'i') } })
            .populate('tags')
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.newsModel.findById(id);
        }
        async update(id, updateNewsDto) {
          return await this.newsModel.findByIdAndUpdate(id, updateNewsDto);
        }
        async remove(id) {
          return await this.newsModel.findOneAndDelete({ _id: id });
        }
      };
      NewsService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(news_model_1.News)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        NewsService,
      );
      exports.NewsService = NewsService;

      /***/
    },
    /* 110 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.NewsController = void 0;
      const common_1 = __webpack_require__(7);
      const news_service_1 = __webpack_require__(109);
      const create_news_dto_1 = __webpack_require__(111);
      const update_news_dto_1 = __webpack_require__(112);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const query_news_dto_1 = __webpack_require__(113);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      let NewsController = class NewsController {
        constructor(newsService) {
          this.newsService = newsService;
        }
        async create(createNewsDto) {
          const res = await this.newsService.create(createNewsDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.newsService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.newsService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateNewsDto) {
          const res = await this.newsService.update(id, updateNewsDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.newsService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增文章' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_news_dto_1.CreateNewsDto !== 'undefined' &&
              create_news_dto_1.CreateNewsDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        NewsController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '文章列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof query_news_dto_1.QueryNewsDto !== 'undefined' &&
              query_news_dto_1.QueryNewsDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        NewsController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '文章详情' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '文章id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_e = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _e
              : Object,
          ),
        ],
        NewsController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新文章' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '文章id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_f =
              typeof update_news_dto_1.UpdateNewsDto !== 'undefined' &&
              update_news_dto_1.UpdateNewsDto) === 'function'
              ? _f
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_g = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _g
              : Object,
          ),
        ],
        NewsController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除文章' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '文章id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_h = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _h
              : Object,
          ),
        ],
        NewsController.prototype,
        'remove',
        null,
      );
      NewsController = __decorate(
        [
          (0, swagger_1.ApiTags)('文章管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('news'),
          __metadata('design:paramtypes', [
            typeof (_j =
              typeof news_service_1.NewsService !== 'undefined' &&
              news_service_1.NewsService) === 'function'
              ? _j
              : Object,
          ]),
        ],
        NewsController,
      );
      exports.NewsController = NewsController;

      /***/
    },
    /* 111 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateNewsDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class CreateNewsDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文章标题' }),
          (0, class_validator_1.IsNotEmpty)({ message: '名称不能为空' }),
          __metadata('design:type', String),
        ],
        CreateNewsDto.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文章标签', type: Array }),
          (0, class_validator_1.IsNotEmpty)({ message: '标签不能为空' }),
          __metadata(
            'design:type',
            typeof (_a = typeof Array !== 'undefined' && Array) === 'function'
              ? _a
              : Object,
          ),
        ],
        CreateNewsDto.prototype,
        'tags',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文章内容' }),
          (0, class_validator_1.IsNotEmpty)({ message: '文章内容不能为空' }),
          __metadata('design:type', String),
        ],
        CreateNewsDto.prototype,
        'content',
        void 0,
      );
      exports.CreateNewsDto = CreateNewsDto;

      /***/
    },
    /* 112 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateNewsDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_news_dto_1 = __webpack_require__(111);
      class UpdateNewsDto extends (0, swagger_1.PartialType)(
        create_news_dto_1.CreateNewsDto,
      ) {}
      exports.UpdateNewsDto = UpdateNewsDto;

      /***/
    },
    /* 113 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryNewsDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryNewsDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '标题', required: false }),
          __metadata('design:type', String),
        ],
        QueryNewsDto.prototype,
        'title',
        void 0,
      );
      exports.QueryNewsDto = QueryNewsDto;

      /***/
    },
    /* 114 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.TagModule = void 0;
      const common_1 = __webpack_require__(7);
      const tag_service_1 = __webpack_require__(115);
      const tag_controller_1 = __webpack_require__(116);
      let TagModule = class TagModule {};
      TagModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [tag_controller_1.TagController],
            providers: [tag_service_1.TagService],
          }),
        ],
        TagModule,
      );
      exports.TagModule = TagModule;

      /***/
    },
    /* 115 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.TagService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const tag_model_1 = __webpack_require__(32);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let TagService = class TagService {
        constructor(tagModel) {
          this.tagModel = tagModel;
        }
        async create(createTagDto) {
          return await this.tagModel.create(createTagDto);
        }
        async findAll(parameters) {
          var _a, _b;
          let total = 0;
          const result = await this.tagModel
            .find({
              $or: [
                {
                  name: { $regex: new RegExp(parameters.name, 'i') },
                  type:
                    (_a = parameters.type) !== null && _a !== void 0
                      ? _a
                      : { $ne: parameters.type },
                  status:
                    (_b = parameters.status) !== null && _b !== void 0
                      ? _b
                      : { $ne: parameters.status },
                },
              ],
            })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.tagModel.findById(id);
        }
        async update(id, updateTagDto) {
          return await this.tagModel.findByIdAndUpdate(id, updateTagDto);
        }
        async remove(id) {
          return await this.tagModel.findByIdAndDelete(id);
        }
      };
      TagService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(tag_model_1.Tag)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        TagService,
      );
      exports.TagService = TagService;

      /***/
    },
    /* 116 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.TagController = void 0;
      const common_1 = __webpack_require__(7);
      const tag_service_1 = __webpack_require__(115);
      const create_tag_dto_1 = __webpack_require__(117);
      const update_tag_dto_1 = __webpack_require__(118);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const query_tag_dto_1 = __webpack_require__(119);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      let TagController = class TagController {
        constructor(tagService) {
          this.tagService = tagService;
        }
        async create(createTagDto) {
          const res = await this.tagService.create(createTagDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.tagService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.tagService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateTagDto) {
          const res = await this.tagService.update(id, updateTagDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.tagService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '添加标签' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_tag_dto_1.CreateTagDto !== 'undefined' &&
              create_tag_dto_1.CreateTagDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        TagController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '标签列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_tag_dto_1.QueryTagDto !== 'undefined' &&
              query_tag_dto_1.QueryTagDto) === 'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        TagController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '标签详情' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '标签id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        TagController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新标签' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '标签id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_c =
              typeof update_tag_dto_1.UpdateTagDto !== 'undefined' &&
              update_tag_dto_1.UpdateTagDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        TagController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除标签' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '标签id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        TagController.prototype,
        'remove',
        null,
      );
      TagController = __decorate(
        [
          (0, swagger_1.ApiTags)('标签管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('tag'),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof tag_service_1.TagService !== 'undefined' &&
              tag_service_1.TagService) === 'function'
              ? _d
              : Object,
          ]),
        ],
        TagController,
      );
      exports.TagController = TagController;

      /***/
    },
    /* 117 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateTagDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class CreateTagDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, class_validator_1.IsNotEmpty)({ message: '名称不能为空' }),
          __metadata('design:type', String),
        ],
        CreateTagDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '名称',
            type: Number,
            example: '1: 产品标签, 2: 文章标签',
          }),
          (0, class_validator_1.IsNotEmpty)({ message: '类型不能为空' }),
          __metadata('design:type', Number),
        ],
        CreateTagDto.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '描述' }),
          (0, class_validator_1.IsNotEmpty)({ message: '描述不能为空' }),
          __metadata('design:type', String),
        ],
        CreateTagDto.prototype,
        'description',
        void 0,
      );
      exports.CreateTagDto = CreateTagDto;

      /***/
    },
    /* 118 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateTagDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_tag_dto_1 = __webpack_require__(117);
      class UpdateTagDto extends (0, swagger_1.PartialType)(
        create_tag_dto_1.CreateTagDto,
      ) {}
      exports.UpdateTagDto = UpdateTagDto;

      /***/
    },
    /* 119 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryTagDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryTagDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryTagDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '类型',
            required: false,
            default: 1,
            example: '1: 产品 , 2: 文章',
          }),
          __metadata('design:type', Number),
        ],
        QueryTagDto.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态', required: false }),
          __metadata('design:type', Boolean),
        ],
        QueryTagDto.prototype,
        'status',
        void 0,
      );
      exports.QueryTagDto = QueryTagDto;

      /***/
    },
    /* 120 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductModule = void 0;
      const common_1 = __webpack_require__(7);
      const product_service_1 = __webpack_require__(121);
      const product_controller_1 = __webpack_require__(122);
      let ProductModule = class ProductModule {};
      ProductModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [product_controller_1.ProductController],
            providers: [product_service_1.ProductService],
          }),
        ],
        ProductModule,
      );
      exports.ProductModule = ProductModule;

      /***/
    },
    /* 121 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const nestjs_typegoose_1 = __webpack_require__(20);
      const product_model_1 = __webpack_require__(29);
      let ProductService = class ProductService {
        constructor(productModel) {
          this.productModel = productModel;
        }
        async create(createProductDto) {
          if (createProductDto.skuType == 2) {
            const mins = createProductDto.skus.find((item) =>
              Math.min(item.price),
            );
            createProductDto.price = mins.price;
            createProductDto.inventory = mins.inventory;
          }
          return await this.productModel.create(createProductDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.productModel
            .aggregate([
              {
                $match: {
                  title: { $regex: new RegExp(parameters.title, 'i') },
                  isHot: parameters.isHot ? true : { $ne: parameters.isHot },
                  isTimeLimit: parameters.isTimeLimit
                    ? true
                    : { $ne: parameters.isTimeLimit },
                },
              },
              {
                $lookup: {
                  from: 'tags',
                  foreignField: '_id',
                  localField: 'tags',
                  as: 'tags',
                },
              },
              {
                $lookup: {
                  from: 'categories',
                  foreignField: '_id',
                  localField: 'category',
                  as: 'category',
                },
              },
              {
                $unwind: '$category',
              },
              {
                $skip: ~~((parameters.pageNumber - 1) * parameters.pageSize),
              },
              {
                $limit: ~~parameters.pageSize,
              },
            ])
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.productModel.findById(id);
        }
        async update(id, updateProductDto) {
          if (updateProductDto.skuType == 2) {
            const mins = updateProductDto.skus.find((item) =>
              Math.min(item.price),
            );
            updateProductDto.price = mins.price;
            updateProductDto.inventory = mins.inventory;
          }
          return await this.productModel.findByIdAndUpdate(
            id,
            updateProductDto,
          );
        }
        async remove(id) {
          return await this.productModel.findOneAndDelete({ _id: id });
        }
        async updateStatus(id, status) {
          return await this.productModel.findByIdAndUpdate(id, { status });
        }
        async updateHotStatus(id, status) {
          return await this.productModel.findByIdAndUpdate(id, {
            isHot: status,
          });
        }
        async batchUpdateHotStatus(ids, status) {
          for (const item of ids) {
            await this.productModel.findByIdAndUpdate(item, { isHot: status });
          }
        }
        async updateTimeLimitStatus(id, status) {
          return await this.productModel.findByIdAndUpdate(id, {
            isTimeLimit: status,
          });
        }
        async batchUpdateTimeLimitStatus(ids, status) {
          for (const item of ids) {
            await this.productModel.findByIdAndUpdate(item, {
              isTimeLimit: status,
            });
          }
        }
      };
      ProductService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(product_model_1.Product),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        ProductService,
      );
      exports.ProductService = ProductService;

      /***/
    },
    /* 122 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductController = void 0;
      const common_1 = __webpack_require__(7);
      const product_service_1 = __webpack_require__(121);
      const create_product_dto_1 = __webpack_require__(123);
      const update_product_dto_1 = __webpack_require__(124);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const query_product_dto_1 = __webpack_require__(125);
      const ResponseResultModel_1 = __webpack_require__(11);
      let ProductController = class ProductController {
        constructor(productService) {
          this.productService = productService;
        }
        async create(createProductDto) {
          const res = await this.productService.create(createProductDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.productService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.productService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateProductDto) {
          const res = await this.productService.update(id, updateProductDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.productService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async updateStatus(id, paramsDto) {
          await this.productService.updateStatus(id, paramsDto.status);
          return (0, ResponseResultModel_1.apiSucceed)();
        }
        async updateHotStatus(id, paramsDto) {
          await this.productService.updateHotStatus(id, paramsDto.status);
          return (0, ResponseResultModel_1.apiSucceed)();
        }
        async batchUpdateHotStatus(batchUpdateHotStatusDto) {
          await this.productService.batchUpdateHotStatus(
            batchUpdateHotStatusDto.ids,
            batchUpdateHotStatusDto.status,
          );
          return (0, ResponseResultModel_1.apiSucceed)();
        }
        async updateTimeLimitStatus(id, paramsDto) {
          await this.productService.updateTimeLimitStatus(id, paramsDto.status);
          return (0, ResponseResultModel_1.apiSucceed)();
        }
        async batchUpdateTimeLimitStatus(batchUpdateTimeLimitStatusDto) {
          await this.productService.batchUpdateTimeLimitStatus(
            batchUpdateTimeLimitStatusDto.ids,
            batchUpdateTimeLimitStatusDto.status,
          );
          return (0, ResponseResultModel_1.apiSucceed)();
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增商品' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_product_dto_1.CreateProductDto !== 'undefined' &&
              create_product_dto_1.CreateProductDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        ProductController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '商品列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof query_product_dto_1.QueryProductDto !== 'undefined' &&
              query_product_dto_1.QueryProductDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        ProductController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '商品详情' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          __param(0, (0, common_1.Param)('id')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_e = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _e
              : Object,
          ),
        ],
        ProductController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新商品' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          __param(0, (0, common_1.Param)('id')),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_f =
              typeof update_product_dto_1.UpdateProductDto !== 'undefined' &&
              update_product_dto_1.UpdateProductDto) === 'function'
              ? _f
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_g = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _g
              : Object,
          ),
        ],
        ProductController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除商品' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          __param(0, (0, common_1.Param)('id')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_h = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _h
              : Object,
          ),
        ],
        ProductController.prototype,
        'remove',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('updateStatus/:id'),
          (0, swagger_1.ApiOperation)({ summary: '更新商品状态' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          __param(0, (0, common_1.Param)('id')),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_j =
              typeof update_product_dto_1.ProductStatusDto !== 'undefined' &&
              update_product_dto_1.ProductStatusDto) === 'function'
              ? _j
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'updateStatus',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('updateHotStatus/:id'),
          (0, swagger_1.ApiOperation)({ summary: '更新商品热门推荐状态' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          __param(0, (0, common_1.Param)('id')),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_k =
              typeof update_product_dto_1.ProductStatusDto !== 'undefined' &&
              update_product_dto_1.ProductStatusDto) === 'function'
              ? _k
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'updateHotStatus',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('batchUpdateHotStatus'),
          (0, swagger_1.ApiOperation)({ summary: '批量更新商品热门推荐状态' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_l =
              typeof update_product_dto_1.BatchUpdateHotStatusDto !==
                'undefined' && update_product_dto_1.BatchUpdateHotStatusDto) ===
            'function'
              ? _l
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'batchUpdateHotStatus',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('updateTimeLimitStatus/:id'),
          (0, swagger_1.ApiOperation)({ summary: '更新商品限时精选状态' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          __param(0, (0, common_1.Param)('id')),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_m =
              typeof update_product_dto_1.ProductStatusDto !== 'undefined' &&
              update_product_dto_1.ProductStatusDto) === 'function'
              ? _m
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'updateTimeLimitStatus',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('batchUpdateTimeLimitStatus'),
          (0, swagger_1.ApiOperation)({ summary: '批量更新商品限时精选状态' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_o =
              typeof update_product_dto_1.BatchUpdateTimeLimitStatusDto !==
                'undefined' &&
              update_product_dto_1.BatchUpdateTimeLimitStatusDto) === 'function'
              ? _o
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'batchUpdateTimeLimitStatus',
        null,
      );
      ProductController = __decorate(
        [
          (0, swagger_1.ApiTags)('商品管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('product'),
          __metadata('design:paramtypes', [
            typeof (_p =
              typeof product_service_1.ProductService !== 'undefined' &&
              product_service_1.ProductService) === 'function'
              ? _p
              : Object,
          ]),
        ],
        ProductController,
      );
      exports.ProductController = ProductController;

      /***/
    },
    /* 123 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateProductDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class SkuDataType {}
      __decorate(
        [
          (0, class_validator_1.Min)(0, { message: '商品价格必须大于' }),
          (0, swagger_1.ApiProperty)({ title: '规格价格' }),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'price',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '库存' }),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'inventory',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '成本价' }),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'costPrice',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '重量' }),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'weight',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格图片' }),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'image',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '货号' }),
          __metadata('design:type', Number),
        ],
        SkuDataType.prototype,
        'artNo',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格名称集合', type: [String] }),
          __metadata('design:type', Array),
        ],
        SkuDataType.prototype,
        'skuNames',
        void 0,
      );
      class SkuAttrType {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格属性名称' }),
          __metadata('design:type', String),
        ],
        SkuAttrType.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格属性名称', type: [String] }),
          __metadata('design:type', Array),
        ],
        SkuAttrType.prototype,
        'values',
        void 0,
      );
      class CreateProductDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品标题' }),
          (0, class_validator_1.IsNotEmpty)({ message: '产品标题不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductDto.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '副标题' }),
          (0, class_validator_1.IsNotEmpty)({ message: '副标题不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductDto.prototype,
        'subTitle',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品图片' }),
          (0, class_validator_1.IsNotEmpty)({ message: '产品图片不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductDto.prototype,
        'pic',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品轮播图', type: [String] }),
          __metadata(
            'design:type',
            typeof (_a = typeof Array !== 'undefined' && Array) === 'function'
              ? _a
              : Object,
          ),
        ],
        CreateProductDto.prototype,
        'bannerImg',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品描述' }),
          (0, class_validator_1.IsNotEmpty)({ message: '产品描述不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductDto.prototype,
        'description',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品分类' }),
          (0, class_validator_1.IsNotEmpty)({ message: '产品分类不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductDto.prototype,
        'category',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品标签', type: [String] }),
          (0, class_validator_1.IsNotEmpty)({ message: '产品标签不能为空' }),
          __metadata(
            'design:type',
            typeof (_b = typeof Array !== 'undefined' && Array) === 'function'
              ? _b
              : Object,
          ),
        ],
        CreateProductDto.prototype,
        'tags',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品价格' }),
          (0, class_validator_1.Min)(0, { message: '商品价格必须大于' }),
          __metadata('design:type', Number),
        ],
        CreateProductDto.prototype,
        'price',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '折扣价' }),
          __metadata('design:type', Number),
        ],
        CreateProductDto.prototype,
        'costPrice',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品库存' }),
          __metadata('design:type', Number),
        ],
        CreateProductDto.prototype,
        'inventory',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品销量' }),
          __metadata('design:type', Number),
        ],
        CreateProductDto.prototype,
        'sales',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品浏览量' }),
          __metadata('design:type', Number),
        ],
        CreateProductDto.prototype,
        'views',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '规格选择',
            default: 1,
            description: '1: 单规格，2: 多规格',
          }),
          __metadata('design:type', Number),
        ],
        CreateProductDto.prototype,
        'skuType',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '商品规格',
            type: [SkuDataType],
          }),
          __metadata('design:type', Array),
        ],
        CreateProductDto.prototype,
        'skus',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '规格属性',
            type: [SkuAttrType],
          }),
          __metadata('design:type', Array),
        ],
        CreateProductDto.prototype,
        'skuAttrs',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品排序' }),
          __metadata('design:type', Number),
        ],
        CreateProductDto.prototype,
        'sort',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品状态' }),
          __metadata('design:type', Boolean),
        ],
        CreateProductDto.prototype,
        'status',
        void 0,
      );
      exports.CreateProductDto = CreateProductDto;

      /***/
    },
    /* 124 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductStatusDto =
        exports.BatchUpdateTimeLimitStatusDto =
        exports.BatchUpdateHotStatusDto =
        exports.UpdateProductDto =
          void 0;
      const swagger_1 = __webpack_require__(2);
      const create_product_dto_1 = __webpack_require__(123);
      class UpdateProductDto extends (0, swagger_1.PartialType)(
        create_product_dto_1.CreateProductDto,
      ) {}
      exports.UpdateProductDto = UpdateProductDto;
      class BatchUpdateHotStatusDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态', type: [String] }),
          __metadata(
            'design:type',
            typeof (_a = typeof Array !== 'undefined' && Array) === 'function'
              ? _a
              : Object,
          ),
        ],
        BatchUpdateHotStatusDto.prototype,
        'ids',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态', type: Boolean }),
          __metadata('design:type', Boolean),
        ],
        BatchUpdateHotStatusDto.prototype,
        'status',
        void 0,
      );
      exports.BatchUpdateHotStatusDto = BatchUpdateHotStatusDto;
      class BatchUpdateTimeLimitStatusDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态', type: [String] }),
          __metadata(
            'design:type',
            typeof (_b = typeof Array !== 'undefined' && Array) === 'function'
              ? _b
              : Object,
          ),
        ],
        BatchUpdateTimeLimitStatusDto.prototype,
        'ids',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态', type: Boolean }),
          __metadata('design:type', Boolean),
        ],
        BatchUpdateTimeLimitStatusDto.prototype,
        'status',
        void 0,
      );
      exports.BatchUpdateTimeLimitStatusDto = BatchUpdateTimeLimitStatusDto;
      class ProductStatusDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态', type: Boolean }),
          __metadata('design:type', Boolean),
        ],
        ProductStatusDto.prototype,
        'status',
        void 0,
      );
      exports.ProductStatusDto = ProductStatusDto;

      /***/
    },
    /* 125 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryProductDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryProductDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品标题', required: false }),
          __metadata('design:type', String),
        ],
        QueryProductDto.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '是否限时精选',
            required: false,
          }),
          __metadata('design:type', Boolean),
        ],
        QueryProductDto.prototype,
        'isTimeLimit',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '是否热门推荐',
            required: false,
          }),
          __metadata('design:type', Boolean),
        ],
        QueryProductDto.prototype,
        'isHot',
        void 0,
      );
      exports.QueryProductDto = QueryProductDto;

      /***/
    },
    /* 126 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductParamModule = void 0;
      const common_1 = __webpack_require__(7);
      const product_param_service_1 = __webpack_require__(127);
      const product_param_controller_1 = __webpack_require__(128);
      let ProductParamModule = class ProductParamModule {};
      ProductParamModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [product_param_controller_1.ProductParamController],
            providers: [product_param_service_1.ProductParamService],
          }),
        ],
        ProductParamModule,
      );
      exports.ProductParamModule = ProductParamModule;

      /***/
    },
    /* 127 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductParamService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const product_param_model_1 = __webpack_require__(46);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let ProductParamService = class ProductParamService {
        constructor(productParmMobanModel) {
          this.productParmMobanModel = productParmMobanModel;
        }
        async create(createProductParamDto) {
          return await this.productParmMobanModel.create(createProductParamDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.productParmMobanModel
            .find({ name: { $regex: new RegExp(parameters.name, 'i') } })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return this.productParmMobanModel.findById(id);
        }
        async update(id, updateProductParamDto) {
          return this.productParmMobanModel.findByIdAndUpdate(
            id,
            updateProductParamDto,
          );
        }
        async remove(id) {
          return this.productParmMobanModel.findByIdAndDelete(id);
        }
      };
      ProductParamService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              product_param_model_1.ProductParam,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        ProductParamService,
      );
      exports.ProductParamService = ProductParamService;

      /***/
    },
    /* 128 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductParamController = void 0;
      const common_1 = __webpack_require__(7);
      const product_param_service_1 = __webpack_require__(127);
      const create_product_param_dto_1 = __webpack_require__(129);
      const update_product_param_dto_1 = __webpack_require__(130);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const query_product_param_dto_1 = __webpack_require__(131);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      let ProductParamController = class ProductParamController {
        constructor(productParamService) {
          this.productParamService = productParamService;
        }
        async create(createProductParamDto) {
          const res = await this.productParamService.create(
            createProductParamDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = this.productParamService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = this.productParamService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateProductParamDto) {
          const res = this.productParamService.update(
            id,
            updateProductParamDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = this.productParamService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增参数模板' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_product_param_dto_1.CreateProductParamDto !==
                'undefined' &&
              create_product_param_dto_1.CreateProductParamDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductParamController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '参数模板列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_product_param_dto_1.QueryProductParamDto !==
                'undefined' &&
              query_product_param_dto_1.QueryProductParamDto) === 'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductParamController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '参数模板信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '参数模板id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductParamController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新参数模板' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '参数模板id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_c =
              typeof update_product_param_dto_1.UpdateProductParamDto !==
                'undefined' &&
              update_product_param_dto_1.UpdateProductParamDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductParamController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除参数模板' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '参数模板id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductParamController.prototype,
        'remove',
        null,
      );
      ProductParamController = __decorate(
        [
          (0, swagger_1.ApiTags)('商品参数模板'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('productParam'),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof product_param_service_1.ProductParamService !==
                'undefined' && product_param_service_1.ProductParamService) ===
            'function'
              ? _d
              : Object,
          ]),
        ],
        ProductParamController,
      );
      exports.ProductParamController = ProductParamController;

      /***/
    },
    /* 129 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateProductParamDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class ParamTpye {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '参数名' }),
          __metadata('design:type', String),
        ],
        ParamTpye.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '参数值' }),
          __metadata('design:type', String),
        ],
        ParamTpye.prototype,
        'value',
        void 0,
      );
      class CreateProductParamDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '参数模板名称' }),
          (0, class_validator_1.IsNotEmpty)({ message: '名称不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductParamDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '参数值', type: [ParamTpye] }),
          (0, class_validator_1.IsNotEmpty)({ message: '参数值不能为空' }),
          __metadata('design:type', Array),
        ],
        CreateProductParamDto.prototype,
        'params',
        void 0,
      );
      exports.CreateProductParamDto = CreateProductParamDto;

      /***/
    },
    /* 130 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateProductParamDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_product_param_dto_1 = __webpack_require__(129);
      class UpdateProductParamDto extends (0, swagger_1.PartialType)(
        create_product_param_dto_1.CreateProductParamDto,
      ) {}
      exports.UpdateProductParamDto = UpdateProductParamDto;

      /***/
    },
    /* 131 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryProductParamDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryProductParamDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '模板名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryProductParamDto.prototype,
        'name',
        void 0,
      );
      exports.QueryProductParamDto = QueryProductParamDto;

      /***/
    },
    /* 132 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductSkuModule = void 0;
      const common_1 = __webpack_require__(7);
      const product_sku_service_1 = __webpack_require__(133);
      const product_sku_controller_1 = __webpack_require__(134);
      let ProductSkuModule = class ProductSkuModule {};
      ProductSkuModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [product_sku_controller_1.ProductSkuController],
            providers: [product_sku_service_1.ProductSkuService],
          }),
        ],
        ProductSkuModule,
      );
      exports.ProductSkuModule = ProductSkuModule;

      /***/
    },
    /* 133 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductSkuService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const product_sku_attr_model_1 = __webpack_require__(47);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let ProductSkuService = class ProductSkuService {
        constructor(productSkuAttrModel) {
          this.productSkuAttrModel = productSkuAttrModel;
        }
        async create(createProductSkuDto) {
          return await this.productSkuAttrModel.create(createProductSkuDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.productSkuAttrModel
            .find({ name: { $regex: new RegExp(parameters.name, 'i') } })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.productSkuAttrModel.findById(id);
        }
        async update(id, updateProductSkuDto) {
          return await this.productSkuAttrModel.findByIdAndUpdate(
            id,
            updateProductSkuDto,
          );
        }
        async remove(id) {
          return await this.productSkuAttrModel.findByIdAndDelete(id);
        }
      };
      ProductSkuService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              product_sku_attr_model_1.ProductSkuAttr,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        ProductSkuService,
      );
      exports.ProductSkuService = ProductSkuService;

      /***/
    },
    /* 134 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductSkuController = void 0;
      const common_1 = __webpack_require__(7);
      const product_sku_service_1 = __webpack_require__(133);
      const create_product_sku_dto_1 = __webpack_require__(135);
      const update_product_sku_dto_1 = __webpack_require__(136);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const query_product_sku_dto_1 = __webpack_require__(137);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      let ProductSkuController = class ProductSkuController {
        constructor(productSkuService) {
          this.productSkuService = productSkuService;
        }
        async create(createProductSkuDto) {
          const res = await this.productSkuService.create(createProductSkuDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.productSkuService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.productSkuService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateProductSkuDto) {
          const res = await this.productSkuService.update(
            id,
            updateProductSkuDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.productSkuService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '添加产品规格模板' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_product_sku_dto_1.CreateProductSkuDto !==
                'undefined' && create_product_sku_dto_1.CreateProductSkuDto) ===
            'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductSkuController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '产品规格模板列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_product_sku_dto_1.QueryProductSkuDto !==
                'undefined' && query_product_sku_dto_1.QueryProductSkuDto) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductSkuController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '模板id' }),
          (0, swagger_1.ApiOperation)({ summary: '产品规格模板详情' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductSkuController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '模板id' }),
          (0, swagger_1.ApiOperation)({ summary: '更新产品规格模板' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_c =
              typeof update_product_sku_dto_1.UpdateProductSkuDto !==
                'undefined' && update_product_sku_dto_1.UpdateProductSkuDto) ===
            'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductSkuController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '模板id' }),
          (0, swagger_1.ApiOperation)({ summary: '删除产品规格模板' }),
          __param(0, (0, common_1.Param)('id')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductSkuController.prototype,
        'remove',
        null,
      );
      ProductSkuController = __decorate(
        [
          (0, swagger_1.ApiTags)('商品规格模板'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('productSku'),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof product_sku_service_1.ProductSkuService !== 'undefined' &&
              product_sku_service_1.ProductSkuService) === 'function'
              ? _d
              : Object,
          ]),
        ],
        ProductSkuController,
      );
      exports.ProductSkuController = ProductSkuController;

      /***/
    },
    /* 135 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateProductSkuDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class CreateProductSkuDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格名称' }),
          (0, class_validator_1.IsNotEmpty)({ message: '名称不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductSkuDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格值', type: Array }),
          (0, class_validator_1.IsNotEmpty)({ message: '规格值不能为空' }),
          __metadata('design:type', Array),
        ],
        CreateProductSkuDto.prototype,
        'values',
        void 0,
      );
      exports.CreateProductSkuDto = CreateProductSkuDto;

      /***/
    },
    /* 136 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateProductSkuDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_product_sku_dto_1 = __webpack_require__(135);
      class UpdateProductSkuDto extends (0, swagger_1.PartialType)(
        create_product_sku_dto_1.CreateProductSkuDto,
      ) {}
      exports.UpdateProductSkuDto = UpdateProductSkuDto;

      /***/
    },
    /* 137 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryProductSkuDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryProductSkuDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '规格名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryProductSkuDto.prototype,
        'name',
        void 0,
      );
      exports.QueryProductSkuDto = QueryProductSkuDto;

      /***/
    },
    /* 138 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductTopicModule = void 0;
      const common_1 = __webpack_require__(7);
      const product_topic_service_1 = __webpack_require__(139);
      const product_topic_controller_1 = __webpack_require__(140);
      let ProductTopicModule = class ProductTopicModule {};
      ProductTopicModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [product_topic_controller_1.ProductTopicController],
            providers: [product_topic_service_1.ProductTopicService],
          }),
        ],
        ProductTopicModule,
      );
      exports.ProductTopicModule = ProductTopicModule;

      /***/
    },
    /* 139 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductTopicService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const ResponseResultModel_1 = __webpack_require__(11);
      const product_topic_model_1 = __webpack_require__(49);
      const mongoose_1 = __webpack_require__(82);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let ProductTopicService = class ProductTopicService {
        constructor(productTopicModel) {
          this.productTopicModel = productTopicModel;
        }
        async create(createProductTopicDto) {
          const isObjID = (0, mongoose_1.isValidObjectId)(
            createProductTopicDto.category,
          );
          if (!isObjID)
            throw new ResponseResultModel_1.ApiFail(101, '分类id不存在');
          return await this.productTopicModel.create(createProductTopicDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.productTopicModel
            .find({ name: { $regex: new RegExp(parameters.title, 'i') } })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.productTopicModel.findById(id);
        }
        async update(id, updateProductTopicDto) {
          return await this.productTopicModel.findByIdAndUpdate(
            id,
            updateProductTopicDto,
          );
        }
        async remove(id) {
          return this.productTopicModel.findOneAndDelete({ _id: id });
        }
      };
      ProductTopicService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              product_topic_model_1.ProductTopic,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        ProductTopicService,
      );
      exports.ProductTopicService = ProductTopicService;

      /***/
    },
    /* 140 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e, _f;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductTopicController = void 0;
      const common_1 = __webpack_require__(7);
      const product_topic_service_1 = __webpack_require__(139);
      const create_product_topic_dto_1 = __webpack_require__(141);
      const update_product_topic_dto_1 = __webpack_require__(142);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const query_product_topic_dto_1 = __webpack_require__(143);
      const ResponseResultModel_1 = __webpack_require__(11);
      let ProductTopicController = class ProductTopicController {
        constructor(productTopicService) {
          this.productTopicService = productTopicService;
        }
        async create(createProductTopicDto) {
          const res = await this.productTopicService.create(
            createProductTopicDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.productTopicService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          return this.productTopicService.findOne(id);
        }
        async update(id, updateProductTopicDto) {
          return this.productTopicService.update(id, updateProductTopicDto);
        }
        async remove(id) {
          return this.productTopicService.remove(id);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增产品专题' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_product_topic_dto_1.CreateProductTopicDto !==
                'undefined' &&
              create_product_topic_dto_1.CreateProductTopicDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        ProductTopicController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '产品专题列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof query_product_topic_dto_1.QueryProductTopicDto !==
                'undefined' &&
              query_product_topic_dto_1.QueryProductTopicDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        ProductTopicController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '产品专题详情' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '产品专题id' }),
          __param(0, (0, common_1.Param)('id')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductTopicController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新产品专题信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '产品专题id' }),
          __param(0, (0, common_1.Param)('id')),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_e =
              typeof update_product_topic_dto_1.UpdateProductTopicDto !==
                'undefined' &&
              update_product_topic_dto_1.UpdateProductTopicDto) === 'function'
              ? _e
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductTopicController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除产品专题' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '产品专题id' }),
          __param(0, (0, common_1.Param)('id')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductTopicController.prototype,
        'remove',
        null,
      );
      ProductTopicController = __decorate(
        [
          (0, swagger_1.ApiTags)('商品专题'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('productTopic'),
          __metadata('design:paramtypes', [
            typeof (_f =
              typeof product_topic_service_1.ProductTopicService !==
                'undefined' && product_topic_service_1.ProductTopicService) ===
            'function'
              ? _f
              : Object,
          ]),
        ],
        ProductTopicController,
      );
      exports.ProductTopicController = ProductTopicController;

      /***/
    },
    /* 141 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateProductTopicDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class CreateProductTopicDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '标题' }),
          (0, class_validator_1.IsNotEmpty)({ message: '标题不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductTopicDto.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '大标题' }),
          (0, class_validator_1.IsNotEmpty)({ message: '大标题不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductTopicDto.prototype,
        'bigTitle',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '描述' }),
          (0, class_validator_1.IsNotEmpty)({ message: '描述不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductTopicDto.prototype,
        'description',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '图片' }),
          (0, class_validator_1.IsNotEmpty)({ message: '图片不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductTopicDto.prototype,
        'pic',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '产品分类id' }),
          (0, class_validator_1.IsNotEmpty)({ message: '分类id不能为空' }),
          __metadata('design:type', String),
        ],
        CreateProductTopicDto.prototype,
        'category',
        void 0,
      );
      exports.CreateProductTopicDto = CreateProductTopicDto;

      /***/
    },
    /* 142 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateProductTopicDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_product_topic_dto_1 = __webpack_require__(141);
      class UpdateProductTopicDto extends (0, swagger_1.PartialType)(
        create_product_topic_dto_1.CreateProductTopicDto,
      ) {}
      exports.UpdateProductTopicDto = UpdateProductTopicDto;

      /***/
    },
    /* 143 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryProductTopicDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryProductTopicDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '标题标题', required: false }),
          __metadata('design:type', String),
        ],
        QueryProductTopicDto.prototype,
        'title',
        void 0,
      );
      exports.QueryProductTopicDto = QueryProductTopicDto;

      /***/
    },
    /* 144 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.BannerModule = void 0;
      const common_1 = __webpack_require__(7);
      const banner_service_1 = __webpack_require__(145);
      const banner_controller_1 = __webpack_require__(146);
      let BannerModule = class BannerModule {};
      BannerModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [banner_controller_1.BannerController],
            providers: [banner_service_1.BannerService],
          }),
        ],
        BannerModule,
      );
      exports.BannerModule = BannerModule;

      /***/
    },
    /* 145 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.BannerService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const ResponseResultModel_1 = __webpack_require__(11);
      const banner_model_1 = __webpack_require__(27);
      const mongoose_1 = __webpack_require__(82);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let BannerService = class BannerService {
        constructor(bannerModel) {
          this.bannerModel = bannerModel;
        }
        async create(createBannerDto) {
          if (
            !(0, mongoose_1.isValidObjectId)(createBannerDto.productId) &&
            createBannerDto.productId
          )
            throw new ResponseResultModel_1.ApiFail(101, '产品id不存在');
          return await this.bannerModel.create(createBannerDto);
        }
        async findAll(parameters) {
          var _a;
          let total = 0;
          const result = await this.bannerModel
            .find({
              $or: [
                {
                  name: { $regex: new RegExp(parameters.name, 'i') },
                  status:
                    (_a = parameters.status) !== null && _a !== void 0
                      ? _a
                      : { $ne: parameters.status },
                },
              ],
            })
            .populate({ path: 'product', select: ['title', '_id'] })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.bannerModel.findById(id);
        }
        async update(id, updateBannerDto) {
          return await this.bannerModel.findByIdAndUpdate(id, updateBannerDto);
        }
        async remove(id) {
          return await this.bannerModel.findByIdAndDelete(id);
        }
        async changeStatus(id, status) {
          return await this.bannerModel.findByIdAndUpdate(id, { status });
        }
      };
      BannerService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(banner_model_1.Banner),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        BannerService,
      );
      exports.BannerService = BannerService;

      /***/
    },
    /* 146 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.BannerController = void 0;
      const common_1 = __webpack_require__(7);
      const passport_1 = __webpack_require__(58);
      const swagger_1 = __webpack_require__(2);
      const parse_id_pipe_1 = __webpack_require__(81);
      const ResponseResultModel_1 = __webpack_require__(11);
      const banner_service_1 = __webpack_require__(145);
      const change_banner_status_dto_1 = __webpack_require__(147);
      const create_banner_dto_1 = __webpack_require__(148);
      const query_banner_dto_1 = __webpack_require__(149);
      const update_banner_dto_1 = __webpack_require__(150);
      let BannerController = class BannerController {
        constructor(bannerService) {
          this.bannerService = bannerService;
        }
        async create(createBannerDto) {
          const res = await this.bannerService.create(createBannerDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.bannerService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.bannerService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateBannerDto) {
          const res = await this.bannerService.update(id, updateBannerDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.bannerService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async changeStatus(id, changeBannerStatusDto) {
          const res = await this.bannerService.changeStatus(
            id,
            changeBannerStatusDto.status,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增Banner' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_banner_dto_1.CreateBannerDto !== 'undefined' &&
              create_banner_dto_1.CreateBannerDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        BannerController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: 'Banner列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof query_banner_dto_1.QueryBannerDto !== 'undefined' &&
              query_banner_dto_1.QueryBannerDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        BannerController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: 'Banner详情' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: 'BannerId' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_e = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _e
              : Object,
          ),
        ],
        BannerController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新Banner信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: 'BannerId' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_f =
              typeof update_banner_dto_1.UpdateBannerDto !== 'undefined' &&
              update_banner_dto_1.UpdateBannerDto) === 'function'
              ? _f
              : Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_g = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _g
              : Object,
          ),
        ],
        BannerController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除Banner' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: 'BannerId' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata(
            'design:returntype',
            typeof (_h = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _h
              : Object,
          ),
        ],
        BannerController.prototype,
        'remove',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)(':id/changeStatus'),
          (0, swagger_1.ApiOperation)({ summary: '改变banner状态' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: 'BannerId' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_j =
              typeof change_banner_status_dto_1.ChangeBannerStatusDto !==
                'undefined' &&
              change_banner_status_dto_1.ChangeBannerStatusDto) === 'function'
              ? _j
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        BannerController.prototype,
        'changeStatus',
        null,
      );
      BannerController = __decorate(
        [
          (0, swagger_1.ApiTags)('Banner管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('banner'),
          __metadata('design:paramtypes', [
            typeof (_k =
              typeof banner_service_1.BannerService !== 'undefined' &&
              banner_service_1.BannerService) === 'function'
              ? _k
              : Object,
          ]),
        ],
        BannerController,
      );
      exports.BannerController = BannerController;

      /***/
    },
    /* 147 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ChangeBannerStatusDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const banner_enum_1 = __webpack_require__(28);
      class ChangeBannerStatusDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '状态',
            enum: banner_enum_1.BannerStatus,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof banner_enum_1.BannerStatus !== 'undefined' &&
              banner_enum_1.BannerStatus) === 'function'
              ? _a
              : Object,
          ),
        ],
        ChangeBannerStatusDto.prototype,
        'status',
        void 0,
      );
      exports.ChangeBannerStatusDto = ChangeBannerStatusDto;

      /***/
    },
    /* 148 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateBannerDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      const banner_enum_1 = __webpack_require__(28);
      class CreateBannerDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, class_validator_1.IsNotEmpty)({ message: '名称不能为空' }),
          __metadata('design:type', String),
        ],
        CreateBannerDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '类型', enum: [1, 2, 3] }),
          (0, class_validator_1.IsNotEmpty)({ message: '类型不能为空' }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof banner_enum_1.BannerType !== 'undefined' &&
              banner_enum_1.BannerType) === 'function'
              ? _a
              : Object,
          ),
        ],
        CreateBannerDto.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '图片' }),
          (0, class_validator_1.IsNotEmpty)({ message: '图片不能为空' }),
          __metadata('design:type', String),
        ],
        CreateBannerDto.prototype,
        'image',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '链接' }),
          __metadata('design:type', String),
        ],
        CreateBannerDto.prototype,
        'url',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '关联产品id', default: null }),
          __metadata('design:type', String),
        ],
        CreateBannerDto.prototype,
        'productId',
        void 0,
      );
      exports.CreateBannerDto = CreateBannerDto;

      /***/
    },
    /* 149 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryBannerDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const banner_enum_1 = __webpack_require__(28);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryBannerDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryBannerDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '状态',
            enum: banner_enum_1.BannerStatus,
            required: false,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof banner_enum_1.BannerStatus !== 'undefined' &&
              banner_enum_1.BannerStatus) === 'function'
              ? _a
              : Object,
          ),
        ],
        QueryBannerDto.prototype,
        'status',
        void 0,
      );
      exports.QueryBannerDto = QueryBannerDto;

      /***/
    },
    /* 150 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateBannerDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_banner_dto_1 = __webpack_require__(148);
      class UpdateBannerDto extends (0, swagger_1.PartialType)(
        create_banner_dto_1.CreateBannerDto,
      ) {}
      exports.UpdateBannerDto = UpdateBannerDto;

      /***/
    },
    /* 151 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.LibraryCategoryModule = void 0;
      const common_1 = __webpack_require__(7);
      const library_category_service_1 = __webpack_require__(152);
      const library_category_controller_1 = __webpack_require__(153);
      let LibraryCategoryModule = class LibraryCategoryModule {};
      LibraryCategoryModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [
              library_category_controller_1.LibraryCategoryController,
            ],
            providers: [library_category_service_1.LibraryCategoryService],
          }),
        ],
        LibraryCategoryModule,
      );
      exports.LibraryCategoryModule = LibraryCategoryModule;

      /***/
    },
    /* 152 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.LibraryCategoryService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const library_category_model_1 = __webpack_require__(39);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let LibraryCategoryService = class LibraryCategoryService {
        constructor(libraryCategoryModel) {
          this.libraryCategoryModel = libraryCategoryModel;
        }
        async create(createLibraryCategoryDto) {
          return this.libraryCategoryModel.create(createLibraryCategoryDto);
        }
        async findAll() {
          return this.libraryCategoryModel.find();
        }
        async findOne(id) {
          return this.libraryCategoryModel.findById(id);
        }
        async update(id, updateLibraryCategoryDto) {
          return this.libraryCategoryModel.findByIdAndUpdate(
            id,
            updateLibraryCategoryDto,
          );
        }
        async remove(id) {
          return this.libraryCategoryModel.findByIdAndDelete(id);
        }
      };
      LibraryCategoryService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              library_category_model_1.LibraryCategory,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        LibraryCategoryService,
      );
      exports.LibraryCategoryService = LibraryCategoryService;

      /***/
    },
    /* 153 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.LibraryCategoryController = void 0;
      const common_1 = __webpack_require__(7);
      const library_category_service_1 = __webpack_require__(152);
      const create_library_category_dto_1 = __webpack_require__(154);
      const update_library_category_dto_1 = __webpack_require__(155);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      let LibraryCategoryController = class LibraryCategoryController {
        constructor(libraryCategoryService) {
          this.libraryCategoryService = libraryCategoryService;
        }
        async create(createLibraryCategoryDto) {
          const res = await this.libraryCategoryService.create(
            createLibraryCategoryDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll() {
          const res = await this.libraryCategoryService.findAll();
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.libraryCategoryService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        update(id, updateLibraryCategoryDto) {
          const res = this.libraryCategoryService.update(
            id,
            updateLibraryCategoryDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.libraryCategoryService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增文件分类' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_library_category_dto_1.CreateLibraryCategoryDto !==
                'undefined' &&
              create_library_category_dto_1.CreateLibraryCategoryDto) ===
            'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        LibraryCategoryController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '文件分类列表' }),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', []),
          __metadata('design:returntype', Promise),
        ],
        LibraryCategoryController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '文件分类信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '文件分类id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        LibraryCategoryController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新文件分类' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '文件分类id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_b =
              typeof update_library_category_dto_1.UpdateLibraryCategoryDto !==
                'undefined' &&
              update_library_category_dto_1.UpdateLibraryCategoryDto) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', void 0),
        ],
        LibraryCategoryController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除文件分类' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '文件分类id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        LibraryCategoryController.prototype,
        'remove',
        null,
      );
      LibraryCategoryController = __decorate(
        [
          (0, swagger_1.ApiTags)('媒体库分类'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('libraryCategory'),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof library_category_service_1.LibraryCategoryService !==
                'undefined' &&
              library_category_service_1.LibraryCategoryService) === 'function'
              ? _c
              : Object,
          ]),
        ],
        LibraryCategoryController,
      );
      exports.LibraryCategoryController = LibraryCategoryController;

      /***/
    },
    /* 154 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateLibraryCategoryDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class CreateLibraryCategoryDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件名称' }),
          __metadata('design:type', String),
        ],
        CreateLibraryCategoryDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件名称', default: null }),
          __metadata('design:type', String),
        ],
        CreateLibraryCategoryDto.prototype,
        'parentId',
        void 0,
      );
      exports.CreateLibraryCategoryDto = CreateLibraryCategoryDto;

      /***/
    },
    /* 155 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateLibraryCategoryDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_library_category_dto_1 = __webpack_require__(154);
      class UpdateLibraryCategoryDto extends (0, swagger_1.PartialType)(
        create_library_category_dto_1.CreateLibraryCategoryDto,
      ) {}
      exports.UpdateLibraryCategoryDto = UpdateLibraryCategoryDto;

      /***/
    },
    /* 156 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MediaLibraryModule = void 0;
      const common_1 = __webpack_require__(7);
      const media_library_service_1 = __webpack_require__(157);
      const media_library_controller_1 = __webpack_require__(158);
      let MediaLibraryModule = class MediaLibraryModule {};
      MediaLibraryModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [media_library_controller_1.MediaLibraryController],
            providers: [media_library_service_1.MediaLibraryService],
          }),
        ],
        MediaLibraryModule,
      );
      exports.MediaLibraryModule = MediaLibraryModule;

      /***/
    },
    /* 157 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MediaLibraryService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const media_library_model_1 = __webpack_require__(40);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let MediaLibraryService = class MediaLibraryService {
        constructor(mediaLibraryModel) {
          this.mediaLibraryModel = mediaLibraryModel;
        }
        async create(createMediaLibraryDto) {
          return await this.mediaLibraryModel.create(createMediaLibraryDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.mediaLibraryModel
            .find({
              name: { $regex: new RegExp(parameters.name, 'i') },
              categoryId: parameters.categoryId,
            })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return this.mediaLibraryModel.findById(id);
        }
        async update(id, updateMediaLibraryDto) {
          return await this.mediaLibraryModel.findByIdAndUpdate(
            id,
            updateMediaLibraryDto,
          );
        }
        async remove(id) {
          return await this.mediaLibraryModel.findByIdAndDelete(id);
        }
      };
      MediaLibraryService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              media_library_model_1.MediaLibrary,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        MediaLibraryService,
      );
      exports.MediaLibraryService = MediaLibraryService;

      /***/
    },
    /* 158 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MediaLibraryController = void 0;
      const common_1 = __webpack_require__(7);
      const media_library_service_1 = __webpack_require__(157);
      const create_media_library_dto_1 = __webpack_require__(159);
      const update_media_library_dto_1 = __webpack_require__(160);
      const passport_1 = __webpack_require__(58);
      const swagger_1 = __webpack_require__(2);
      const query_media_library_dto_1 = __webpack_require__(161);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      let MediaLibraryController = class MediaLibraryController {
        constructor(mediaLibraryService) {
          this.mediaLibraryService = mediaLibraryService;
        }
        async create(createMediaLibraryDto) {
          const res = await this.mediaLibraryService.create(
            createMediaLibraryDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.mediaLibraryService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.mediaLibraryService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateMediaLibraryDto) {
          const res = await this.mediaLibraryService.update(
            id,
            updateMediaLibraryDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.mediaLibraryService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '添加媒体文件' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_media_library_dto_1.CreateMediaLibraryDto !==
                'undefined' &&
              create_media_library_dto_1.CreateMediaLibraryDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        MediaLibraryController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '媒体文件列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_media_library_dto_1.QueryMediaLibraryDto !==
                'undefined' &&
              query_media_library_dto_1.QueryMediaLibraryDto) === 'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        MediaLibraryController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '媒体文件信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '媒体文件id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        MediaLibraryController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '媒体文件信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '媒体文件id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_c =
              typeof update_media_library_dto_1.UpdateMediaLibraryDto !==
                'undefined' &&
              update_media_library_dto_1.UpdateMediaLibraryDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        MediaLibraryController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '媒体文件信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '媒体文件id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        MediaLibraryController.prototype,
        'remove',
        null,
      );
      MediaLibraryController = __decorate(
        [
          (0, swagger_1.ApiTags)('媒体库文件管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('mediaLibrary'),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof media_library_service_1.MediaLibraryService !==
                'undefined' && media_library_service_1.MediaLibraryService) ===
            'function'
              ? _d
              : Object,
          ]),
        ],
        MediaLibraryController,
      );
      exports.MediaLibraryController = MediaLibraryController;

      /***/
    },
    /* 159 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateMediaLibraryDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class CreateMediaLibraryDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件名称' }),
          __metadata('design:type', String),
        ],
        CreateMediaLibraryDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件分类' }),
          __metadata('design:type', String),
        ],
        CreateMediaLibraryDto.prototype,
        'categoryId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件地址' }),
          __metadata('design:type', String),
        ],
        CreateMediaLibraryDto.prototype,
        'url',
        void 0,
      );
      exports.CreateMediaLibraryDto = CreateMediaLibraryDto;

      /***/
    },
    /* 160 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateMediaLibraryDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_media_library_dto_1 = __webpack_require__(159);
      class UpdateMediaLibraryDto extends (0, swagger_1.PartialType)(
        create_media_library_dto_1.CreateMediaLibraryDto,
      ) {}
      exports.UpdateMediaLibraryDto = UpdateMediaLibraryDto;

      /***/
    },
    /* 161 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryMediaLibraryDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryMediaLibraryDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryMediaLibraryDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '文件分类id',
            required: false,
            default: null,
          }),
          __metadata('design:type', String),
        ],
        QueryMediaLibraryDto.prototype,
        'categoryId',
        void 0,
      );
      exports.QueryMediaLibraryDto = QueryMediaLibraryDto;

      /***/
    },
    /* 162 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassifyNavigationModule = void 0;
      const common_1 = __webpack_require__(7);
      const classify_navigation_service_1 = __webpack_require__(163);
      const classify_navigation_controller_1 = __webpack_require__(164);
      let ClassifyNavigationModule = class ClassifyNavigationModule {};
      ClassifyNavigationModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [
              classify_navigation_controller_1.ClassifyNavigationController,
            ],
            providers: [
              classify_navigation_service_1.ClassifyNavigationService,
            ],
          }),
        ],
        ClassifyNavigationModule,
      );
      exports.ClassifyNavigationModule = ClassifyNavigationModule;

      /***/
    },
    /* 163 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassifyNavigationService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const classify_navigation_model_1 = __webpack_require__(38);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let ClassifyNavigationService = class ClassifyNavigationService {
        constructor(classifyNavigationModel) {
          this.classifyNavigationModel = classifyNavigationModel;
        }
        async create(createClassifyNavigationDto) {
          return await this.classifyNavigationModel.create(
            createClassifyNavigationDto,
          );
        }
        async findAll(parameters) {
          var _a, _b;
          let total = 0;
          const result = await this.classifyNavigationModel
            .find({
              $or: [
                {
                  name: { $regex: new RegExp(parameters.name, 'i') },
                  status:
                    (_a = parameters.status) !== null && _a !== void 0
                      ? _a
                      : { $ne: parameters.status },
                  type:
                    (_b = parameters.type) !== null && _b !== void 0
                      ? _b
                      : { $ne: parameters.type },
                },
              ],
            })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .sort({ sort: 1 })
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.classifyNavigationModel.find({ _id: id });
        }
        async update(id, updateClassifyNavigationDto) {
          return await this.classifyNavigationModel.findByIdAndUpdate(
            id,
            updateClassifyNavigationDto,
          );
        }
        async remove(id) {
          return await this.classifyNavigationModel.findByIdAndDelete(id);
        }
        async changeStatus(id, status) {
          return await this.classifyNavigationModel.findByIdAndUpdate(id, {
            status,
          });
        }
      };
      ClassifyNavigationService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              classify_navigation_model_1.ClassifyNavigation,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        ClassifyNavigationService,
      );
      exports.ClassifyNavigationService = ClassifyNavigationService;

      /***/
    },
    /* 164 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassifyNavigationController = void 0;
      const common_1 = __webpack_require__(7);
      const passport_1 = __webpack_require__(58);
      const swagger_1 = __webpack_require__(2);
      const parse_id_pipe_1 = __webpack_require__(81);
      const ResponseResultModel_1 = __webpack_require__(11);
      const classify_navigation_service_1 = __webpack_require__(163);
      const change_classify_navigation_status_dto_1 = __webpack_require__(165);
      const create_classify_navigation_dto_1 = __webpack_require__(166);
      const query_classify_navigation_dto_1 = __webpack_require__(167);
      const update_classify_navigation_dto_1 = __webpack_require__(168);
      let ClassifyNavigationController = class ClassifyNavigationController {
        constructor(classifyNavigationService) {
          this.classifyNavigationService = classifyNavigationService;
        }
        async create(createClassifyNavigationDto) {
          const res = await this.classifyNavigationService.create(
            createClassifyNavigationDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.classifyNavigationService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.classifyNavigationService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateClassifyNavigationDto) {
          const res = await this.classifyNavigationService.update(
            id,
            updateClassifyNavigationDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.classifyNavigationService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async changeStatus(id, changeClassifyNavigationStatusDto) {
          const res = await this.classifyNavigationService.changeStatus(
            id,
            changeClassifyNavigationStatusDto.status,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增分类导航' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_classify_navigation_dto_1.CreateClassifyNavigationDto !==
                'undefined' &&
              create_classify_navigation_dto_1.CreateClassifyNavigationDto) ===
            'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ClassifyNavigationController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '分类导航列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_classify_navigation_dto_1.QueryClassifyNavigationDto !==
                'undefined' &&
              query_classify_navigation_dto_1.QueryClassifyNavigationDto) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ClassifyNavigationController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '分类导航信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '分类导航id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ClassifyNavigationController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新导航信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '分类导航id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_c =
              typeof update_classify_navigation_dto_1.UpdateClassifyNavigationDto !==
                'undefined' &&
              update_classify_navigation_dto_1.UpdateClassifyNavigationDto) ===
            'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ClassifyNavigationController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除导航信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '分类导航id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ClassifyNavigationController.prototype,
        'remove',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)(':id/changeStatus'),
          (0, swagger_1.ApiOperation)({ summary: '改变状态' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '分类导航id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_d =
              typeof change_classify_navigation_status_dto_1.ChangeClassifyNavigationStatusDto !==
                'undefined' &&
              change_classify_navigation_status_dto_1.ChangeClassifyNavigationStatusDto) ===
            'function'
              ? _d
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ClassifyNavigationController.prototype,
        'changeStatus',
        null,
      );
      ClassifyNavigationController = __decorate(
        [
          (0, swagger_1.ApiTags)('分类导航管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('classifyNavigation'),
          __metadata('design:paramtypes', [
            typeof (_e =
              typeof classify_navigation_service_1.ClassifyNavigationService !==
                'undefined' &&
              classify_navigation_service_1.ClassifyNavigationService) ===
            'function'
              ? _e
              : Object,
          ]),
        ],
        ClassifyNavigationController,
      );
      exports.ClassifyNavigationController = ClassifyNavigationController;

      /***/
    },
    /* 165 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ChangeClassifyNavigationStatusDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class ChangeClassifyNavigationStatusDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '状态' }),
          __metadata('design:type', Boolean),
        ],
        ChangeClassifyNavigationStatusDto.prototype,
        'status',
        void 0,
      );
      exports.ChangeClassifyNavigationStatusDto =
        ChangeClassifyNavigationStatusDto;

      /***/
    },
    /* 166 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateClassifyNavigationDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class CreateClassifyNavigationDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          __metadata('design:type', String),
        ],
        CreateClassifyNavigationDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '导航图片' }),
          __metadata('design:type', String),
        ],
        CreateClassifyNavigationDto.prototype,
        'pic',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '导航类型',
            default: 1,
            description: '1: 页面路劲，2: 网页地址',
          }),
          __metadata('design:type', Number),
        ],
        CreateClassifyNavigationDto.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '页面路劲' }),
          __metadata('design:type', String),
        ],
        CreateClassifyNavigationDto.prototype,
        'pagePath',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '网页地址' }),
          __metadata('design:type', String),
        ],
        CreateClassifyNavigationDto.prototype,
        'url',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '排序', default: 1 }),
          __metadata('design:type', Number),
        ],
        CreateClassifyNavigationDto.prototype,
        'sort',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '备注' }),
          __metadata('design:type', String),
        ],
        CreateClassifyNavigationDto.prototype,
        'remark',
        void 0,
      );
      exports.CreateClassifyNavigationDto = CreateClassifyNavigationDto;

      /***/
    },
    /* 167 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryClassifyNavigationDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryClassifyNavigationDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryClassifyNavigationDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '状态', required: false }),
          __metadata('design:type', Boolean),
        ],
        QueryClassifyNavigationDto.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            name: '类型',
            required: false,
            description: '1: 页面， 2: 网站',
          }),
          __metadata('design:type', Number),
        ],
        QueryClassifyNavigationDto.prototype,
        'type',
        void 0,
      );
      exports.QueryClassifyNavigationDto = QueryClassifyNavigationDto;

      /***/
    },
    /* 168 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateClassifyNavigationDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_classify_navigation_dto_1 = __webpack_require__(166);
      class UpdateClassifyNavigationDto extends (0, swagger_1.PartialType)(
        create_classify_navigation_dto_1.CreateClassifyNavigationDto,
      ) {}
      exports.UpdateClassifyNavigationDto = UpdateClassifyNavigationDto;

      /***/
    },
    /* 169 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserCollectionModule = void 0;
      const common_1 = __webpack_require__(7);
      const user_collection_service_1 = __webpack_require__(170);
      const user_collection_controller_1 = __webpack_require__(171);
      let UserCollectionModule = class UserCollectionModule {};
      UserCollectionModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [
              user_collection_controller_1.UserCollectionController,
            ],
            providers: [user_collection_service_1.UserCollectionService],
          }),
        ],
        UserCollectionModule,
      );
      exports.UserCollectionModule = UserCollectionModule;

      /***/
    },
    /* 170 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserCollectionService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const user_collection_model_1 = __webpack_require__(54);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let UserCollectionService = class UserCollectionService {
        constructor(userCollectionModel) {
          this.userCollectionModel = userCollectionModel;
        }
        async create(createUserCollectionDto) {
          return await this.userCollectionModel.create(createUserCollectionDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.userCollectionModel
            .find({
              userId: parameters.userId,
            })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async remove(id) {
          return await this.userCollectionModel.findByIdAndDelete(id);
        }
      };
      UserCollectionService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              user_collection_model_1.UserCollection,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        UserCollectionService,
      );
      exports.UserCollectionService = UserCollectionService;

      /***/
    },
    /* 171 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserCollectionController = void 0;
      const common_1 = __webpack_require__(7);
      const user_collection_service_1 = __webpack_require__(170);
      const create_user_collection_dto_1 = __webpack_require__(172);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const query_user_collection_dto_1 = __webpack_require__(173);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      let UserCollectionController = class UserCollectionController {
        constructor(userCollectionService) {
          this.userCollectionService = userCollectionService;
        }
        async create(createUserCollectionDto) {
          const res = await this.userCollectionService.create(
            createUserCollectionDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.userCollectionService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.userCollectionService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '添加会员收藏' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_user_collection_dto_1.CreateUserCollectionDto !==
                'undefined' &&
              create_user_collection_dto_1.CreateUserCollectionDto) ===
            'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserCollectionController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '获取会员收藏列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_user_collection_dto_1.QueryUserCollectionDto !==
                'undefined' &&
              query_user_collection_dto_1.QueryUserCollectionDto) === 'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserCollectionController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '收藏id' }),
          (0, swagger_1.ApiOperation)({ summary: '删除收藏信息' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        UserCollectionController.prototype,
        'remove',
        null,
      );
      UserCollectionController = __decorate(
        [
          (0, swagger_1.ApiTags)('会员收藏'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('userCollection'),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof user_collection_service_1.UserCollectionService !==
                'undefined' &&
              user_collection_service_1.UserCollectionService) === 'function'
              ? _c
              : Object,
          ]),
        ],
        UserCollectionController,
      );
      exports.UserCollectionController = UserCollectionController;

      /***/
    },
    /* 172 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateUserCollectionDto = void 0;
      class CreateUserCollectionDto {}
      exports.CreateUserCollectionDto = CreateUserCollectionDto;

      /***/
    },
    /* 173 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryUserCollectionDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryUserCollectionDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id' }),
          __metadata('design:type', String),
        ],
        QueryUserCollectionDto.prototype,
        'userId',
        void 0,
      );
      exports.QueryUserCollectionDto = QueryUserCollectionDto;

      /***/
    },
    /* 174 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ChatMessageModule = void 0;
      const common_1 = __webpack_require__(7);
      const chat_gateway_1 = __webpack_require__(175);
      let ChatMessageModule = class ChatMessageModule {};
      ChatMessageModule = __decorate(
        [
          (0, common_1.Module)({
            imports: [],
            controllers: [],
            providers: [chat_gateway_1.MessageGateway],
          }),
        ],
        ChatMessageModule,
      );
      exports.ChatMessageModule = ChatMessageModule;

      /***/
    },
    /* 175 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e, _f, _g;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MessageGateway = void 0;
      const websockets_1 = __webpack_require__(176);
      const common_1 = __webpack_require__(7);
      const socket_io_1 = __webpack_require__(177);
      const ws_1 = __webpack_require__(178);
      const chat_messages_model_1 = __webpack_require__(37);
      const nestjs_typegoose_1 = __webpack_require__(20);
      const typegoose_1 = __webpack_require__(23);
      const customer_service_model_1 = __webpack_require__(34);
      const chat_conversation_record_model_1 = __webpack_require__(33);
      let MessageGateway = class MessageGateway {
        constructor(
          customerServiceModel,
          chatMessagesModel,
          chatConversationRecordModel,
        ) {
          this.customerServiceModel = customerServiceModel;
          this.chatMessagesModel = chatMessagesModel;
          this.chatConversationRecordModel = chatConversationRecordModel;
          this.logger = new common_1.Logger('MessageGateway');
        }
        async handleConnectedCustomerService(payload) {
          const hasRecord = await this.chatConversationRecordModel.findOne({
            userId: payload.userId,
            customerServiceId: payload.customerServiceId,
          });
          if (!hasRecord) {
            this.chatConversationRecordModel.create({
              userId: payload.userId,
              customerServiceId: payload.customerServiceId,
            });
          }
        }
        async handleMessage(client, payload) {
          var _a;
          const hasCuservice = await this.customerServiceModel.findById(
            payload.targetId,
          );
          const res = await this.chatMessagesModel.create({
            user: payload.userId,
            target: payload.targetId,
            content:
              (_a =
                payload === null || payload === void 0
                  ? void 0
                  : payload.content) !== null && _a !== void 0
                ? _a
                : '',
            messageType: payload.messageType,
            userRef: hasCuservice ? 'User' : 'CustomerService',
            targetRef: hasCuservice ? 'CustomerService' : 'User',
            product:
              payload === null || payload === void 0 ? void 0 : payload.product,
          });
          const messageContent = await this.chatMessagesModel
            .findById(res._id)
            .populate({ path: 'user', select: ['name', 'avatar'] })
            .populate({ path: 'target', select: ['name', 'avatar'] });
          await this.chatConversationRecordModel.findOneAndUpdate(
            {
              $or: [
                {
                  userId: payload.userId,
                  customerServiceId: payload.targetId,
                },
                {
                  userId: payload.targetId,
                  customerServiceId: payload.userId,
                },
              ],
            },
            { messageContent: messageContent.content, $inc: { unreadNum: 1 } },
          );
          this.server.emit('onMessage', messageContent);
        }
        afterInit(server) {
          return this.logger.log(`Init: ${server}`);
        }
        handleDisconnect(client) {
          return this.logger.log(`Client disconnected: ${client.id}`);
        }
        handleConnection(client) {
          return this.logger.log(`Client connected: ${client.id}`);
        }
      };
      __decorate(
        [
          (0, websockets_1.WebSocketServer)(),
          __metadata(
            'design:type',
            typeof (_a = typeof ws_1.Server !== 'undefined' && ws_1.Server) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        MessageGateway.prototype,
        'server',
        void 0,
      );
      __decorate(
        [
          (0, websockets_1.SubscribeMessage)('connectedCustomerService'),
          __param(0, (0, websockets_1.MessageBody)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [Object]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _b
              : Object,
          ),
        ],
        MessageGateway.prototype,
        'handleConnectedCustomerService',
        null,
      );
      __decorate(
        [
          (0, websockets_1.SubscribeMessage)('sendMessage'),
          __param(1, (0, websockets_1.MessageBody)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof socket_io_1.Socket !== 'undefined' &&
              socket_io_1.Socket) === 'function'
              ? _c
              : Object,
            Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        MessageGateway.prototype,
        'handleMessage',
        null,
      );
      MessageGateway = __decorate(
        [
          (0, websockets_1.WebSocketGateway)({
            namespace: '/chat',
            allowEIO3: true,
            cors: {
              origin: /.*/,
              credentials: true,
            },
          }),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              customer_service_model_1.CustomerService,
            ),
          ),
          __param(
            1,
            (0, nestjs_typegoose_1.InjectModel)(
              chat_messages_model_1.ChatMessages,
            ),
          ),
          __param(
            2,
            (0, nestjs_typegoose_1.InjectModel)(
              chat_conversation_record_model_1.ChatConversationRecord,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_e =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _e
              : Object,
            typeof (_f =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _f
              : Object,
            typeof (_g =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _g
              : Object,
          ]),
        ],
        MessageGateway,
      );
      exports.MessageGateway = MessageGateway;

      /***/
    },
    /* 176 */
    /***/ (module) => {
      module.exports = require('@nestjs/websockets');

      /***/
    },
    /* 177 */
    /***/ (module) => {
      module.exports = require('socket.io');

      /***/
    },
    /* 178 */
    /***/ (module) => {
      module.exports = require('ws');

      /***/
    },
    /* 179 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.SettingsModule = void 0;
      const common_1 = __webpack_require__(7);
      const settings_service_1 = __webpack_require__(180);
      const settings_controller_1 = __webpack_require__(181);
      let SettingsModule = class SettingsModule {};
      SettingsModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [settings_controller_1.SettingsController],
            providers: [settings_service_1.SettingsService],
          }),
        ],
        SettingsModule,
      );
      exports.SettingsModule = SettingsModule;

      /***/
    },
    /* 180 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.SettingsService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const site_setting_model_1 = __webpack_require__(51);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let SettingsService = class SettingsService {
        constructor(settingModel) {
          this.settingModel = settingModel;
        }
        async findFileStorageSetting() {
          return await this.settingModel.find();
        }
        async setFileStorage(setFileStorageDto) {
          try {
            const res = await this.settingModel.find();
            if (res.length) {
              return await this.settingModel.updateOne({
                fileStorage: setFileStorageDto,
              });
            } else {
              return await this.settingModel.create({
                fileStorage: setFileStorageDto,
              });
            }
          } catch (err) {
            common_1.Logger.log(err, '文件存储设置失败');
          }
        }
      };
      SettingsService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              site_setting_model_1.SiteSettings,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        SettingsService,
      );
      exports.SettingsService = SettingsService;

      /***/
    },
    /* 181 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.SettingsController = void 0;
      const common_1 = __webpack_require__(7);
      const passport_1 = __webpack_require__(58);
      const swagger_1 = __webpack_require__(2);
      const ResponseResultModel_1 = __webpack_require__(11);
      const set_file_storage_dto_1 = __webpack_require__(182);
      const settings_service_1 = __webpack_require__(180);
      let SettingsController = class SettingsController {
        constructor(settingsService) {
          this.settingsService = settingsService;
        }
        async findFileStorageSetting() {
          const res = await this.settingsService.findFileStorageSetting();
          const data = res.length ? res[0].fileStorage : [];
          return (0, ResponseResultModel_1.apiSucceed)(data);
        }
        async setFileStorage(setFileStorageDto) {
          const res = await this.settingsService.setFileStorage(
            setFileStorageDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Get)('fileStorage'),
          (0, swagger_1.ApiOperation)({ summary: '获取文件存储设置项' }),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', []),
          __metadata('design:returntype', Promise),
        ],
        SettingsController.prototype,
        'findFileStorageSetting',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('fileStorage'),
          (0, swagger_1.ApiOperation)({ summary: '设置文件存储设置项' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof set_file_storage_dto_1.SetFileStorageDto !== 'undefined' &&
              set_file_storage_dto_1.SetFileStorageDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        SettingsController.prototype,
        'setFileStorage',
        null,
      );
      SettingsController = __decorate(
        [
          (0, swagger_1.ApiTags)('站点设置'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('settings'),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof settings_service_1.SettingsService !== 'undefined' &&
              settings_service_1.SettingsService) === 'function'
              ? _b
              : Object,
          ]),
        ],
        SettingsController,
      );
      exports.SettingsController = SettingsController;

      /***/
    },
    /* 182 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.SetFileStorageDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const fileStorageMode_enum_1 = __webpack_require__(52);
      class AliOssDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'region' }),
          __metadata('design:type', String),
        ],
        AliOssDto.prototype,
        'region',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'accessKeyId' }),
          __metadata('design:type', String),
        ],
        AliOssDto.prototype,
        'accessKeyId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'accessKeySecret' }),
          __metadata('design:type', String),
        ],
        AliOssDto.prototype,
        'accessKeySecret',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'bucket' }),
          __metadata('design:type', String),
        ],
        AliOssDto.prototype,
        'bucket',
        void 0,
      );
      class SetFileStorageDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '存储方式',
            enum: fileStorageMode_enum_1.FileStorageModeEnum,
            type: Number,
            default: fileStorageMode_enum_1.FileStorageModeEnum.LOCAL,
          }),
          __metadata(
            'design:type',
            typeof (_a =
              typeof fileStorageMode_enum_1.FileStorageModeEnum !==
                'undefined' && fileStorageMode_enum_1.FileStorageModeEnum) ===
              'function'
              ? _a
              : Object,
          ),
        ],
        SetFileStorageDto.prototype,
        'mode',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '阿里OSS', type: AliOssDto }),
          __metadata('design:type', AliOssDto),
        ],
        SetFileStorageDto.prototype,
        'aliOss',
        void 0,
      );
      exports.SetFileStorageDto = SetFileStorageDto;

      /***/
    },
    /* 183 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.OrderModule = void 0;
      const common_1 = __webpack_require__(7);
      const order_service_1 = __webpack_require__(184);
      const order_controller_1 = __webpack_require__(185);
      let OrderModule = class OrderModule {};
      OrderModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [order_controller_1.OrderController],
            providers: [order_service_1.OrderService],
          }),
        ],
        OrderModule,
      );
      exports.OrderModule = OrderModule;

      /***/
    },
    /* 184 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.OrderService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const orderStatus_enum_1 = __webpack_require__(43);
      const ResponseResultModel_1 = __webpack_require__(11);
      const order_model_1 = __webpack_require__(42);
      const nestjs_typegoose_1 = __webpack_require__(20);
      const mongodb_1 = __webpack_require__(89);
      let OrderService = class OrderService {
        constructor(orderModel) {
          this.orderModel = orderModel;
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.orderModel
            .aggregate([
              {
                $lookup: {
                  from: 'users',
                  foreignField: '_id',
                  localField: 'userId',
                  as: 'user',
                },
              },
              {
                $unwind: '$user',
              },
              {
                $lookup: {
                  from: 'products',
                  foreignField: '_id',
                  localField: 'products.productId',
                  as: 'info',
                },
              },
              {
                $project: {
                  userName: '$user.name',
                  userId: '$user._id',
                  orderNo: 1,
                  type: 1,
                  totalPrice: 1,
                  payment: 1,
                  paymentType: 1,
                  source: 1,
                  status: 1,
                  createdAt: 1,
                  products: '$info',
                  skus: '$products',
                },
              },
              {
                $match: {
                  userName: { $regex: new RegExp(parameters.userName, 'i') },
                  type: parameters.type
                    ? ~~parameters.type
                    : { $ne: parameters.type },
                  status: parameters.status
                    ? ~~parameters.status
                    : { $ne: parameters.status },
                  source: { $regex: new RegExp(parameters.source, 'i') },
                  'products.title': {
                    $regex: new RegExp(parameters.productName, 'i'),
                  },
                },
              },
              {
                $skip: ~~((parameters.pageNumber - 1) * parameters.pageSize),
              },
              {
                $limit: ~~parameters.pageSize,
              },
            ])
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async getUserOrders(parameters) {
          if (!parameters.pageNumber) {
            parameters.pageNumber = 1;
          }
          if (!parameters.pageSize) {
            parameters.pageSize = 10;
          }
          let total = 0;
          const result = await this.orderModel
            .aggregate([
              {
                $match: {
                  userId: new mongodb_1.ObjectId(parameters.userId),
                  _id: parameters.orderId
                    ? new mongodb_1.ObjectId(parameters.orderId)
                    : { $ne: null },
                  status: parameters.status
                    ? ~~parameters.status
                    : { $ne: parameters.status },
                },
              },
              {
                $lookup: {
                  from: 'useraddresses',
                  foreignField: '_id',
                  localField: 'addressId',
                  as: 'address',
                },
              },
              {
                $unwind: '$address',
              },
              {
                $lookup: {
                  from: 'products',
                  foreignField: '_id',
                  localField: 'products.productId',
                  as: 'info',
                },
              },
              {
                $project: {
                  addressName: '$address.name',
                  totalPrice: 1,
                  payment: 1,
                  createdAt: 1,
                  products: '$info',
                  skus: '$products',
                },
              },
              {
                $match: {
                  addressName: {
                    $regex: new RegExp(parameters.addressName, 'i'),
                  },
                },
              },
              {
                $skip: ~~((parameters.pageNumber - 1) * parameters.pageSize),
              },
              {
                $limit: ~~parameters.pageSize,
              },
            ])
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.orderModel.findById(id);
        }
        async remove(id) {
          return await this.orderModel.findByIdAndDelete(id);
        }
        async confirmDelivery(orderId) {
          const orderStatus = await this.orderModel.findById(orderId);
          if (orderStatus.status !== 2) {
            throw new ResponseResultModel_1.ApiFail(101, '该订单未支付!');
          }
          return this.orderModel.findByIdAndUpdate(orderId, {
            status: orderStatus_enum_1.OrderStatus.PENDING_TAKE,
          });
        }
      };
      OrderService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(order_model_1.Order)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        OrderService,
      );
      exports.OrderService = OrderService;

      /***/
    },
    /* 185 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.OrderController = void 0;
      const common_1 = __webpack_require__(7);
      const order_service_1 = __webpack_require__(184);
      const swagger_1 = __webpack_require__(2);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      const passport_1 = __webpack_require__(58);
      const query_order_dto_1 = __webpack_require__(186);
      const query_user_order_dto_1 = __webpack_require__(187);
      let OrderController = class OrderController {
        constructor(orderService) {
          this.orderService = orderService;
        }
        async findAll(parameters) {
          const res = await this.orderService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getUserOders(queryUserOrdersDto) {
          const res = await this.orderService.getUserOrders(queryUserOrdersDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.orderService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.orderService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async confirmDelivery(id) {
          const res = await this.orderService.confirmDelivery(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '获取订单列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof query_order_dto_1.QueryOrderDto !== 'undefined' &&
              query_order_dto_1.QueryOrderDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        OrderController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('/byUser'),
          (0, swagger_1.ApiOperation)({ summary: '获取用户订单列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_user_order_dto_1.QueryUserOrdersDto !==
                'undefined' && query_user_order_dto_1.QueryUserOrdersDto) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        OrderController.prototype,
        'getUserOders',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '获取订单详信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '订单id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        OrderController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除订单' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '订单id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        OrderController.prototype,
        'remove',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id/delivery'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '订单id' }),
          (0, swagger_1.ApiOperation)({ summary: '订单确认发货' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        OrderController.prototype,
        'confirmDelivery',
        null,
      );
      OrderController = __decorate(
        [
          (0, swagger_1.ApiTags)('订单模块'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('order'),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof order_service_1.OrderService !== 'undefined' &&
              order_service_1.OrderService) === 'function'
              ? _c
              : Object,
          ]),
        ],
        OrderController,
      );
      exports.OrderController = OrderController;

      /***/
    },
    /* 186 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryOrderDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryOrderDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ required: false, name: '用户名称' }),
          __metadata('design:type', String),
        ],
        QueryOrderDto.prototype,
        'userName',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ required: false, name: '商品名称' }),
          __metadata('design:type', String),
        ],
        QueryOrderDto.prototype,
        'productName',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            type: Number,
            required: false,
            name: '订单类型',
          }),
          __metadata('design:type', Number),
        ],
        QueryOrderDto.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            type: Number,
            required: false,
            name: '订单状态',
          }),
          __metadata('design:type', Number),
        ],
        QueryOrderDto.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            type: Number,
            required: false,
            name: '支付方式',
          }),
          __metadata('design:type', Number),
        ],
        QueryOrderDto.prototype,
        'paymentType',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ required: false, name: '订单来源' }),
          __metadata('design:type', String),
        ],
        QueryOrderDto.prototype,
        'source',
        void 0,
      );
      exports.QueryOrderDto = QueryOrderDto;

      /***/
    },
    /* 187 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryUserOrdersDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryUserOrdersDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '会员id' }),
          __metadata('design:type', String),
        ],
        QueryUserOrdersDto.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '订单id' }),
          __metadata('design:type', String),
        ],
        QueryUserOrdersDto.prototype,
        'orderId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '收货人名称' }),
          __metadata('design:type', String),
        ],
        QueryUserOrdersDto.prototype,
        'addressName',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '订单状态' }),
          __metadata('design:type', Number),
        ],
        QueryUserOrdersDto.prototype,
        'status',
        void 0,
      );
      exports.QueryUserOrdersDto = QueryUserOrdersDto;

      /***/
    },
    /* 188 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductCommentModule = void 0;
      const common_1 = __webpack_require__(7);
      const product_comment_service_1 = __webpack_require__(189);
      const product_comment_controller_1 = __webpack_require__(190);
      let ProductCommentModule = class ProductCommentModule {};
      ProductCommentModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [
              product_comment_controller_1.ProductCommentController,
            ],
            providers: [product_comment_service_1.ProductCommentService],
          }),
        ],
        ProductCommentModule,
      );
      exports.ProductCommentModule = ProductCommentModule;

      /***/
    },
    /* 189 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductCommentService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const product_comment_model_1 = __webpack_require__(45);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let ProductCommentService = class ProductCommentService {
        constructor(productCommentModel) {
          this.productCommentModel = productCommentModel;
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.productCommentModel
            .aggregate([
              {
                $lookup: {
                  from: 'users',
                  localField: 'userId',
                  foreignField: '_id',
                  as: 'user',
                },
              },
              {
                $unwind: '$user',
              },
              {
                $lookup: {
                  from: 'products',
                  localField: 'productId',
                  foreignField: '_id',
                  as: 'product',
                },
              },
              {
                $unwind: '$product',
              },
              {
                $match: {
                  'product.title': {
                    $regex: new RegExp(parameters.productName, 'i'),
                  },
                  'user.name': {
                    $regex: new RegExp(parameters.userName, 'i'),
                  },
                },
              },
              {
                $skip: ~~((parameters.pageNumber - 1) * parameters.pageSize),
              },
              {
                $limit: ~~parameters.pageSize,
              },
            ])
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async replyComment(id, content) {
          return await this.productCommentModel.findByIdAndUpdate(id, {
            replyContent: content,
          });
        }
        async remove(id) {
          return await this.productCommentModel.findByIdAndDelete(id);
        }
      };
      ProductCommentService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              product_comment_model_1.ProductComment,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        ProductCommentService,
      );
      exports.ProductCommentService = ProductCommentService;

      /***/
    },
    /* 190 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductCommentController = void 0;
      const common_1 = __webpack_require__(7);
      const passport_1 = __webpack_require__(58);
      const swagger_1 = __webpack_require__(2);
      const ResponseResultModel_1 = __webpack_require__(11);
      const query_product_comment_dto_1 = __webpack_require__(191);
      const reply_product_comment_dto_1 = __webpack_require__(192);
      const product_comment_service_1 = __webpack_require__(189);
      let ProductCommentController = class ProductCommentController {
        constructor(productCommentService) {
          this.productCommentService = productCommentService;
        }
        async findAll(parameters) {
          const res = await this.productCommentService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async replyComment(id, replyProductCommentDto) {
          const res = await this.productCommentService.replyComment(
            id,
            replyProductCommentDto.content,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.productCommentService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '获取商品评价列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof query_product_comment_dto_1.QueryProductCommentDto !==
                'undefined' &&
              query_product_comment_dto_1.QueryProductCommentDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductCommentController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id/reply'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '评论记录id' }),
          (0, swagger_1.ApiOperation)({ summary: '回复商品评价' }),
          __param(0, (0, common_1.Param)('id')),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_b =
              typeof reply_product_comment_dto_1.ReplyProductCommentDto !==
                'undefined' &&
              reply_product_comment_dto_1.ReplyProductCommentDto) === 'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductCommentController.prototype,
        'replyComment',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '评论记录id' }),
          (0, swagger_1.ApiOperation)({ summary: '删除商品评价' }),
          __param(0, (0, common_1.Param)('id')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductCommentController.prototype,
        'remove',
        null,
      );
      ProductCommentController = __decorate(
        [
          (0, swagger_1.ApiTags)('商品评价'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('productComment'),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof product_comment_service_1.ProductCommentService !==
                'undefined' &&
              product_comment_service_1.ProductCommentService) === 'function'
              ? _c
              : Object,
          ]),
        ],
        ProductCommentController,
      );
      exports.ProductCommentController = ProductCommentController;

      /***/
    },
    /* 191 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryProductCommentDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryProductCommentDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户名称' }),
          __metadata('design:type', String),
        ],
        QueryProductCommentDto.prototype,
        'userName',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品名称' }),
          __metadata('design:type', String),
        ],
        QueryProductCommentDto.prototype,
        'productName',
        void 0,
      );
      exports.QueryProductCommentDto = QueryProductCommentDto;

      /***/
    },
    /* 192 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ReplyProductCommentDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class ReplyProductCommentDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '回复商品评论' }),
          __metadata('design:type', String),
        ],
        ReplyProductCommentDto.prototype,
        'content',
        void 0,
      );
      exports.ReplyProductCommentDto = ReplyProductCommentDto;

      /***/
    },
    /* 193 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.RoleModule = void 0;
      const common_1 = __webpack_require__(7);
      const role_service_1 = __webpack_require__(194);
      const role_controller_1 = __webpack_require__(195);
      let RoleModule = class RoleModule {};
      RoleModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [role_controller_1.RoleController],
            providers: [role_service_1.RoleService],
          }),
        ],
        RoleModule,
      );
      exports.RoleModule = RoleModule;

      /***/
    },
    /* 194 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.RoleService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const role_model_1 = __webpack_require__(25);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let RoleService = class RoleService {
        constructor(roleModel) {
          this.roleModel = roleModel;
        }
        async create(createRoleDto) {
          return await this.roleModel.create(createRoleDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.roleModel
            .find({
              $or: [
                {
                  name: { $regex: new RegExp(parameters.name, 'i') },
                },
              ],
            })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.roleModel.findById(id);
        }
        async update(id, updateRoleDto) {
          return await this.roleModel.findByIdAndUpdate(id, updateRoleDto);
        }
        async remove(id) {
          return await this.roleModel.findByIdAndDelete(id);
        }
      };
      RoleService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(role_model_1.Role)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        RoleService,
      );
      exports.RoleService = RoleService;

      /***/
    },
    /* 195 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.RoleController = void 0;
      const common_1 = __webpack_require__(7);
      const role_service_1 = __webpack_require__(194);
      const create_role_dto_1 = __webpack_require__(196);
      const update_role_dto_1 = __webpack_require__(197);
      const ResponseResultModel_1 = __webpack_require__(11);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const parse_id_pipe_1 = __webpack_require__(81);
      const query_role_dto_1 = __webpack_require__(198);
      let RoleController = class RoleController {
        constructor(roleService) {
          this.roleService = roleService;
        }
        async create(createRoleDto) {
          const res = await this.roleService.create(createRoleDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.roleService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.roleService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateRoleDto) {
          const res = await this.roleService.update(id, updateRoleDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.roleService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '添加角色' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_role_dto_1.CreateRoleDto !== 'undefined' &&
              create_role_dto_1.CreateRoleDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        RoleController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '角色列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_role_dto_1.QueryRoleDto !== 'undefined' &&
              query_role_dto_1.QueryRoleDto) === 'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        RoleController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '角色id' }),
          (0, swagger_1.ApiOperation)({ summary: '角色详细' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        RoleController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新角色' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '角色id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_c =
              typeof update_role_dto_1.UpdateRoleDto !== 'undefined' &&
              update_role_dto_1.UpdateRoleDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        RoleController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除角色' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '角色id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        RoleController.prototype,
        'remove',
        null,
      );
      RoleController = __decorate(
        [
          (0, swagger_1.ApiTags)('角色管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('role'),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof role_service_1.RoleService !== 'undefined' &&
              role_service_1.RoleService) === 'function'
              ? _d
              : Object,
          ]),
        ],
        RoleController,
      );
      exports.RoleController = RoleController;

      /***/
    },
    /* 196 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateRoleDto = void 0;
      class CreateRoleDto {}
      exports.CreateRoleDto = CreateRoleDto;

      /***/
    },
    /* 197 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateRoleDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_role_dto_1 = __webpack_require__(196);
      class UpdateRoleDto extends (0, swagger_1.PartialType)(
        create_role_dto_1.CreateRoleDto,
      ) {}
      exports.UpdateRoleDto = UpdateRoleDto;

      /***/
    },
    /* 198 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryRoleDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryRoleDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '角色名称' }),
          __metadata('design:type', String),
        ],
        QueryRoleDto.prototype,
        'name',
        void 0,
      );
      exports.QueryRoleDto = QueryRoleDto;

      /***/
    },
    /* 199 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MenuModule = void 0;
      const common_1 = __webpack_require__(7);
      const menu_service_1 = __webpack_require__(200);
      const menu_controller_1 = __webpack_require__(202);
      let MenuModule = class MenuModule {};
      MenuModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [menu_controller_1.MenuController],
            providers: [menu_service_1.MenuService],
          }),
        ],
        MenuModule,
      );
      exports.MenuModule = MenuModule;

      /***/
    },
    /* 200 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MenuService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const transform_1 = __webpack_require__(201);
      const admin_model_1 = __webpack_require__(22);
      const menu_model_1 = __webpack_require__(26);
      const role_model_1 = __webpack_require__(25);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let MenuService = class MenuService {
        constructor(menuModel, adminModel, roleModel) {
          this.menuModel = menuModel;
          this.adminModel = adminModel;
          this.roleModel = roleModel;
        }
        async create(createMenuDto) {
          if (createMenuDto.parentId && createMenuDto.component !== 'LAYOUT') {
            const paths = createMenuDto.component.split('/');
            paths.pop();
            paths.pop();
            const name = (0, transform_1.upperCamelCase)(paths.join('-'));
            await this.menuModel.findByIdAndUpdate(createMenuDto.parentId, {
              component: 'LAYOUT',
              name,
            });
          }
          return await this.menuModel.create(createMenuDto);
        }
        async findAll(parameters) {
          const result = await this.menuModel
            .find({
              $or: [
                {
                  'meta.title': { $regex: new RegExp(parameters.title, 'i') },
                },
              ],
            })
            .sort({ 'meta.orderNo': 1 });
          return result;
        }
        async findPermissionsMenus(adminId) {
          const roles = await this.adminModel.findById({ _id: adminId });
          let menus = [];
          for (const item of roles.roleIds) {
            const menuListRes = await this.roleModel
              .findById({
                _id: item,
              })
              .populate('menuIds');
            menus = menus.concat(menuListRes.menuIds);
          }
          const MenuObj = {};
          const allMenus = menus.reduce((cur, next) => {
            MenuObj[next._id]
              ? ''
              : (MenuObj[next._id] = true && cur.push(next));
            return cur;
          }, []);
          return allMenus.sort((a, b) => a.meta.orderNo - b.meta.orderNo);
        }
        async findOne(id) {
          return await this.menuModel.findById(id);
        }
        async update(id, updateMenuDto) {
          if (updateMenuDto.parentId && updateMenuDto.component !== 'LAYOUT') {
            const paths = updateMenuDto.component.split('/');
            paths.pop();
            paths.pop();
            const name = (0, transform_1.upperCamelCase)(paths.join('-'));
            await this.menuModel.findByIdAndUpdate(updateMenuDto.parentId, {
              component: 'LAYOUT',
              name,
            });
          }
          return await this.menuModel.findByIdAndUpdate(id, updateMenuDto);
        }
        async remove(id) {
          return await this.menuModel.findByIdAndDelete(id);
        }
      };
      MenuService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(menu_model_1.Menu)),
          __param(1, (0, nestjs_typegoose_1.InjectModel)(admin_model_1.Admin)),
          __param(2, (0, nestjs_typegoose_1.InjectModel)(role_model_1.Role)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _b
              : Object,
            typeof (_c =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _c
              : Object,
          ]),
        ],
        MenuService,
      );
      exports.MenuService = MenuService;

      /***/
    },
    /* 201 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.upperCamelCase = void 0;
      function upperCamelCase(name) {
        return name
          .replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
          .replace(/^\S/, (s) => s.toUpperCase());
      }
      exports.upperCamelCase = upperCamelCase;

      /***/
    },
    /* 202 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d, _e;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MenuController = void 0;
      const common_1 = __webpack_require__(7);
      const menu_service_1 = __webpack_require__(200);
      const create_menu_dto_1 = __webpack_require__(203);
      const update_menu_dto_1 = __webpack_require__(204);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      const query_menu_dto_1 = __webpack_require__(205);
      const transform_1 = __webpack_require__(201);
      const current_user_decorator_1 = __webpack_require__(77);
      const admin_model_1 = __webpack_require__(22);
      let MenuController = class MenuController {
        constructor(menuService) {
          this.menuService = menuService;
        }
        async create(createMenuDto) {
          var _a;
          if (createMenuDto.component === 'LAYOUT') {
            const paths = createMenuDto.path.split('/');
            createMenuDto.name = (0, transform_1.upperCamelCase)(
              paths.join('-'),
            );
          } else {
            const paths =
              (_a = createMenuDto.component) === null || _a === void 0
                ? void 0
                : _a.split('/');
            paths.shift();
            paths.pop();
            const pathName = paths.join('-');
            createMenuDto.name = (0, transform_1.upperCamelCase)(pathName);
          }
          const res = await this.menuService.create(createMenuDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(parameters) {
          const res = await this.menuService.findAll(parameters);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getPermissionsMenus(user) {
          const res = await this.menuService.findPermissionsMenus(
            user === null || user === void 0 ? void 0 : user._id,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.menuService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateMenuDto) {
          var _a;
          if (updateMenuDto.component === 'LAYOUT') {
            const paths = updateMenuDto.path.split('/');
            updateMenuDto.name = (0, transform_1.upperCamelCase)(
              paths.join('-'),
            );
          } else {
            const paths =
              (_a = updateMenuDto.component) === null || _a === void 0
                ? void 0
                : _a.split('/');
            paths.shift();
            paths.pop();
            const pathName = paths.join('-');
            updateMenuDto.name = (0, transform_1.upperCamelCase)(pathName);
          }
          const res = await this.menuService.update(id, updateMenuDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.menuService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '添加菜单' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_menu_dto_1.CreateMenuDto !== 'undefined' &&
              create_menu_dto_1.CreateMenuDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        MenuController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '菜单列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_menu_dto_1.QueryMenuDto !== 'undefined' &&
              query_menu_dto_1.QueryMenuDto) === 'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        MenuController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('permissions'),
          (0, swagger_1.ApiOperation)({
            summary: '管理员关联的角色的权限菜单列表',
          }),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof admin_model_1.AdminDocument !== 'undefined' &&
              admin_model_1.AdminDocument) === 'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        MenuController.prototype,
        'getPermissionsMenus',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '菜单详情' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '菜单id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        MenuController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新菜单' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '菜单id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_d =
              typeof update_menu_dto_1.UpdateMenuDto !== 'undefined' &&
              update_menu_dto_1.UpdateMenuDto) === 'function'
              ? _d
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        MenuController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除菜单' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '菜单id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        MenuController.prototype,
        'remove',
        null,
      );
      MenuController = __decorate(
        [
          (0, swagger_1.ApiTags)('菜单管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('menu'),
          __metadata('design:paramtypes', [
            typeof (_e =
              typeof menu_service_1.MenuService !== 'undefined' &&
              menu_service_1.MenuService) === 'function'
              ? _e
              : Object,
          ]),
        ],
        MenuController,
      );
      exports.MenuController = MenuController;

      /***/
    },
    /* 203 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateMenuDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(9);
      class TagItem {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '是否显示小圆点',
            default: false,
          }),
          __metadata('design:type', Boolean),
        ],
        TagItem.prototype,
        'dot',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '内容' }),
          __metadata('design:type', String),
        ],
        TagItem.prototype,
        'content',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '类型' }),
          __metadata('design:type', String),
        ],
        TagItem.prototype,
        'type',
        void 0,
      );
      class MetaItem {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '菜单栏icon' }),
          __metadata('design:type', String),
        ],
        MetaItem.prototype,
        'icon',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: 'Tag', type: TagItem }),
          __metadata('design:type', TagItem),
        ],
        MetaItem.prototype,
        'tag',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否禁用', default: false }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'disabled',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否隐藏菜单', default: false }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'hideMenu',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '菜单名称' }),
          (0, class_validator_1.IsNotEmpty)({ message: '菜单名称不能为空' }),
          __metadata('design:type', String),
        ],
        MetaItem.prototype,
        'title',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否固定标签', default: false }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'affix',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '是否忽略KeepAlive缓存',
            default: false,
          }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'ignoreKeepAlive',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '隐藏所有子菜单',
            default: false,
          }),
          __metadata('design:type', Boolean),
        ],
        MetaItem.prototype,
        'hideChildrenInMenu',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '当前激活的菜单。用于配置详情页时左侧激活的菜单路径',
          }),
          __metadata('design:type', String),
        ],
        MetaItem.prototype,
        'currentActiveMenu',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '菜单排序，只对第一级有效',
            default: 1,
          }),
          __metadata('design:type', Number),
        ],
        MetaItem.prototype,
        'orderNo',
        void 0,
      );
      class CreateMenuDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '路由路径' }),
          (0, class_validator_1.IsNotEmpty)({ message: '路由路径不能为空' }),
          __metadata('design:type', String),
        ],
        CreateMenuDto.prototype,
        'path',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '组件路径' }),
          (0, class_validator_1.IsNotEmpty)({ message: '组件路径不能为空' }),
          __metadata('design:type', String),
        ],
        CreateMenuDto.prototype,
        'component',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '菜单mate', type: MetaItem }),
          __metadata('design:type', MetaItem),
        ],
        CreateMenuDto.prototype,
        'meta',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '上级id', default: null }),
          __metadata('design:type', String),
        ],
        CreateMenuDto.prototype,
        'parentId',
        void 0,
      );
      exports.CreateMenuDto = CreateMenuDto;

      /***/
    },
    /* 204 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateMenuDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_menu_dto_1 = __webpack_require__(203);
      class UpdateMenuDto extends (0, swagger_1.PartialType)(
        create_menu_dto_1.CreateMenuDto,
      ) {}
      exports.UpdateMenuDto = UpdateMenuDto;

      /***/
    },
    /* 205 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryMenuDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryMenuDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '菜单名称' }),
          __metadata('design:type', String),
        ],
        QueryMenuDto.prototype,
        'title',
        void 0,
      );
      exports.QueryMenuDto = QueryMenuDto;

      /***/
    },
    /* 206 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductUnitModule = void 0;
      const common_1 = __webpack_require__(7);
      const product_unit_service_1 = __webpack_require__(207);
      const product_unit_controller_1 = __webpack_require__(208);
      let ProductUnitModule = class ProductUnitModule {};
      ProductUnitModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [product_unit_controller_1.ProductUnitController],
            providers: [product_unit_service_1.ProductUnitService],
          }),
        ],
        ProductUnitModule,
      );
      exports.ProductUnitModule = ProductUnitModule;

      /***/
    },
    /* 207 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductUnitService = void 0;
      const common_1 = __webpack_require__(7);
      const typegoose_1 = __webpack_require__(23);
      const product_unit_model_1 = __webpack_require__(50);
      const nestjs_typegoose_1 = __webpack_require__(20);
      let ProductUnitService = class ProductUnitService {
        constructor(productUnitModel) {
          this.productUnitModel = productUnitModel;
        }
        async create(createProductUnitDto) {
          return await this.productUnitModel.create(createProductUnitDto);
        }
        async findAll(parameters) {
          let total = 0;
          const result = await this.productUnitModel
            .find({ name: { $regex: new RegExp(parameters.name, 'i') } })
            .limit(~~parameters.pageSize)
            .skip(~~((parameters.pageNumber - 1) * parameters.pageSize))
            .then((doc) => {
              total = doc.length;
              return doc;
            });
          return {
            total,
            items: result,
          };
        }
        async findOne(id) {
          return await this.productUnitModel.findById(id);
        }
        async update(id, updateProductUnitDto) {
          return await this.productUnitModel.findByIdAndUpdate(
            id,
            updateProductUnitDto,
          );
        }
        async remove(id) {
          return await this.productUnitModel.findByIdAndDelete(id);
        }
      };
      ProductUnitService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              product_unit_model_1.ProductUnit,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' &&
              typegoose_1.ReturnModelType) === 'function'
              ? _a
              : Object,
          ]),
        ],
        ProductUnitService,
      );
      exports.ProductUnitService = ProductUnitService;

      /***/
    },
    /* 208 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductUnitController = void 0;
      const common_1 = __webpack_require__(7);
      const product_unit_service_1 = __webpack_require__(207);
      const create_product_unit_dto_1 = __webpack_require__(209);
      const update_product_unit_dto_1 = __webpack_require__(210);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(58);
      const ResponseResultModel_1 = __webpack_require__(11);
      const parse_id_pipe_1 = __webpack_require__(81);
      const query_product_unit_dto_1 = __webpack_require__(211);
      let ProductUnitController = class ProductUnitController {
        constructor(productUnitService) {
          this.productUnitService = productUnitService;
        }
        async create(createProductUnitDto) {
          const res = await this.productUnitService.create(
            createProductUnitDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(queryProductUnitDto) {
          const res = await this.productUnitService.findAll(
            queryProductUnitDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.productUnitService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateProductUnitDto) {
          const res = await this.productUnitService.update(
            id,
            updateProductUnitDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.productUnitService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增商品单位' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_product_unit_dto_1.CreateProductUnitDto !==
                'undefined' &&
              create_product_unit_dto_1.CreateProductUnitDto) === 'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductUnitController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '商品单位列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_product_unit_dto_1.QueryProductUnitDto !==
                'undefined' && query_product_unit_dto_1.QueryProductUnitDto) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductUnitController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '商品单位详情' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '单位id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductUnitController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '单位id' }),
          (0, swagger_1.ApiOperation)({ summary: '更新商品单位' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_c =
              typeof update_product_unit_dto_1.UpdateProductUnitDto !==
                'undefined' &&
              update_product_unit_dto_1.UpdateProductUnitDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductUnitController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除商品单位' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '单位id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductUnitController.prototype,
        'remove',
        null,
      );
      ProductUnitController = __decorate(
        [
          (0, swagger_1.ApiTags)('商品单位'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('productUnit'),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof product_unit_service_1.ProductUnitService !==
                'undefined' && product_unit_service_1.ProductUnitService) ===
            'function'
              ? _d
              : Object,
          ]),
        ],
        ProductUnitController,
      );
      exports.ProductUnitController = ProductUnitController;

      /***/
    },
    /* 209 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateProductUnitDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class CreateProductUnitDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '单位名称' }),
          __metadata('design:type', String),
        ],
        CreateProductUnitDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '单位排序' }),
          __metadata('design:type', Number),
        ],
        CreateProductUnitDto.prototype,
        'sort',
        void 0,
      );
      exports.CreateProductUnitDto = CreateProductUnitDto;

      /***/
    },
    /* 210 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateProductUnitDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_product_unit_dto_1 = __webpack_require__(209);
      class UpdateProductUnitDto extends (0, swagger_1.PartialType)(
        create_product_unit_dto_1.CreateProductUnitDto,
      ) {}
      exports.UpdateProductUnitDto = UpdateProductUnitDto;

      /***/
    },
    /* 211 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryProductUnitDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryProductUnitDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '单位名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryProductUnitDto.prototype,
        'name',
        void 0,
      );
      exports.QueryProductUnitDto = QueryProductUnitDto;

      /***/
    },
    /* 212 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CustomerServiceModule = void 0;
      const common_1 = __webpack_require__(7);
      const customer_service_service_1 = __webpack_require__(213);
      const customer_service_controller_1 = __webpack_require__(215);
      let CustomerServiceModule = class CustomerServiceModule {};
      CustomerServiceModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [
              customer_service_controller_1.CustomerServiceController,
            ],
            providers: [customer_service_service_1.CustomerServiceService],
          }),
        ],
        CustomerServiceModule,
      );
      exports.CustomerServiceModule = CustomerServiceModule;

      /***/
    },
    /* 213 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CustomerServiceService = void 0;
      const common_1 = __webpack_require__(7);
      const types_1 = __webpack_require__(214);
      const chat_conversation_record_model_1 = __webpack_require__(33);
      const chat_messages_model_1 = __webpack_require__(37);
      const customer_service_model_1 = __webpack_require__(34);
      const nestjs_typegoose_1 = __webpack_require__(20);
      const mongodb_1 = __webpack_require__(89);
      let CustomerServiceService = class CustomerServiceService {
        constructor(
          customerServiceModel,
          chatConversationRecordModel,
          chatMessagesModel,
        ) {
          this.customerServiceModel = customerServiceModel;
          this.chatConversationRecordModel = chatConversationRecordModel;
          this.chatMessagesModel = chatMessagesModel;
        }
        async create(createCustomerServiceDto) {
          return await this.customerServiceModel.create(
            createCustomerServiceDto,
          );
        }
        async findAll(parameters) {
          return await this.customerServiceModel.find({
            name: { $regex: new RegExp(parameters.name, 'i') },
          });
        }
        async findOne(id) {
          return await this.customerServiceModel.findById(id);
        }
        async update(id, updateCustomerServiceDto) {
          return await this.customerServiceModel.findByIdAndUpdate(
            id,
            updateCustomerServiceDto,
          );
        }
        async remove(id) {
          return await this.customerServiceModel.findByIdAndDelete(id);
        }
        async getChatConversationRecord(id) {
          return await this.chatConversationRecordModel.aggregate([
            {
              $match: {
                customerServiceId: new mongodb_1.ObjectId(id),
              },
            },
            {
              $lookup: {
                from: 'users',
                foreignField: '_id',
                localField: 'userId',
                as: 'user',
              },
            },
            {
              $unwind: '$user',
            },
            {
              $lookup: {
                from: 'customerservices',
                foreignField: '_id',
                localField: 'customerServiceId',
                as: 'customerService',
              },
            },
            {
              $unwind: '$customerService',
            },
            {
              $project: {
                messageType: 1,
                createdAt: 1,
                customerServiceId: 1,
                isTourist: 1,
                source: 1,
                unreadNum: 1,
                updatedAt: 1,
                userId: 1,
                messageContent: 1,
                'user.avatar': 1,
                'user.name': 1,
                'customerService.name': 1,
                'customerService.avatar': 1,
              },
            },
          ]);
        }
        async getChatMessageList(id, targetId) {
          return await this.chatMessagesModel
            .find({
              $or: [
                {
                  userId: id,
                  targetId: targetId,
                },
                {
                  targetId: id,
                  userId: targetId,
                },
              ],
            })
            .populate({ path: 'user', select: ['name', 'avatar'] })
            .populate({ path: 'target', select: ['name', 'avatar'] });
        }
        async emptyConversationRecordUnreadkNum(userId, cuServiceId) {
          return this.chatConversationRecordModel.findOneAndUpdate(
            { userId, customerServiceId: cuServiceId },
            { unreadNum: 0 },
          );
        }
      };
      CustomerServiceService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(
            0,
            (0, nestjs_typegoose_1.InjectModel)(
              customer_service_model_1.CustomerService,
            ),
          ),
          __param(
            1,
            (0, nestjs_typegoose_1.InjectModel)(
              chat_conversation_record_model_1.ChatConversationRecord,
            ),
          ),
          __param(
            2,
            (0, nestjs_typegoose_1.InjectModel)(
              chat_messages_model_1.ChatMessages,
            ),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof types_1.ReturnModelType !== 'undefined' &&
              types_1.ReturnModelType) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof types_1.ReturnModelType !== 'undefined' &&
              types_1.ReturnModelType) === 'function'
              ? _b
              : Object,
            typeof (_c =
              typeof types_1.ReturnModelType !== 'undefined' &&
              types_1.ReturnModelType) === 'function'
              ? _c
              : Object,
          ]),
        ],
        CustomerServiceService,
      );
      exports.CustomerServiceService = CustomerServiceService;

      /***/
    },
    /* 214 */
    /***/ (module) => {
      module.exports = require('@typegoose/typegoose/lib/types');

      /***/
    },
    /* 215 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      var __param =
        (this && this.__param) ||
        function (paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        };
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CustomerServiceController = void 0;
      const common_1 = __webpack_require__(7);
      const passport_1 = __webpack_require__(58);
      const swagger_1 = __webpack_require__(2);
      const parse_id_pipe_1 = __webpack_require__(81);
      const ResponseResultModel_1 = __webpack_require__(11);
      const customer_service_service_1 = __webpack_require__(213);
      const create_customer_service_dto_1 = __webpack_require__(216);
      const query_customer_service_dto_1 = __webpack_require__(217);
      const update_customer_service_dto_1 = __webpack_require__(218);
      let CustomerServiceController = class CustomerServiceController {
        constructor(customerServiceService) {
          this.customerServiceService = customerServiceService;
        }
        async create(createCustomerServiceDto) {
          const res = await this.customerServiceService.create(
            createCustomerServiceDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(queryCustomerServiceDto) {
          const res = await this.customerServiceService.findAll(
            queryCustomerServiceDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.customerServiceService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async update(id, updateCustomerServiceDto) {
          const res = await this.customerServiceService.update(
            id,
            updateCustomerServiceDto,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.customerServiceService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getChatConversationRecord(id) {
          const res =
            await this.customerServiceService.getChatConversationRecord(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getChatMessageList(id, targetId) {
          const res = await this.customerServiceService.getChatMessageList(
            id,
            targetId,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '新增客服' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_customer_service_dto_1.CreateCustomerServiceDto !==
                'undefined' &&
              create_customer_service_dto_1.CreateCustomerServiceDto) ===
            'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        CustomerServiceController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '客服列表' }),
          __param(0, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof query_customer_service_dto_1.QueryCustomerServiceDto !==
                'undefined' &&
              query_customer_service_dto_1.QueryCustomerServiceDto) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        CustomerServiceController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '客服信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '客服id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        CustomerServiceController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Patch)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '更新客服' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '客服id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_c =
              typeof update_customer_service_dto_1.UpdateCustomerServiceDto !==
                'undefined' &&
              update_customer_service_dto_1.UpdateCustomerServiceDto) ===
            'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        CustomerServiceController.prototype,
        'update',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除客服' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '客服id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        CustomerServiceController.prototype,
        'remove',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id/getConversationRecord'),
          (0, swagger_1.ApiOperation)({ summary: '获取客服会话列表' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '客服id' }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        CustomerServiceController.prototype,
        'getChatConversationRecord',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id/getChatMessageList'),
          (0, swagger_1.ApiOperation)({ summary: '获取客服聊天记录列表' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '客服id' }),
          (0, swagger_1.ApiQuery)({
            name: 'targetId',
            description: '目标用户id',
          }),
          __param(
            0,
            (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
          ),
          __param(1, (0, common_1.Query)('targetId')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String, String]),
          __metadata('design:returntype', Promise),
        ],
        CustomerServiceController.prototype,
        'getChatMessageList',
        null,
      );
      CustomerServiceController = __decorate(
        [
          (0, swagger_1.ApiTags)('客服管理'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('customerService'),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof customer_service_service_1.CustomerServiceService !==
                'undefined' &&
              customer_service_service_1.CustomerServiceService) === 'function'
              ? _d
              : Object,
          ]),
        ],
        CustomerServiceController,
      );
      exports.CustomerServiceController = CustomerServiceController;

      /***/
    },
    /* 216 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateCustomerServiceDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class CreateCustomerServiceDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '客服名称' }),
          __metadata('design:type', String),
        ],
        CreateCustomerServiceDto.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '手机号' }),
          __metadata('design:type', String),
        ],
        CreateCustomerServiceDto.prototype,
        'phone',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '密码' }),
          __metadata('design:type', String),
        ],
        CreateCustomerServiceDto.prototype,
        'password',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '头像' }),
          __metadata('design:type', String),
        ],
        CreateCustomerServiceDto.prototype,
        'avatar',
        void 0,
      );
      exports.CreateCustomerServiceDto = CreateCustomerServiceDto;

      /***/
    },
    /* 217 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryCustomerServiceDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const PaginationParametersDto_1 = __webpack_require__(85);
      class QueryCustomerServiceDto extends PaginationParametersDto_1.PaginationParametersDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '名称', required: false }),
          __metadata('design:type', String),
        ],
        QueryCustomerServiceDto.prototype,
        'name',
        void 0,
      );
      exports.QueryCustomerServiceDto = QueryCustomerServiceDto;

      /***/
    },
    /* 218 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateCustomerServiceDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_customer_service_dto_1 = __webpack_require__(216);
      class UpdateCustomerServiceDto extends (0, swagger_1.PartialType)(
        create_customer_service_dto_1.CreateCustomerServiceDto,
      ) {}
      exports.UpdateCustomerServiceDto = UpdateCustomerServiceDto;

      /***/
    },
    /* 219 */
    /***/ (module) => {
      module.exports = require('multer');

      /***/
    },
    /* 220 */
    /***/ (module) => {
      module.exports = require('nuid');

      /***/
    },
    /******/
  ];
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    var exports = __webpack_exports__;

    Object.defineProperty(exports, '__esModule', { value: true });
    const core_1 = __webpack_require__(1);
    const swagger_1 = __webpack_require__(2);
    const express_rate_limit_1 = __webpack_require__(3);
    const helmet_1 = __webpack_require__(4);
    const port_config_1 = __webpack_require__(5);
    const http_exception_filter_1 = __webpack_require__(6);
    const validate_dto_pipe_1 = __webpack_require__(8);
    const path_1 = __webpack_require__(12);
    const app_module_1 = __webpack_require__(13);
    async function bootstrap() {
      const app = await core_1.NestFactory.create(app_module_1.AppModule);
      app.use(
        (0, helmet_1.default)({
          crossOriginResourcePolicy: {
            policy: 'cross-origin',
          },
        }),
      );
      app.use(
        (0, express_rate_limit_1.default)({
          windowMs: 15 * 60 * 1000,
          max: 50000,
        }),
      );
      app.useGlobalPipes(new validate_dto_pipe_1.ValidationDtoPipe());
      app.enableCors();
      app.useStaticAssets((0, path_1.join)(__dirname, 'uploads-images'), {
        prefix: '/uploads-images',
      });
      app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
      const config = new swagger_1.DocumentBuilder()
        .setTitle('Admin-Api文档')
        .setDescription('管理站Api文档')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
      const document = swagger_1.SwaggerModule.createDocument(app, config);
      swagger_1.SwaggerModule.setup('api-docs', app, document);
      await app.listen(port_config_1.adminPort);
      console.log(`http://localhost:${port_config_1.adminPort}/api-docs`);
    }
    bootstrap();
  })();

  /******/
})();
