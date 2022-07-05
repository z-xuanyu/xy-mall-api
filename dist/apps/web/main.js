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
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.webPort = exports.adminPort = void 0;
      exports.adminPort = 3008;
      exports.webPort = 3009;

      /***/
    },
    /* 4 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ValidationDtoPipe = void 0;
      const common_1 = __webpack_require__(5);
      const class_validator_1 = __webpack_require__(6);
      const class_transformer_1 = __webpack_require__(7);
      const ResponseResultModel_1 = __webpack_require__(8);
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
              `${JSON.stringify(errors[0].constraints).split(':')[1].split('"')[1]}`,
            );
          }
          return value;
        }
        toValidate(metatype) {
          const types = [String, Boolean, Number, Array, Object];
          return !types.includes(metatype);
        }
      };
      ValidationDtoPipe = __decorate([(0, common_1.Injectable)()], ValidationDtoPipe);
      exports.ValidationDtoPipe = ValidationDtoPipe;

      /***/
    },
    /* 5 */
    /***/ (module) => {
      module.exports = require('@nestjs/common');

      /***/
    },
    /* 6 */
    /***/ (module) => {
      module.exports = require('class-validator');

      /***/
    },
    /* 7 */
    /***/ (module) => {
      module.exports = require('class-transformer');

      /***/
    },
    /* 8 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ApiFail =
        exports.apiSucceed =
        exports.PaginationResult =
        exports.ApiSucceedResult =
          void 0;
      const common_1 = __webpack_require__(5);
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
    /* 9 */
    /***/ (module) => {
      module.exports = require('path');

      /***/
    },
    /* 10 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.WebModule = void 0;
      const common_1 = __webpack_require__(5);
      const web_controller_1 = __webpack_require__(11);
      const web_service_1 = __webpack_require__(15);
      const auth_module_1 = __webpack_require__(37);
      const common_2 = __webpack_require__(50);
      const product_module_1 = __webpack_require__(78);
      const user_module_1 = __webpack_require__(84);
      const user_cart_module_1 = __webpack_require__(91);
      const order_module_1 = __webpack_require__(95);
      const product_comment_module_1 = __webpack_require__(101);
      const chat_nessage_module_1 = __webpack_require__(105);
      let WebModule = class WebModule {};
      WebModule = __decorate(
        [
          (0, common_1.Module)({
            imports: [
              auth_module_1.AuthModule,
              common_2.CommonModule,
              product_module_1.ProductModule,
              user_module_1.UserModule,
              user_cart_module_1.UserCartModule,
              order_module_1.OrderModule,
              product_comment_module_1.ProductCommentModule,
              chat_nessage_module_1.ChatNessageModule,
            ],
            controllers: [web_controller_1.WebController],
            providers: [web_service_1.WebService],
            exports: [web_service_1.WebService],
          }),
        ],
        WebModule,
      );
      exports.WebModule = WebModule;

      /***/
    },
    /* 11 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.WebController = void 0;
      const common_1 = __webpack_require__(5);
      const passport_1 = __webpack_require__(12);
      const platform_express_1 = __webpack_require__(13);
      const swagger_1 = __webpack_require__(2);
      const ResponseResultModel_1 = __webpack_require__(8);
      const test_dto_1 = __webpack_require__(14);
      const web_service_1 = __webpack_require__(15);
      class multipleFileUploadDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            type: 'array',
            items: { type: 'string', format: 'binary' },
          }),
          __metadata('design:type', Array),
        ],
        multipleFileUploadDto.prototype,
        'files',
        void 0,
      );
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
      class WeixinPayDto {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '订单id' }), __metadata('design:type', String)],
        WeixinPayDto.prototype,
        'orderId',
        void 0,
      );
      let WebController = class WebController {
        constructor(webService) {
          this.webService = webService;
          console.log('webController');
        }
        getHello() {
          return this.webService.getHello();
        }
        async getHomeData() {
          const res = await this.webService.getHomeData();
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async multipleUpload(files, req) {
          const domain = `${req.protocol}://${req.headers.host}`;
          const res = await this.webService.multipleUpload(files, domain);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async upload(file, req) {
          const domain = `${req.protocol}://${req.headers.host}`;
          const res = await this.webService.upload(file, domain);
          return (0, ResponseResultModel_1.apiSucceed)(
            res === null || res === void 0 ? void 0 : res.url,
          );
        }
        async minUpload(dto) {
          console.log(dto);
          return dto;
        }
        async weixinPay(weixinPayDto) {
          const res = await this.webService.weixinPay(weixinPayDto.orderId);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async generatePoster() {
          return '1';
        }
      };
      __decorate(
        [
          (0, common_1.Get)(),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', []),
          __metadata('design:returntype', String),
        ],
        WebController.prototype,
        'getHello',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('homeData'),
          (0, swagger_1.ApiOperation)({ summary: '获取首页相关数据接口' }),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', []),
          __metadata('design:returntype', Promise),
        ],
        WebController.prototype,
        'getHomeData',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('multiple/upload'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, swagger_1.ApiOperation)({ summary: '多图上传' }),
          (0, swagger_1.ApiBody)({
            description: '多图上传',
            type: multipleFileUploadDto,
          }),
          (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
          (0, swagger_1.ApiConsumes)('multipart/form-data'),
          __param(0, (0, common_1.UploadedFiles)()),
          __param(1, (0, common_1.Req)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a = typeof Array !== 'undefined' && Array) === 'function' ? _a : Object,
            Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) === 'function' ? _b : Object,
          ),
        ],
        WebController.prototype,
        'multipleUpload',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('upload'),
          (0, swagger_1.ApiOperation)({ summary: '文件上传' }),
          (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
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
            typeof (_c = typeof Promise !== 'undefined' && Promise) === 'function' ? _c : Object,
          ),
        ],
        WebController.prototype,
        'upload',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('minUpload'),
          (0, swagger_1.ApiOperation)({ summary: '小程序文件上传' }),
          (0, swagger_1.ApiConsumes)('multipart/form-data'),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_d = typeof test_dto_1.TestDto !== 'undefined' && test_dto_1.TestDto) ===
            'function'
              ? _d
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        WebController.prototype,
        'minUpload',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('pay/weixin'),
          (0, swagger_1.ApiOperation)({ summary: '微信支付' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [WeixinPayDto]),
          __metadata('design:returntype', Promise),
        ],
        WebController.prototype,
        'weixinPay',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('generatePoster'),
          (0, swagger_1.ApiOperation)({ summary: '生成海报' }),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', []),
          __metadata('design:returntype', Promise),
        ],
        WebController.prototype,
        'generatePoster',
        null,
      );
      WebController = __decorate(
        [
          (0, swagger_1.ApiTags)('首页'),
          (0, common_1.Controller)(),
          __metadata('design:paramtypes', [
            typeof (_e =
              typeof web_service_1.WebService !== 'undefined' && web_service_1.WebService) ===
            'function'
              ? _e
              : Object,
          ]),
        ],
        WebController,
      );
      exports.WebController = WebController;

      /***/
    },
    /* 12 */
    /***/ (module) => {
      module.exports = require('@nestjs/passport');

      /***/
    },
    /* 13 */
    /***/ (module) => {
      module.exports = require('@nestjs/platform-express');

      /***/
    },
    /* 14 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.TestDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class TestDto {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '文件路径' }), __metadata('design:type', String)],
        TestDto.prototype,
        'filePath',
        void 0,
      );
      exports.TestDto = TestDto;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.WebService = void 0;
      const common_1 = __webpack_require__(5);
      const typegoose_1 = __webpack_require__(16);
      const banner_model_1 = __webpack_require__(17);
      const classify_navigation_model_1 = __webpack_require__(23);
      const product_model_1 = __webpack_require__(19);
      const site_setting_model_1 = __webpack_require__(24);
      const nestjs_typegoose_1 = __webpack_require__(26);
      const OSS = __webpack_require__(27);
      const fs = __webpack_require__(28);
      const path_1 = __webpack_require__(9);
      const has_1 = __webpack_require__(29);
      const order_model_1 = __webpack_require__(30);
      const orderStatus_enum_1 = __webpack_require__(31);
      let WebService = class WebService {
        constructor(bannerModel, classifyNavigationModel, productModel, settingModel, orderModel) {
          this.bannerModel = bannerModel;
          this.classifyNavigationModel = classifyNavigationModel;
          this.productModel = productModel;
          this.settingModel = settingModel;
          this.orderModel = orderModel;
          this.settingModel.find().then((res) => {
            this.fileStorageInfo = res[0].fileStorage;
            this.aliOssClient = new OSS({
              region: this.fileStorageInfo.aliOss.region,
              accessKeyId: this.fileStorageInfo.aliOss.accessKeyId,
              accessKeySecret: this.fileStorageInfo.aliOss.accessKeySecret,
              bucket: this.fileStorageInfo.aliOss.bucket,
            });
            this.aliOssClient.useBucket(this.fileStorageInfo.aliOss.bucket);
          });
        }
        getHello() {
          return 'Hello World!';
        }
        async getHomeData() {
          const banners = await this.bannerModel.find();
          const navigations = await this.classifyNavigationModel.find();
          const hotProducts = await this.productModel.find({ isHot: true });
          const limitProducts = await this.productModel.find({ isTimeLimit: true });
          return {
            banners,
            navigations,
            hotProducts,
            limitProducts,
          };
        }
        async upload(file, domain) {
          try {
            let data;
            switch (~~this.fileStorageInfo.mode) {
              case 1:
                const stat = await (0, has_1.dirIsExist)('uploads-images');
                if (!stat) {
                  await (0, has_1.createMkdir)('uploads-images');
                }
                const writeImage = fs.createWriteStream(
                  (0, path_1.join)(__dirname, './uploads-images', `${file.originalname}`),
                );
                writeImage.write(file.buffer);
                data = {
                  url: `${domain}/uploads-images/${file.originalname}`,
                };
                break;
              case 2:
                data = await this.aliOssClient.put(`/images/${file.originalname}`, file.buffer);
                break;
              default:
                break;
            }
            return data;
          } catch (err) {
            common_1.Logger.log(err, '上传错误');
          }
        }
        async multipleUpload(files, domain) {
          try {
            const data = [];
            switch (~~this.fileStorageInfo.mode) {
              case 1:
                const stat = await (0, has_1.dirIsExist)('uploads-images');
                if (!stat) {
                  await (0, has_1.createMkdir)('uploads-images');
                }
                for (const file of files) {
                  const writeImage = fs.createWriteStream(
                    (0, path_1.join)(__dirname, './uploads-images', `${file.originalname}`),
                  );
                  writeImage.write(file.buffer);
                  data.push(`${domain}/uploads-images/${file.originalname}`);
                }
                break;
              case 2:
                for (const file of files) {
                  const res = await this.aliOssClient.put(
                    `/images/${file.originalname}`,
                    file.buffer,
                  );
                  data.push(res.url);
                }
                break;
              default:
                break;
            }
            return data;
          } catch (err) {
            common_1.Logger.log(err, '上传错误');
          }
        }
        async weixinPay(orderId) {
          return this.orderModel.findByIdAndUpdate(orderId, {
            status: orderStatus_enum_1.OrderStatus.PENDING_DELIVER,
          });
        }
        async generatePoster() {
          return 'ok';
        }
      };
      WebService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(banner_model_1.Banner)),
          __param(
            1,
            (0, nestjs_typegoose_1.InjectModel)(classify_navigation_model_1.ClassifyNavigation),
          ),
          __param(2, (0, nestjs_typegoose_1.InjectModel)(product_model_1.Product)),
          __param(3, (0, nestjs_typegoose_1.InjectModel)(site_setting_model_1.SiteSettings)),
          __param(4, (0, nestjs_typegoose_1.InjectModel)(order_model_1.Order)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _b
              : Object,
            typeof (_c =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _c
              : Object,
            typeof (_d =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _d
              : Object,
            typeof (_e =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _e
              : Object,
          ]),
        ],
        WebService,
      );
      exports.WebService = WebService;

      /***/
    },
    /* 16 */
    /***/ (module) => {
      module.exports = require('@typegoose/typegoose');

      /***/
    },
    /* 17 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Banner = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const banner_enum_1 = __webpack_require__(18);
      const product_model_1 = __webpack_require__(19);
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
          (0, swagger_1.ApiProperty)({ title: 'banner排序', description: '整数数字类型' }),
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
              typeof banner_enum_1.BannerType !== 'undefined' && banner_enum_1.BannerType) ===
              'function'
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
              typeof banner_enum_1.BannerStatus !== 'undefined' && banner_enum_1.BannerStatus) ===
              'function'
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
          (0, typegoose_1.prop)({ ref: () => product_model_1.Product, default: null }),
          __metadata(
            'design:type',
            typeof (_c = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
    /* 18 */
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
    /* 19 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Product = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const product_enum_1 = __webpack_require__(20);
      const category_model_1 = __webpack_require__(21);
      const tag_model_1 = __webpack_require__(22);
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
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
          (0, typegoose_1.prop)({ type: [tag_model_1.Tag], ref: () => tag_model_1.Tag }),
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
          (0, swagger_1.ApiProperty)({ title: '商品排序', description: '整数数字类型' }),
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
    /* 20 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductSkuSelectType = void 0;
      var ProductSkuSelectType;
      (function (ProductSkuSelectType) {
        ProductSkuSelectType[(ProductSkuSelectType['SINGLE'] = 1)] = 'SINGLE';
        ProductSkuSelectType[(ProductSkuSelectType['MULTIPLE'] = 2)] = 'MULTIPLE';
        ProductSkuSelectType[(ProductSkuSelectType['NONE'] = 3)] = 'NONE';
      })(
        (ProductSkuSelectType =
          exports.ProductSkuSelectType || (exports.ProductSkuSelectType = {})),
      );

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var Category_1, _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Category = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
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
          (0, swagger_1.ApiProperty)({ title: '类别排序', description: '整数数字类型' }),
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
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
              ? _a
              : Object,
          ),
        ],
        Category.prototype,
        'parentId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '缩略图' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        Category.prototype,
        'thumbnail',
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Tag = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
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
    /* 23 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassifyNavigation = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
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
            options: {
              customName: 'classify_navigation',
            },
          }),
        ],
        ClassifyNavigation,
      );
      exports.ClassifyNavigation = ClassifyNavigation;

      /***/
    },
    /* 24 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.SiteSettings = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const fileStorageMode_enum_1 = __webpack_require__(25);
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
      class FileStorage {}
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
              typeof fileStorageMode_enum_1.FileStorageModeEnum !== 'undefined' &&
              fileStorageMode_enum_1.FileStorageModeEnum) === 'function'
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
      let SiteSettings = class SiteSettings {};
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
      SiteSettings = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
            options: {
              allowMixed: typegoose_1.Severity.ALLOW,
              customName: 'site_setting',
            },
          }),
        ],
        SiteSettings,
      );
      exports.SiteSettings = SiteSettings;

      /***/
    },
    /* 25 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.FileStorageModeEnum = void 0;
      var FileStorageModeEnum;
      (function (FileStorageModeEnum) {
        FileStorageModeEnum[(FileStorageModeEnum['LOCAL'] = 1)] = 'LOCAL';
        FileStorageModeEnum[(FileStorageModeEnum['ALIOSS'] = 2)] = 'ALIOSS';
        FileStorageModeEnum[(FileStorageModeEnum['QINIUOSS'] = 3)] = 'QINIUOSS';
      })((FileStorageModeEnum = exports.FileStorageModeEnum || (exports.FileStorageModeEnum = {})));

      /***/
    },
    /* 26 */
    /***/ (module) => {
      module.exports = require('nestjs-typegoose');

      /***/
    },
    /* 27 */
    /***/ (module) => {
      module.exports = require('ali-oss');

      /***/
    },
    /* 28 */
    /***/ (module) => {
      module.exports = require('fs');

      /***/
    },
    /* 29 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.createMkdir = exports.dirIsExist = void 0;
      const fs = __webpack_require__(28);
      const path_1 = __webpack_require__(9);
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
    /* 30 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Order = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const orderStatus_enum_1 = __webpack_require__(31);
      const product_sku_model_1 = __webpack_require__(32);
      const product_model_1 = __webpack_require__(19);
      const user_address_model_1 = __webpack_require__(33);
      const user_model_1 = __webpack_require__(34);
      class BuyProduct {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品id' }),
          (0, typegoose_1.prop)({ ref: () => product_model_1.Product }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
          (0, swagger_1.ApiProperty)({ title: '商品标题' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        BuyProduct.prototype,
        'productName',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品封面图' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        BuyProduct.prototype,
        'productPic',
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
          (0, swagger_1.ApiProperty)({ title: '商品规格id' }),
          (0, typegoose_1.prop)({ ref: () => product_sku_model_1.ProductSku }),
          __metadata(
            'design:type',
            typeof (_b = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
              ? _b
              : Object,
          ),
        ],
        BuyProduct.prototype,
        'skuId',
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
            default: String(new Date().getFullYear) + String(new Date().getTime()),
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
            typeof (_c = typeof Array !== 'undefined' && Array) === 'function' ? _c : Object,
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
            typeof (_d = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
              ? _d
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
            typeof (_e =
              typeof orderStatus_enum_1.OrderStatus !== 'undefined' &&
              orderStatus_enum_1.OrderStatus) === 'function'
              ? _e
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
          (0, typegoose_1.prop)({ ref: () => user_address_model_1.UserAddress }),
          __metadata(
            'design:type',
            typeof (_f = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
              ? _f
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
            typeof (_g = typeof Date !== 'undefined' && Date) === 'function' ? _g : Object,
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
            typeof (_h = typeof Date !== 'undefined' && Date) === 'function' ? _h : Object,
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
            typeof (_j = typeof Date !== 'undefined' && Date) === 'function' ? _j : Object,
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
            typeof (_k = typeof Date !== 'undefined' && Date) === 'function' ? _k : Object,
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
            typeof (_l = typeof Date !== 'undefined' && Date) === 'function' ? _l : Object,
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
    /* 31 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductSku = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const product_model_1 = __webpack_require__(19);
      let ProductSku = class ProductSku {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '商品id' }),
          (0, typegoose_1.prop)({ ref: () => product_model_1.Product, required: true }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
              customName: 'product_sku',
            },
          }),
        ],
        ProductSku,
      );
      exports.ProductSku = ProductSku;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserAddress = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const user_model_1 = __webpack_require__(34);
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
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            options: {
              customName: 'user_address',
            },
          }),
        ],
        UserAddress,
      );
      exports.UserAddress = UserAddress;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.User = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const bcryptjs_1 = __webpack_require__(35);
      const user_enum_1 = __webpack_require__(36);
      let User = class User {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户昵称' }),
          (0, typegoose_1.prop)(),
          __metadata('design:type', String),
        ],
        User.prototype,
        'nickName',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '邮箱' }),
          (0, typegoose_1.prop)({
            index: true,
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
        'avatarUrl',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '性别', enum: user_enum_1.Gender, type: Number }),
          (0, typegoose_1.prop)(),
          __metadata(
            'design:type',
            typeof (_a = typeof user_enum_1.Gender !== 'undefined' && user_enum_1.Gender) ===
              'function'
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
          (0, swagger_1.ApiProperty)({ title: '小程序用户openid' }),
          (0, typegoose_1.prop)({
            type: String,
          }),
          __metadata('design:type', String),
        ],
        User.prototype,
        'openid',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '小程序sessionkey' }),
          (0, typegoose_1.prop)({
            type: String,
          }),
          __metadata('design:type', String),
        ],
        User.prototype,
        'sessionKey',
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
    /* 35 */
    /***/ (module) => {
      module.exports = require('bcryptjs');

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AuthModule = void 0;
      const common_1 = __webpack_require__(5);
      const jwt_1 = __webpack_require__(38);
      const passport_1 = __webpack_require__(12);
      const jwt_config_1 = __webpack_require__(39);
      const auth_controller_1 = __webpack_require__(40);
      const web_jwt_strategy_1 = __webpack_require__(46);
      const web_local_strategy_1 = __webpack_require__(48);
      const auth_service_1 = __webpack_require__(41);
      let AuthModule = class AuthModule {};
      AuthModule = __decorate(
        [
          (0, common_1.Module)({
            imports: [
              passport_1.PassportModule,
              jwt_1.JwtModule.register({
                secret: jwt_config_1.webJwtConfig.secret,
                signOptions: { expiresIn: jwt_config_1.webJwtConfig.expiresIn },
              }),
            ],
            controllers: [auth_controller_1.AuthController],
            providers: [
              web_local_strategy_1.WebLocalStrategy,
              web_jwt_strategy_1.WebJwtStrategy,
              auth_service_1.AuthService,
            ],
          }),
        ],
        AuthModule,
      );
      exports.AuthModule = AuthModule;

      /***/
    },
    /* 38 */
    /***/ (module) => {
      module.exports = require('@nestjs/jwt');

      /***/
    },
    /* 39 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.AuthController = void 0;
      const common_1 = __webpack_require__(5);
      const jwt_1 = __webpack_require__(38);
      const passport_1 = __webpack_require__(12);
      const swagger_1 = __webpack_require__(2);
      const ResponseResultModel_1 = __webpack_require__(8);
      const auth_service_1 = __webpack_require__(41);
      const web_login_dto_1 = __webpack_require__(42);
      const web_register_dto_1 = __webpack_require__(43);
      const tnwx_1 = __webpack_require__(44);
      const mini_program_login_dto_1 = __webpack_require__(45);
      let AuthController = class AuthController {
        constructor(jwtService, authServe) {
          this.jwtService = jwtService;
          this.authServe = authServe;
          const devApiConfig = new tnwx_1.ApiConfig(
            'wx38e9ca4801b37264',
            'bfd7c86e9c3764a7e87d46da05d898bd',
          );
          tnwx_1.ApiConfigKit.putApiConfig(devApiConfig);
        }
        async webLogin(dto, req) {
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
        async register(registerDto) {
          const res = await this.authServe.register(registerDto);
          (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async minProgramLogin(miniLoginDto) {
          const res = await tnwx_1.MiniProgramApi.code2Session(
            tnwx_1.ApiConfigKit.getAppId,
            tnwx_1.ApiConfigKit.getApiConfig.getAppScrect,
            miniLoginDto.code,
          );
          if (!res.openid) {
            return {
              code: 1001,
              message: '用户code错误',
            };
          }
          const userInfo = await this.authServe.miniProgramLogin({
            openid: res.openid,
            sessionKey: res.session_key,
            nickName: miniLoginDto.nickName,
            avatarUrl: miniLoginDto.avatarUrl,
          });
          const accessToken = this.jwtService.sign({
            openid: res.openid,
            id: String(userInfo === null || userInfo === void 0 ? void 0 : userInfo._id),
          });
          return (0, ResponseResultModel_1.apiSucceed)({
            accessToken,
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl,
          });
        }
      };
      __decorate(
        [
          (0, swagger_1.ApiOperation)({ summary: 'web-会员登录' }),
          (0, common_1.Post)('login'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-local')),
          __param(0, (0, common_1.Body)()),
          __param(1, (0, common_1.Req)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof web_login_dto_1.WebLoginDto !== 'undefined' && web_login_dto_1.WebLoginDto) ===
            'function'
              ? _a
              : Object,
            Object,
          ]),
          __metadata(
            'design:returntype',
            typeof (_b = typeof Promise !== 'undefined' && Promise) === 'function' ? _b : Object,
          ),
        ],
        AuthController.prototype,
        'webLogin',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('register'),
          (0, swagger_1.ApiOperation)({ summary: 'web-会员注册' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof web_register_dto_1.WebRegisterDto !== 'undefined' &&
              web_register_dto_1.WebRegisterDto) === 'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        AuthController.prototype,
        'register',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('miniProgramLogin'),
          (0, swagger_1.ApiOperation)({ summary: '小程序登录' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof mini_program_login_dto_1.MiniLoginDto !== 'undefined' &&
              mini_program_login_dto_1.MiniLoginDto) === 'function'
              ? _d
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        AuthController.prototype,
        'minProgramLogin',
        null,
      );
      AuthController = __decorate(
        [
          (0, swagger_1.ApiTags)('登录'),
          (0, common_1.Controller)('auth'),
          __metadata('design:paramtypes', [
            typeof (_e = typeof jwt_1.JwtService !== 'undefined' && jwt_1.JwtService) === 'function'
              ? _e
              : Object,
            typeof (_f =
              typeof auth_service_1.AuthService !== 'undefined' && auth_service_1.AuthService) ===
            'function'
              ? _f
              : Object,
          ]),
        ],
        AuthController,
      );
      exports.AuthController = AuthController;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.AuthService = void 0;
      const common_1 = __webpack_require__(5);
      const typegoose_1 = __webpack_require__(16);
      const user_model_1 = __webpack_require__(34);
      const nestjs_typegoose_1 = __webpack_require__(26);
      let AuthService = class AuthService {
        constructor(userModel) {
          this.userModel = userModel;
        }
        async register(registerDto) {
          return await this.userModel.create(registerDto);
        }
        async miniProgramLogin(miniProgramRegisterDto) {
          const info = await this.userModel.findOne({ openid: miniProgramRegisterDto.openid });
          if (!info) {
            return await this.userModel.create(miniProgramRegisterDto);
          }
          return info;
        }
      };
      AuthService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.User)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
          ]),
        ],
        AuthService,
      );
      exports.AuthService = AuthService;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.WebLoginDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(6);
      class WebLoginDto {}
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
        WebLoginDto.prototype,
        'email',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '密码' }),
          (0, class_validator_1.IsNotEmpty)({ message: '密码不能为空' }),
          __metadata('design:type', String),
        ],
        WebLoginDto.prototype,
        'password',
        void 0,
      );
      exports.WebLoginDto = WebLoginDto;

      /***/
    },
    /* 43 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.WebRegisterDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(6);
      class WebRegisterDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '名称' }),
          (0, class_validator_1.IsNotEmpty)({ message: '用户名不能为空' }),
          __metadata('design:type', String),
        ],
        WebRegisterDto.prototype,
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
        WebRegisterDto.prototype,
        'email',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '手机号码' }), __metadata('design:type', String)],
        WebRegisterDto.prototype,
        'phone',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '密码' }),
          (0, class_validator_1.IsNotEmpty)({ message: '密码不能为空' }),
          __metadata('design:type', String),
        ],
        WebRegisterDto.prototype,
        'password',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '头像' }), __metadata('design:type', String)],
        WebRegisterDto.prototype,
        'avatarUrl',
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
        WebRegisterDto.prototype,
        'gender',
        void 0,
      );
      exports.WebRegisterDto = WebRegisterDto;

      /***/
    },
    /* 44 */
    /***/ (module) => {
      module.exports = require('tnwx');

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MiniProgramRegisterDto = exports.MiniLoginDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class MiniLoginDto {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: 'code' }), __metadata('design:type', String)],
        MiniLoginDto.prototype,
        'code',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '微信用户昵称' }), __metadata('design:type', String)],
        MiniLoginDto.prototype,
        'nickName',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '微信用户头像' }), __metadata('design:type', String)],
        MiniLoginDto.prototype,
        'avatarUrl',
        void 0,
      );
      exports.MiniLoginDto = MiniLoginDto;
      class MiniProgramRegisterDto {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '微信用户昵称' }), __metadata('design:type', String)],
        MiniProgramRegisterDto.prototype,
        'nickName',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '微信用户头像' }), __metadata('design:type', String)],
        MiniProgramRegisterDto.prototype,
        'avatarUrl',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '微信用户openid' }),
          __metadata('design:type', String),
        ],
        MiniProgramRegisterDto.prototype,
        'openid',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '微信用户sessionKey' }),
          __metadata('design:type', String),
        ],
        MiniProgramRegisterDto.prototype,
        'sessionKey',
        void 0,
      );
      exports.MiniProgramRegisterDto = MiniProgramRegisterDto;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.WebJwtStrategy = void 0;
      const passport_jwt_1 = __webpack_require__(47);
      const passport_1 = __webpack_require__(12);
      const nestjs_typegoose_1 = __webpack_require__(26);
      const typegoose_1 = __webpack_require__(16);
      const user_model_1 = __webpack_require__(34);
      const jwt_config_1 = __webpack_require__(39);
      let WebJwtStrategy = class WebJwtStrategy extends (0, passport_1.PassportStrategy)(
        passport_jwt_1.Strategy,
        'web-jwt',
      ) {
        constructor(userModel) {
          super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwt_config_1.webJwtConfig.secret,
            ignoreExpiration: false,
          });
          this.userModel = userModel;
        }
        async validate(payload) {
          return await this.userModel.findById(payload.id);
        }
      };
      WebJwtStrategy = __decorate(
        [
          __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.User)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
          ]),
        ],
        WebJwtStrategy,
      );
      exports.WebJwtStrategy = WebJwtStrategy;

      /***/
    },
    /* 47 */
    /***/ (module) => {
      module.exports = require('passport-jwt');

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.WebLocalStrategy = void 0;
      const passport_local_1 = __webpack_require__(49);
      const passport_1 = __webpack_require__(12);
      const nestjs_typegoose_1 = __webpack_require__(26);
      const typegoose_1 = __webpack_require__(16);
      const bcryptjs_1 = __webpack_require__(35);
      const user_model_1 = __webpack_require__(34);
      const ResponseResultModel_1 = __webpack_require__(8);
      let WebLocalStrategy = class WebLocalStrategy extends (0, passport_1.PassportStrategy)(
        passport_local_1.Strategy,
        'web-local',
      ) {
        constructor(userModel) {
          super({
            usernameField: 'email',
            passwordField: 'password',
          });
          this.userModel = userModel;
        }
        async validate(email, password) {
          const user = await this.userModel.findOne({ email }).select('+password');
          if (!user) {
            throw new ResponseResultModel_1.ApiFail(101, '用户名不正确');
          }
          if (!(0, bcryptjs_1.compareSync)(password, user.password)) {
            throw new ResponseResultModel_1.ApiFail(102, '密码不正确');
          }
          if (!user.status) {
            throw new ResponseResultModel_1.ApiFail(103, '用户已被禁用');
          }
          return user;
        }
      };
      WebLocalStrategy = __decorate(
        [
          __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.User)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
          ]),
        ],
        WebLocalStrategy,
      );
      exports.WebLocalStrategy = WebLocalStrategy;

      /***/
    },
    /* 49 */
    /***/ (module) => {
      module.exports = require('passport-local');

      /***/
    },
    /* 50 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
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
            if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p))
              __createBinding(exports, m, p);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      __exportStar(__webpack_require__(51), exports);
      __exportStar(__webpack_require__(77), exports);

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CommonModule = void 0;
      const common_1 = __webpack_require__(5);
      const config_1 = __webpack_require__(52);
      const db_1 = __webpack_require__(53);
      const common_service_1 = __webpack_require__(77);
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
    /* 52 */
    /***/ (module) => {
      module.exports = require('@nestjs/config');

      /***/
    },
    /* 53 */
    /***/ function (__unused_webpack_module, exports, __webpack_require__) {
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
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
            if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p))
              __createBinding(exports, m, p);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      __exportStar(__webpack_require__(54), exports);
      __exportStar(__webpack_require__(56), exports);

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.DbModule = void 0;
      const common_1 = __webpack_require__(5);
      const db_config_1 = __webpack_require__(55);
      const nestjs_typegoose_1 = __webpack_require__(26);
      const db_service_1 = __webpack_require__(56);
      const admin_model_1 = __webpack_require__(57);
      const banner_model_1 = __webpack_require__(17);
      const category_model_1 = __webpack_require__(21);
      const chat_conversation_record_model_1 = __webpack_require__(60);
      const chat_messages_model_1 = __webpack_require__(62);
      const classify_navigation_model_1 = __webpack_require__(23);
      const coupon_model_1 = __webpack_require__(63);
      const customer_service_model_1 = __webpack_require__(61);
      const library_category_model_1 = __webpack_require__(64);
      const media_library_model_1 = __webpack_require__(65);
      const menu_model_1 = __webpack_require__(59);
      const news_model_1 = __webpack_require__(66);
      const order_model_1 = __webpack_require__(30);
      const product_comment_model_1 = __webpack_require__(67);
      const product_param_model_1 = __webpack_require__(68);
      const product_sku_attr_model_1 = __webpack_require__(69);
      const product_sku_model_1 = __webpack_require__(32);
      const product_topic_model_1 = __webpack_require__(70);
      const product_unit_model_1 = __webpack_require__(71);
      const product_model_1 = __webpack_require__(19);
      const role_model_1 = __webpack_require__(58);
      const site_setting_model_1 = __webpack_require__(24);
      const tag_model_1 = __webpack_require__(22);
      const user_address_model_1 = __webpack_require__(33);
      const user_cart_model_1 = __webpack_require__(72);
      const user_collection_model_1 = __webpack_require__(73);
      const user_integral_model_1 = __webpack_require__(74);
      const user_label_model_1 = __webpack_require__(75);
      const user_views_history_model_1 = __webpack_require__(76);
      const user_model_1 = __webpack_require__(34);
      const models = nestjs_typegoose_1.TypegooseModule.forFeature([
        admin_model_1.Admin,
        role_model_1.Role,
        menu_model_1.Menu,
        user_model_1.User,
        user_address_model_1.UserAddress,
        user_collection_model_1.UserCollection,
        user_views_history_model_1.UserViewsHistory,
        user_cart_model_1.UserCart,
        user_integral_model_1.UserIntegral,
        user_label_model_1.UserLabel,
        coupon_model_1.Coupon,
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
              nestjs_typegoose_1.TypegooseModule.forRoot(db_config_1.dbConfig.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              }),
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
    /* 55 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.DbService = void 0;
      const common_1 = __webpack_require__(5);
      let DbService = class DbService {};
      DbService = __decorate([(0, common_1.Injectable)()], DbService);
      exports.DbService = DbService;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Admin = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const bcryptjs_1 = __webpack_require__(35);
      const role_model_1 = __webpack_require__(58);
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
          (0, typegoose_1.prop)({ ref: () => role_model_1.Role, type: [role_model_1.Role] }),
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
    /* 58 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Role = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const menu_model_1 = __webpack_require__(59);
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
    /* 59 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var Menu_1, _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Menu = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
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
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
    /* 60 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ChatConversationRecord = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const customer_service_model_1 = __webpack_require__(61);
      const user_model_1 = __webpack_require__(34);
      let ChatConversationRecord = class ChatConversationRecord {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户d' }),
          (0, typegoose_1.prop)({ required: true, ref: () => user_model_1.User }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            typeof (_b = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            options: {
              customName: 'chat_conversation_record',
            },
          }),
        ],
        ChatConversationRecord,
      );
      exports.ChatConversationRecord = ChatConversationRecord;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CustomerService = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const bcryptjs_1 = __webpack_require__(35);
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
            options: {
              customName: 'customer_service',
            },
          }),
        ],
        CustomerService,
      );
      exports.CustomerService = CustomerService;

      /***/
    },
    /* 62 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ChatMessages = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      let PushProductType = class PushProductType {};
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
      PushProductType = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
            options: {
              customName: 'chat_message',
            },
          }),
        ],
        PushProductType,
      );
      let ChatMessages = class ChatMessages {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '发送人关联表' }),
          (0, typegoose_1.prop)({ enum: ['User', 'CustomerService'], required: true }),
          __metadata('design:type', String),
        ],
        ChatMessages.prototype,
        'userRef',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '接受人关联表' }),
          (0, typegoose_1.prop)({ enum: ['User', 'CustomerService'], required: true }),
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
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            typeof (_b = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
    /* 63 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Coupon = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const product_model_1 = __webpack_require__(19);
      let Coupon = class Coupon {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '优惠券名称' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Coupon.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '优惠券类型',
            description: '1:通用 2:满减券 3:折扣券',
          }),
          (0, typegoose_1.prop)({ required: true, default: 1 }),
          __metadata('design:type', Number),
        ],
        Coupon.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '优惠券金额' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', Number),
        ],
        Coupon.prototype,
        'amount',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '优惠券有效期', description: '单位:天' }),
          (0, typegoose_1.prop)({ required: true, type: Number, default: 0 }),
          __metadata('design:type', Number),
        ],
        Coupon.prototype,
        'validTime',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '优惠券使用条件' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', Number),
        ],
        Coupon.prototype,
        'condition',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '优惠券使用说明' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        Coupon.prototype,
        'description',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '优惠券状态' }),
          (0, typegoose_1.prop)({ required: true, default: 1 }),
          __metadata('design:type', Number),
        ],
        Coupon.prototype,
        'status',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '优惠券关联商品' }),
          (0, typegoose_1.prop)({
            required: true,
            ref: () => product_model_1.Product,
            type: [product_model_1.Product],
          }),
          __metadata('design:type', Array),
        ],
        Coupon.prototype,
        'productId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '排序' }),
          (0, typegoose_1.prop)({ required: true, default: 1 }),
          __metadata('design:type', Number),
        ],
        Coupon.prototype,
        'sort',
        void 0,
      );
      Coupon = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        Coupon,
      );
      exports.Coupon = Coupon;

      /***/
    },
    /* 64 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var LibraryCategory_1, _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.LibraryCategory = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      let LibraryCategory = (LibraryCategory_1 = class LibraryCategory {});
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '分类名称' }),
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
          (0, typegoose_1.prop)({ ref: () => LibraryCategory_1, default: null }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            options: {
              customName: 'library_category',
            },
          }),
        ],
        LibraryCategory,
      );
      exports.LibraryCategory = LibraryCategory;

      /***/
    },
    /* 65 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.MediaLibrary = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const library_category_model_1 = __webpack_require__(64);
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
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '文件存储空间类型' }),
          (0, typegoose_1.prop)({ type: Number }),
          __metadata('design:type', Number),
        ],
        MediaLibrary.prototype,
        'storageType',
        void 0,
      );
      MediaLibrary = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
            options: {
              customName: 'media_library',
            },
          }),
        ],
        MediaLibrary,
      );
      exports.MediaLibrary = MediaLibrary;

      /***/
    },
    /* 66 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.News = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const tag_model_1 = __webpack_require__(22);
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
    /* 67 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductComment = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const product_model_1 = __webpack_require__(19);
      const user_model_1 = __webpack_require__(34);
      let ProductComment = class ProductComment {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户ID' }),
          (0, typegoose_1.prop)({ ref: () => user_model_1.User }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            typeof (_b = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            typeof (_c = typeof Array !== 'undefined' && Array) === 'function' ? _c : Object,
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
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '物流星级' }),
          (0, typegoose_1.prop)({ type: Number, default: 0 }),
          __metadata('design:type', Number),
        ],
        ProductComment.prototype,
        'logisticsRate',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '服务星级' }),
          (0, typegoose_1.prop)({ type: Number, default: 0 }),
          __metadata('design:type', Number),
        ],
        ProductComment.prototype,
        'serviceRate',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否匿名' }),
          (0, typegoose_1.prop)({ type: Boolean, default: false }),
          __metadata('design:type', Boolean),
        ],
        ProductComment.prototype,
        'anonymous',
        void 0,
      );
      ProductComment = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
            options: {
              customName: 'product_comment',
            },
          }),
        ],
        ProductComment,
      );
      exports.ProductComment = ProductComment;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductParam = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      class ParamTpye {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '参数名' }), __metadata('design:type', String)],
        ParamTpye.prototype,
        'name',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '参数值' }), __metadata('design:type', String)],
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
            options: {
              customName: 'product_param',
            },
          }),
        ],
        ProductParam,
      );
      exports.ProductParam = ProductParam;

      /***/
    },
    /* 69 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductSkuAttr = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const product_model_1 = __webpack_require__(19);
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
          (0, typegoose_1.prop)({ ref: () => product_model_1.Product, default: null }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            options: {
              customName: 'product_sku_attr',
            },
          }),
        ],
        ProductSkuAttr,
      );
      exports.ProductSkuAttr = ProductSkuAttr;

      /***/
    },
    /* 70 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductTopic = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const category_model_1 = __webpack_require__(21);
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
          (0, typegoose_1.prop)({ ref: () => category_model_1.Category, required: true }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            options: {
              customName: 'product_topic',
            },
          }),
        ],
        ProductTopic,
      );
      exports.ProductTopic = ProductTopic;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductUnit = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
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
            options: {
              customName: 'product_unit',
            },
          }),
        ],
        ProductUnit,
      );
      exports.ProductUnit = ProductUnit;

      /***/
    },
    /* 72 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserCart = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const product_sku_model_1 = __webpack_require__(32);
      const product_model_1 = __webpack_require__(19);
      const user_model_1 = __webpack_require__(34);
      let UserCart = class UserCart {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id' }),
          (0, typegoose_1.prop)({ ref: () => user_model_1.User }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            typeof (_b = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
          (0, swagger_1.ApiProperty)({ title: 'skuId' }),
          (0, typegoose_1.prop)({ ref: () => product_sku_model_1.ProductSku }),
          __metadata(
            'design:type',
            typeof (_c = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
              ? _c
              : Object,
          ),
        ],
        UserCart.prototype,
        'skuId',
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
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '是否有库存' }),
          (0, typegoose_1.prop)({ type: Boolean, default: true }),
          __metadata('design:type', Boolean),
        ],
        UserCart.prototype,
        'hasStock',
        void 0,
      );
      UserCart = __decorate(
        [
          (0, typegoose_1.ModelOptions)({
            schemaOptions: {
              timestamps: true,
            },
            options: {
              customName: 'user_cart',
            },
          }),
        ],
        UserCart,
      );
      exports.UserCart = UserCart;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserCollection = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const product_model_1 = __webpack_require__(19);
      const user_model_1 = __webpack_require__(34);
      let UserCollection = class UserCollection {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id' }),
          (0, typegoose_1.prop)({ ref: () => user_model_1.User, required: true }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
          (0, typegoose_1.prop)({ ref: () => product_model_1.Product, required: true }),
          __metadata(
            'design:type',
            typeof (_b = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            options: {
              customName: 'user_collection',
            },
          }),
        ],
        UserCollection,
      );
      exports.UserCollection = UserCollection;

      /***/
    },
    /* 74 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserIntegral = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const user_model_1 = __webpack_require__(34);
      let UserIntegral = class UserIntegral {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id' }),
          (0, typegoose_1.prop)({ required: true, ref: () => user_model_1.User }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
              ? _a
              : Object,
          ),
        ],
        UserIntegral.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '积分' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', Number),
        ],
        UserIntegral.prototype,
        'integral',
        void 0,
      );
      UserIntegral = __decorate(
        [
          (0, typegoose_1.modelOptions)({
            options: {
              customName: 'user_integral',
            },
            schemaOptions: {
              timestamps: true,
            },
          }),
        ],
        UserIntegral,
      );
      exports.UserIntegral = UserIntegral;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserLabel = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const user_model_1 = __webpack_require__(34);
      let UserLabel = class UserLabel {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '名称' }),
          (0, typegoose_1.prop)({ required: true }),
          __metadata('design:type', String),
        ],
        UserLabel.prototype,
        'name',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            name: '类型',
            type: Number,
            enum: [1, 2],
            description: '1: 手动添加，2: 自动添加',
          }),
          (0, typegoose_1.prop)({ enum: [1, 2], default: 1, type: Number }),
          __metadata('design:type', Number),
        ],
        UserLabel.prototype,
        'type',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '用户数' }),
          (0, typegoose_1.prop)({ type: Number, default: 0 }),
          __metadata('design:type', Number),
        ],
        UserLabel.prototype,
        'userCount',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ name: '用户id' }),
          (0, typegoose_1.prop)({ ref: () => user_model_1.User }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
              ? _a
              : Object,
          ),
        ],
        UserLabel.prototype,
        'userId',
        void 0,
      );
      UserLabel = __decorate(
        [
          (0, typegoose_1.modelOptions)({
            schemaOptions: {
              timestamps: true,
            },
            options: {
              customName: 'user_label',
            },
          }),
        ],
        UserLabel,
      );
      exports.UserLabel = UserLabel;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserViewsHistory = void 0;
      const swagger_1 = __webpack_require__(2);
      const typegoose_1 = __webpack_require__(16);
      const product_model_1 = __webpack_require__(19);
      const user_model_1 = __webpack_require__(34);
      let UserViewsHistory = class UserViewsHistory {};
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '用户id' }),
          (0, typegoose_1.prop)({ ref: () => user_model_1.User, required: true }),
          __metadata(
            'design:type',
            typeof (_a = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
          (0, typegoose_1.prop)({ ref: () => product_model_1.Product, required: true }),
          __metadata(
            'design:type',
            typeof (_b = typeof typegoose_1.Ref !== 'undefined' && typegoose_1.Ref) === 'function'
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
            options: {
              customName: 'user_view_history',
            },
          }),
        ],
        UserViewsHistory,
      );
      exports.UserViewsHistory = UserViewsHistory;

      /***/
    },
    /* 77 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CommonService = void 0;
      const common_1 = __webpack_require__(5);
      let CommonService = class CommonService {};
      CommonService = __decorate([(0, common_1.Injectable)()], CommonService);
      exports.CommonService = CommonService;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductModule = void 0;
      const common_1 = __webpack_require__(5);
      const product_service_1 = __webpack_require__(79);
      const product_controller_1 = __webpack_require__(80);
      const jwt_1 = __webpack_require__(38);
      const jwt_config_1 = __webpack_require__(39);
      let ProductModule = class ProductModule {};
      ProductModule = __decorate(
        [
          (0, common_1.Module)({
            imports: [
              jwt_1.JwtModule.register({
                secret: jwt_config_1.webJwtConfig.secret,
                signOptions: { expiresIn: jwt_config_1.webJwtConfig.expiresIn },
              }),
            ],
            controllers: [product_controller_1.ProductController],
            providers: [product_service_1.ProductService],
          }),
        ],
        ProductModule,
      );
      exports.ProductModule = ProductModule;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.ProductService = void 0;
      const common_1 = __webpack_require__(5);
      const typegoose_1 = __webpack_require__(16);
      const product_sku_attr_model_1 = __webpack_require__(69);
      const product_sku_model_1 = __webpack_require__(32);
      const product_model_1 = __webpack_require__(19);
      const user_collection_model_1 = __webpack_require__(73);
      const user_views_history_model_1 = __webpack_require__(76);
      const nestjs_typegoose_1 = __webpack_require__(26);
      let ProductService = class ProductService {
        constructor(
          productModel,
          productSkuAttrModel,
          productSkuModel,
          userCollectionModel,
          userViewsHistory,
        ) {
          this.productModel = productModel;
          this.productSkuAttrModel = productSkuAttrModel;
          this.productSkuModel = productSkuModel;
          this.userCollectionModel = userCollectionModel;
          this.userViewsHistory = userViewsHistory;
          console.log('ProductService');
        }
        async findAll() {
          return await this.productModel.find();
        }
        async findOne(id, userId) {
          await this.productModel.findByIdAndUpdate(id, { $inc: { views: 1 } });
          let isCollection = false;
          if (userId) {
            const isHasProduct = await this.userViewsHistory.findOne({
              productId: id,
              userId,
            });
            if (!isHasProduct) await this.userViewsHistory.create({ userId, productId: id });
            const isCollectionProduct = await this.userCollectionModel.findOne({
              userId,
              productId: id,
            });
            if (isCollectionProduct) {
              isCollection = true;
            }
          }
          const productSkuAttr = await this.productSkuAttrModel.find({ productId: id });
          const productSku = await this.productSkuModel.find({ productId: id });
          const res = await this.productModel.findById(id);
          return Object.assign(Object.assign({ isCollection }, res._doc), {
            skuAttrs: productSkuAttr,
            skus: productSku,
          });
        }
        async collection(userCollectionProductDto) {
          const isHas = await this.userCollectionModel.findOne({
            userId: userCollectionProductDto.userId,
            productId: userCollectionProductDto.productId,
          });
          if (isHas) {
            return this.userCollectionModel.findOneAndDelete({
              userId: userCollectionProductDto.userId,
              productId: userCollectionProductDto.productId,
            });
          }
          return await this.userCollectionModel.create(userCollectionProductDto);
        }
        async removeCollection(userCollectionProductDto) {
          return await this.userCollectionModel.findOneAndDelete(userCollectionProductDto);
        }
        async getHotProduct() {
          return await this.productModel.find({ isHot: true });
        }
      };
      ProductService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(product_model_1.Product)),
          __param(1, (0, nestjs_typegoose_1.InjectModel)(product_sku_attr_model_1.ProductSkuAttr)),
          __param(2, (0, nestjs_typegoose_1.InjectModel)(product_sku_model_1.ProductSku)),
          __param(3, (0, nestjs_typegoose_1.InjectModel)(user_collection_model_1.UserCollection)),
          __param(
            4,
            (0, nestjs_typegoose_1.InjectModel)(user_views_history_model_1.UserViewsHistory),
          ),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _b
              : Object,
            typeof (_c =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _c
              : Object,
            typeof (_d =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _d
              : Object,
            typeof (_e =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _e
              : Object,
          ]),
        ],
        ProductService,
      );
      exports.ProductService = ProductService;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.ProductController = void 0;
      const common_1 = __webpack_require__(5);
      const jwt_1 = __webpack_require__(38);
      const passport_1 = __webpack_require__(12);
      const swagger_1 = __webpack_require__(2);
      const parse_id_pipe_1 = __webpack_require__(81);
      const ResponseResultModel_1 = __webpack_require__(8);
      const user_model_1 = __webpack_require__(34);
      const current_user_decorator_1 = __webpack_require__(83);
      const product_service_1 = __webpack_require__(79);
      let ProductController = class ProductController {
        constructor(productService, jwtService) {
          this.productService = productService;
          this.jwtService = jwtService;
        }
        async findAll() {
          const res = await this.productService.findAll();
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getHotProduct() {
          const res = await this.productService.getHotProduct();
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id, authorization) {
          const token =
            authorization === null || authorization === void 0
              ? void 0
              : authorization.split('Bearer ').pop();
          let userId = null;
          if (token) {
            const decodedJwtAccessToken = this.jwtService.decode(token);
            userId =
              decodedJwtAccessToken === null || decodedJwtAccessToken === void 0
                ? void 0
                : decodedJwtAccessToken.id;
          }
          const res = await this.productService.findOne(id, userId);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async collection(id, user) {
          const res = await this.productService.collection({
            userId: user === null || user === void 0 ? void 0 : user._id,
            productId: id,
          });
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async delCollection(id, user) {
          const res = await this.productService.removeCollection({
            userId: user === null || user === void 0 ? void 0 : user._id,
            productId: id,
          });
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '获取全部商品信息' }),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', []),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('hot'),
          (0, swagger_1.ApiOperation)({ summary: '获取热门商品' }),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', []),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'getHotProduct',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '获取商品信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          (0, swagger_1.ApiHeader)({
            name: 'Authorization',
            description: '用户token: 格式 Bearer + Token',
            required: false,
          }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __param(1, (0, common_1.Headers)('Authorization')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String, String]),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('collection/:id'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, swagger_1.ApiOperation)({ summary: '用户收藏改商品' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __param(1, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_a =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'collection',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)('collection/:id'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, swagger_1.ApiOperation)({ summary: '删除收藏改商品' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __param(1, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_b =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductController.prototype,
        'delCollection',
        null,
      );
      ProductController = __decorate(
        [
          (0, swagger_1.ApiTags)('商品相关'),
          (0, common_1.Controller)('product'),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof product_service_1.ProductService !== 'undefined' &&
              product_service_1.ProductService) === 'function'
              ? _c
              : Object,
            typeof (_d = typeof jwt_1.JwtService !== 'undefined' && jwt_1.JwtService) === 'function'
              ? _d
              : Object,
          ]),
        ],
        ProductController,
      );
      exports.ProductController = ProductController;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ParseIdPipe = void 0;
      const common_1 = __webpack_require__(5);
      const mongoose_1 = __webpack_require__(82);
      const ResponseResultModel_1 = __webpack_require__(8);
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
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CurrentUser = void 0;
      const common_1 = __webpack_require__(5);
      exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
        const req = ctx.switchToHttp().getRequest();
        return req.user;
      });

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserModule = void 0;
      const common_1 = __webpack_require__(5);
      const user_service_1 = __webpack_require__(85);
      const user_controller_1 = __webpack_require__(87);
      let UserModule = class UserModule {};
      UserModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [user_controller_1.UserController],
            providers: [user_service_1.UserService],
          }),
        ],
        UserModule,
      );
      exports.UserModule = UserModule;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      const common_1 = __webpack_require__(5);
      const typegoose_1 = __webpack_require__(16);
      const user_address_model_1 = __webpack_require__(33);
      const user_collection_model_1 = __webpack_require__(73);
      const user_views_history_model_1 = __webpack_require__(76);
      const mongodb_1 = __webpack_require__(86);
      const nestjs_typegoose_1 = __webpack_require__(26);
      let UserService = class UserService {
        constructor(userCollectionModel, userViewsHistoryModel, userAddressModel) {
          this.userCollectionModel = userCollectionModel;
          this.userViewsHistoryModel = userViewsHistoryModel;
          this.userAddressModel = userAddressModel;
          console.log('UserService');
        }
        async findUserCollectionList(userId) {
          return await this.userCollectionModel.aggregate([
            {
              $match: {
                userId: new mongodb_1.ObjectId(userId),
              },
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
              $unwind: {
                path: '$product',
              },
            },
            {
              $project: {
                title: '$product.title',
                pic: '$product.pic',
                price: '$product.price',
                views: '$product.views',
                goods_id: '$product._id',
              },
            },
          ]);
        }
        async findUserViewsHistoryAll(userId) {
          return await this.userViewsHistoryModel.aggregate([
            {
              $match: {
                userId: new mongodb_1.ObjectId(userId),
              },
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
              $unwind: {
                path: '$product',
              },
            },
            {
              $project: {
                title: '$product.title',
                pic: '$product.pic',
                price: '$product.price',
                views: '$product.views',
                goods_id: '$product._id',
              },
            },
          ]);
        }
        async createAddress(createUserAddressDto) {
          return this.userAddressModel.create(createUserAddressDto);
        }
        async findUserAddressAll(userId) {
          return await this.userAddressModel.find({ userId });
        }
        async findUserAddressOne(id) {
          return await this.userAddressModel.findById(id);
        }
        async updateUserAddress(id, updateUserAddressDto) {
          return await this.userAddressModel.findByIdAndUpdate(id, updateUserAddressDto);
        }
        async removeUserAddress(id) {
          return await this.userAddressModel.findByIdAndDelete(id);
        }
        async updateAddressDefault(updateAddressDefaultDto) {
          if (updateAddressDefaultDto.isDefault) {
            await this.userAddressModel.findOneAndUpdate(
              {
                userId: updateAddressDefaultDto.userId,
                isDefault: updateAddressDefaultDto.isDefault,
              },
              { isDefault: !updateAddressDefaultDto.isDefault },
            );
          }
          await this.userAddressModel.findByIdAndUpdate(updateAddressDefaultDto.id, {
            isDefault: updateAddressDefaultDto.isDefault,
          });
        }
      };
      UserService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(user_collection_model_1.UserCollection)),
          __param(
            1,
            (0, nestjs_typegoose_1.InjectModel)(user_views_history_model_1.UserViewsHistory),
          ),
          __param(2, (0, nestjs_typegoose_1.InjectModel)(user_address_model_1.UserAddress)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _b
              : Object,
            typeof (_c =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _c
              : Object,
          ]),
        ],
        UserService,
      );
      exports.UserService = UserService;

      /***/
    },
    /* 86 */
    /***/ (module) => {
      module.exports = require('mongodb');

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.UserController = void 0;
      const common_1 = __webpack_require__(5);
      const passport_1 = __webpack_require__(12);
      const swagger_1 = __webpack_require__(2);
      const parse_id_pipe_1 = __webpack_require__(81);
      const ResponseResultModel_1 = __webpack_require__(8);
      const user_model_1 = __webpack_require__(34);
      const current_user_decorator_1 = __webpack_require__(83);
      const create_user_address_dto_1 = __webpack_require__(88);
      const update_address_default_dto_1 = __webpack_require__(89);
      const update_user_address_dto_1 = __webpack_require__(90);
      const user_service_1 = __webpack_require__(85);
      let UserController = class UserController {
        constructor(userService) {
          this.userService = userService;
        }
        async getUserCollectionList(user) {
          const res = await this.userService.findUserCollectionList(
            user === null || user === void 0 ? void 0 : user._id,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getUserViewsHistories(user) {
          const res = await this.userService.findUserViewsHistoryAll(
            user === null || user === void 0 ? void 0 : user._id,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async createAddress(createUserAddressDto, user) {
          const params = Object.assign(Object.assign({}, createUserAddressDto), {
            userId: user === null || user === void 0 ? void 0 : user._id,
          });
          const res = await this.userService.createAddress(params);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getUserAddress(user) {
          const res = await this.userService.findUserAddressAll(
            user === null || user === void 0 ? void 0 : user._id,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async getUserAddressInfo(id) {
          const res = await this.userService.findUserAddressOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async updateUserAddressInfo(id, updateUserAddressDto) {
          const res = await this.userService.updateUserAddress(id, updateUserAddressDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async removeUserAddressInfo(id) {
          const res = await this.userService.removeUserAddress(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async updateAddressDefault(user, updateAddressDefaultDto) {
          await this.userService.updateAddressDefault({
            id: updateAddressDefaultDto.id,
            userId: user === null || user === void 0 ? void 0 : user._id,
            isDefault: updateAddressDefaultDto.isDefault,
          });
          return (0, ResponseResultModel_1.apiSucceed)();
        }
      };
      __decorate(
        [
          (0, common_1.Get)('collections'),
          (0, swagger_1.ApiOperation)({ summary: '获取用户收藏商品列表' }),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _a
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'getUserCollectionList',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('viewsHistory'),
          (0, swagger_1.ApiOperation)({ summary: '获取用户浏览商品记录列表' }),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'getUserViewsHistories',
        null,
      );
      __decorate(
        [
          (0, common_1.Post)('address'),
          (0, swagger_1.ApiOperation)({ summary: '添加用户地址' }),
          __param(0, (0, common_1.Body)()),
          __param(1, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof create_user_address_dto_1.CreateUserAddressDto !== 'undefined' &&
              create_user_address_dto_1.CreateUserAddressDto) === 'function'
              ? _c
              : Object,
            typeof (_d =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _d
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'createAddress',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('address'),
          (0, swagger_1.ApiOperation)({ summary: '获取用户地址列表' }),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_e =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _e
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'getUserAddress',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('address/:id'),
          (0, swagger_1.ApiOperation)({ summary: '获取用户地址详情' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '地址id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'getUserAddressInfo',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('address/:id'),
          (0, swagger_1.ApiOperation)({ summary: '更新用户地址信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '地址id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            String,
            typeof (_f =
              typeof update_user_address_dto_1.UpdateUserAddressDto !== 'undefined' &&
              update_user_address_dto_1.UpdateUserAddressDto) === 'function'
              ? _f
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'updateUserAddressInfo',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)('address/:id'),
          (0, swagger_1.ApiOperation)({ summary: '删除用户地址信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '地址id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'removeUserAddressInfo',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('updateDefaultAddress'),
          (0, swagger_1.ApiOperation)({ summary: '更新用户地址默认' }),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __param(1, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_g =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _g
              : Object,
            typeof (_h =
              typeof update_address_default_dto_1.UpdateAddressDefaultDto !== 'undefined' &&
              update_address_default_dto_1.UpdateAddressDefaultDto) === 'function'
              ? _h
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserController.prototype,
        'updateAddressDefault',
        null,
      );
      UserController = __decorate(
        [
          (0, swagger_1.ApiTags)('用户相关'),
          (0, common_1.Controller)('user'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          __metadata('design:paramtypes', [
            typeof (_j =
              typeof user_service_1.UserService !== 'undefined' && user_service_1.UserService) ===
            'function'
              ? _j
              : Object,
          ]),
        ],
        UserController,
      );
      exports.UserController = UserController;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateUserAddressDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const class_validator_1 = __webpack_require__(6);
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
        [(0, swagger_1.ApiProperty)({ title: '用户id' }), __metadata('design:type', String)],
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
    /* 89 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateAddressDefaultDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class UpdateAddressDefaultDto {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '地址id' }), __metadata('design:type', String)],
        UpdateAddressDefaultDto.prototype,
        'id',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '用户id' }), __metadata('design:type', String)],
        UpdateAddressDefaultDto.prototype,
        'userId',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '是否默认' }), __metadata('design:type', Boolean)],
        UpdateAddressDefaultDto.prototype,
        'isDefault',
        void 0,
      );
      exports.UpdateAddressDefaultDto = UpdateAddressDefaultDto;

      /***/
    },
    /* 90 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateUserAddressDto = void 0;
      const swagger_1 = __webpack_require__(2);
      const create_user_address_dto_1 = __webpack_require__(88);
      class UpdateUserAddressDto extends (0, swagger_1.PartialType)(
        create_user_address_dto_1.CreateUserAddressDto,
      ) {}
      exports.UpdateUserAddressDto = UpdateUserAddressDto;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserCartModule = void 0;
      const common_1 = __webpack_require__(5);
      const user_cart_service_1 = __webpack_require__(92);
      const user_cart_controller_1 = __webpack_require__(93);
      let UserCartModule = class UserCartModule {};
      UserCartModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [user_cart_controller_1.UserCartController],
            providers: [user_cart_service_1.UserCartService],
          }),
        ],
        UserCartModule,
      );
      exports.UserCartModule = UserCartModule;

      /***/
    },
    /* 92 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.UserCartService = void 0;
      const common_1 = __webpack_require__(5);
      const typegoose_1 = __webpack_require__(16);
      const user_cart_model_1 = __webpack_require__(72);
      const nestjs_typegoose_1 = __webpack_require__(26);
      let UserCartService = class UserCartService {
        constructor(userCartModel) {
          this.userCartModel = userCartModel;
          console.log('UserCartService');
        }
        async create(createUserCartDto) {
          const has = await this.userCartModel.findOne({
            userId: createUserCartDto.userId,
            productId: createUserCartDto.productId,
          });
          if (has && !createUserCartDto.skuId) {
            return await this.userCartModel.findOneAndUpdate(
              {
                userId: createUserCartDto.userId,
                productId: createUserCartDto.productId,
              },
              { $inc: { num: 1 } },
            );
          }
          const hasSku = await this.userCartModel.findOne({
            userId: createUserCartDto.userId,
            productId: createUserCartDto.productId,
            skuId: createUserCartDto.skuId,
          });
          if (hasSku && createUserCartDto.skuId) {
            return await this.userCartModel.findOneAndUpdate(
              {
                userId: createUserCartDto.userId,
                productId: createUserCartDto.productId,
                skuId: createUserCartDto.skuId,
              },
              { $inc: { num: 1 } },
            );
          }
          return await this.userCartModel.create(createUserCartDto);
        }
        async findAll(userId) {
          return await this.userCartModel
            .find({ userId })
            .populate({ path: 'userId', select: ['nickName'] });
        }
        async findOne(id) {
          return await this.userCartModel
            .findById(id)
            .populate({ path: 'userId', select: ['nickName'] });
        }
        async remove(id) {
          await this.userCartModel.findByIdAndDelete(id);
        }
      };
      UserCartService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(user_cart_model_1.UserCart)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
          ]),
        ],
        UserCartService,
      );
      exports.UserCartService = UserCartService;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.UserCartController = void 0;
      const common_1 = __webpack_require__(5);
      const user_cart_service_1 = __webpack_require__(92);
      const create_user_cart_dto_1 = __webpack_require__(94);
      const swagger_1 = __webpack_require__(2);
      const user_model_1 = __webpack_require__(34);
      const current_user_decorator_1 = __webpack_require__(83);
      const ResponseResultModel_1 = __webpack_require__(8);
      const passport_1 = __webpack_require__(12);
      const parse_id_pipe_1 = __webpack_require__(81);
      let UserCartController = class UserCartController {
        constructor(userCartService) {
          this.userCartService = userCartService;
        }
        async create(createUserCartDto, user) {
          createUserCartDto.userId = user === null || user === void 0 ? void 0 : user._id;
          const res = await this.userCartService.create(createUserCartDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(user) {
          const res = await this.userCartService.findAll(
            user === null || user === void 0 ? void 0 : user._id,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findOne(id) {
          const res = await this.userCartService.findOne(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async remove(id) {
          const res = await this.userCartService.remove(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '加入购物车' }),
          __param(0, (0, common_1.Body)()),
          __param(1, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_user_cart_dto_1.CreateUserCartDto !== 'undefined' &&
              create_user_cart_dto_1.CreateUserCartDto) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserCartController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '获取用户购物车列表' }),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _c
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        UserCartController.prototype,
        'findAll',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '获取用户购物车详情' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '记录id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        UserCartController.prototype,
        'findOne',
        null,
      );
      __decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '删除购物车记录' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '记录id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        UserCartController.prototype,
        'remove',
        null,
      );
      UserCartController = __decorate(
        [
          (0, swagger_1.ApiTags)('购物车相关'),
          (0, common_1.Controller)('userCart'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof user_cart_service_1.UserCartService !== 'undefined' &&
              user_cart_service_1.UserCartService) === 'function'
              ? _d
              : Object,
          ]),
        ],
        UserCartController,
      );
      exports.UserCartController = UserCartController;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateUserCartDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class CreateUserCartDto {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品id' }), __metadata('design:type', String)],
        CreateUserCartDto.prototype,
        'productId',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品标题' }), __metadata('design:type', String)],
        CreateUserCartDto.prototype,
        'productName',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品封面图' }), __metadata('design:type', String)],
        CreateUserCartDto.prototype,
        'productPic',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '选购数量' }), __metadata('design:type', Number)],
        CreateUserCartDto.prototype,
        'num',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '选购规格名称' }), __metadata('design:type', String)],
        CreateUserCartDto.prototype,
        'skuName',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: 'skuId' }), __metadata('design:type', String)],
        CreateUserCartDto.prototype,
        'skuId',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '选购金额' }), __metadata('design:type', Number)],
        CreateUserCartDto.prototype,
        'price',
        void 0,
      );
      exports.CreateUserCartDto = CreateUserCartDto;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.OrderModule = void 0;
      const common_1 = __webpack_require__(5);
      const order_service_1 = __webpack_require__(96);
      const order_controller_1 = __webpack_require__(97);
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.OrderService = void 0;
      const common_1 = __webpack_require__(5);
      const typegoose_1 = __webpack_require__(16);
      const orderStatus_enum_1 = __webpack_require__(31);
      const ResponseResultModel_1 = __webpack_require__(8);
      const order_model_1 = __webpack_require__(30);
      const product_sku_model_1 = __webpack_require__(32);
      const product_model_1 = __webpack_require__(19);
      const user_cart_model_1 = __webpack_require__(72);
      const nestjs_typegoose_1 = __webpack_require__(26);
      let OrderService = class OrderService {
        constructor(orderModel, userCartModel, productSkuModel, productModel) {
          this.orderModel = orderModel;
          this.userCartModel = userCartModel;
          this.productSkuModel = productSkuModel;
          this.productModel = productModel;
          console.log('order service');
        }
        async create(createOrderDto) {
          for (const item of createOrderDto.products) {
            const skuInfo = await this.productSkuModel.findById(item.skuId);
            if (skuInfo && skuInfo.inventory <= 0) {
              await this.userCartModel.findOneAndUpdate(
                { userId: createOrderDto.userId, skuId: item.skuId },
                { hasStock: false },
              );
              throw new ResponseResultModel_1.ApiFail(101, `${item.productName}-库存不足`);
            } else {
              await this.productSkuModel.findByIdAndUpdate(item.skuId, {
                $inc: { inventory: -1 },
              });
            }
            if (!item.skuId) {
              const product = await this.productModel.findById(item.productId);
              if (product.inventory <= 0) {
                await this.userCartModel.findOneAndUpdate(
                  { userId: createOrderDto.userId, productId: item.productId },
                  { hasStock: false },
                );
                throw new ResponseResultModel_1.ApiFail(101, `${item.productName}-库存不足`);
              } else {
                await this.productModel.findByIdAndUpdate(item.productId, {
                  $inc: { inventory: -1 },
                });
              }
            }
          }
          if (!createOrderDto.way) {
            for (const item of createOrderDto.cartIds) {
              await this.userCartModel.findByIdAndDelete(item);
            }
          }
          await this.productModel.findByIdAndUpdate(createOrderDto.products[0].productId, {
            $inc: { sales: 1 },
          });
          return await this.orderModel.create(createOrderDto);
        }
        async findAll(userId, queryUserOrderDto) {
          return await this.orderModel.find({
            userId,
            isDelete: false,
            status: ~~queryUserOrderDto.status ? queryUserOrderDto.status : { $ne: null },
          });
        }
        async findOne(id) {
          return await this.orderModel.findById(id).populate('addressId');
        }
        async remove(id) {
          return await this.orderModel.findByIdAndUpdate(id, { isDelete: true });
        }
        async updateOrderAddress(orderId, addressId) {
          return await this.orderModel.findByIdAndUpdate(orderId, { addressId });
        }
        async confirmTake(orderId) {
          const getStatus = await this.orderModel.findById(orderId);
          if (getStatus.status !== 3) {
            throw new ResponseResultModel_1.ApiFail(101, '异常操作，订单未发货!');
          }
          return await this.orderModel.findByIdAndUpdate(orderId, {
            status: orderStatus_enum_1.OrderStatus.PENDING_COMMENT,
          });
        }
      };
      OrderService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(order_model_1.Order)),
          __param(1, (0, nestjs_typegoose_1.InjectModel)(user_cart_model_1.UserCart)),
          __param(2, (0, nestjs_typegoose_1.InjectModel)(product_sku_model_1.ProductSku)),
          __param(3, (0, nestjs_typegoose_1.InjectModel)(product_model_1.Product)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _b
              : Object,
            typeof (_c =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _c
              : Object,
            typeof (_d =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _d
              : Object,
          ]),
        ],
        OrderService,
      );
      exports.OrderService = OrderService;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.OrderController = void 0;
      const common_1 = __webpack_require__(5);
      const order_service_1 = __webpack_require__(96);
      const create_order_dto_1 = __webpack_require__(98);
      const swagger_1 = __webpack_require__(2);
      const parse_id_pipe_1 = __webpack_require__(81);
      const current_user_decorator_1 = __webpack_require__(83);
      const user_model_1 = __webpack_require__(34);
      const passport_1 = __webpack_require__(12);
      const ResponseResultModel_1 = __webpack_require__(8);
      const query_user_oder_dto_1 = __webpack_require__(99);
      const update_order_address_dto_1 = __webpack_require__(100);
      let OrderController = class OrderController {
        constructor(orderService) {
          this.orderService = orderService;
          console.log('OrderController');
        }
        async create(createOrderDto, user) {
          createOrderDto.userId = user === null || user === void 0 ? void 0 : user._id;
          const res = await this.orderService.create(createOrderDto);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findAll(user, queryUserOrderDto) {
          const res = await this.orderService.findAll(
            user === null || user === void 0 ? void 0 : user._id,
            queryUserOrderDto,
          );
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
        async confirmTake(id) {
          const res = await this.orderService.confirmTake(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async updateOrderAddress(updateOrderAddressDto) {
          const res = await this.orderService.updateOrderAddress(
            updateOrderAddressDto.orderId,
            updateOrderAddressDto.addressId,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiOperation)({ summary: '创建订单' }),
          __param(0, (0, common_1.Body)()),
          __param(1, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_order_dto_1.CreateOrderDto !== 'undefined' &&
              create_order_dto_1.CreateOrderDto) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _b
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        OrderController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiOperation)({ summary: '获取用户订单列表' }),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __param(1, (0, common_1.Query)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_c =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _c
              : Object,
            typeof (_d =
              typeof query_user_oder_dto_1.QueryUserOrderDto !== 'undefined' &&
              query_user_oder_dto_1.QueryUserOrderDto) === 'function'
              ? _d
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
          (0, common_1.Get)(':id'),
          (0, swagger_1.ApiOperation)({ summary: '获取订单详细信息' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '订单id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
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
          (0, swagger_1.ApiOperation)({ summary: '取消订单' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '订单id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
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
          (0, common_1.Put)(':id/take'),
          (0, swagger_1.ApiOperation)({ summary: '确认收货' }),
          (0, swagger_1.ApiParam)({ name: 'id', description: '订单id' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        OrderController.prototype,
        'confirmTake',
        null,
      );
      __decorate(
        [
          (0, common_1.Put)('updateAddress'),
          (0, swagger_1.ApiOperation)({ summary: '更新订单收货地址' }),
          __param(0, (0, common_1.Body)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_e =
              typeof update_order_address_dto_1.UpdateOrderAddressDto !== 'undefined' &&
              update_order_address_dto_1.UpdateOrderAddressDto) === 'function'
              ? _e
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        OrderController.prototype,
        'updateOrderAddress',
        null,
      );
      OrderController = __decorate(
        [
          (0, swagger_1.ApiTags)('用户订单'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('order'),
          __metadata('design:paramtypes', [
            typeof (_f =
              typeof order_service_1.OrderService !== 'undefined' &&
              order_service_1.OrderService) === 'function'
              ? _f
              : Object,
          ]),
        ],
        OrderController,
      );
      exports.OrderController = OrderController;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateOrderDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class BuyProduct {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品id' }), __metadata('design:type', String)],
        BuyProduct.prototype,
        'productId',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品标题' }), __metadata('design:type', String)],
        BuyProduct.prototype,
        'productName',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品封面图' }), __metadata('design:type', String)],
        BuyProduct.prototype,
        'productPic',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品选购数量' }), __metadata('design:type', Number)],
        BuyProduct.prototype,
        'num',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品价格' }), __metadata('design:type', Number)],
        BuyProduct.prototype,
        'price',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品规格id' }), __metadata('design:type', String)],
        BuyProduct.prototype,
        'skuId',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品规格名' }), __metadata('design:type', String)],
        BuyProduct.prototype,
        'skuName',
        void 0,
      );
      class CreateOrderDto {}
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '创建方式',
            description: '0: 购物车，1: 立即购买',
            default: 0,
          }),
          __metadata('design:type', Number),
        ],
        CreateOrderDto.prototype,
        'way',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '选购商品集合', type: [BuyProduct] }),
          __metadata(
            'design:type',
            typeof (_a = typeof Array !== 'undefined' && Array) === 'function' ? _a : Object,
          ),
        ],
        CreateOrderDto.prototype,
        'products',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '购物车记录id集合', default: [] }),
          __metadata(
            'design:type',
            typeof (_b = typeof Array !== 'undefined' && Array) === 'function' ? _b : Object,
          ),
        ],
        CreateOrderDto.prototype,
        'cartIds',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '地址id' }), __metadata('design:type', String)],
        CreateOrderDto.prototype,
        'addressId',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '支付方式' }), __metadata('design:type', Number)],
        CreateOrderDto.prototype,
        'paymentType',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '订单来源' }), __metadata('design:type', String)],
        CreateOrderDto.prototype,
        'source',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '订单总额' }), __metadata('design:type', Number)],
        CreateOrderDto.prototype,
        'totalPrice',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '实际付款' }), __metadata('design:type', Number)],
        CreateOrderDto.prototype,
        'payment',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            title: '优惠券id',
            description: '用户优惠券id，有就使用就传，则无',
          }),
          __metadata('design:type', String),
        ],
        CreateOrderDto.prototype,
        'couponId',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '备注' }), __metadata('design:type', String)],
        CreateOrderDto.prototype,
        'remark',
        void 0,
      );
      exports.CreateOrderDto = CreateOrderDto;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.QueryUserOrderDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class QueryUserOrderDto {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '订单状态' }), __metadata('design:type', Number)],
        QueryUserOrderDto.prototype,
        'status',
        void 0,
      );
      exports.QueryUserOrderDto = QueryUserOrderDto;

      /***/
    },
    /* 100 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UpdateOrderAddressDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class UpdateOrderAddressDto {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '收货地址id' }), __metadata('design:type', String)],
        UpdateOrderAddressDto.prototype,
        'addressId',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '订单id' }), __metadata('design:type', String)],
        UpdateOrderAddressDto.prototype,
        'orderId',
        void 0,
      );
      exports.UpdateOrderAddressDto = UpdateOrderAddressDto;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ProductCommentModule = void 0;
      const common_1 = __webpack_require__(5);
      const product_comment_service_1 = __webpack_require__(102);
      const product_comment_controller_1 = __webpack_require__(103);
      const web_service_1 = __webpack_require__(15);
      let ProductCommentModule = class ProductCommentModule {};
      ProductCommentModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [product_comment_controller_1.ProductCommentController],
            providers: [product_comment_service_1.ProductCommentService, web_service_1.WebService],
          }),
        ],
        ProductCommentModule,
      );
      exports.ProductCommentModule = ProductCommentModule;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.ProductCommentService = void 0;
      const common_1 = __webpack_require__(5);
      const typegoose_1 = __webpack_require__(16);
      const orderStatus_enum_1 = __webpack_require__(31);
      const order_model_1 = __webpack_require__(30);
      const product_comment_model_1 = __webpack_require__(67);
      const nestjs_typegoose_1 = __webpack_require__(26);
      let ProductCommentService = class ProductCommentService {
        constructor(productCommentModel, OrderModel) {
          this.productCommentModel = productCommentModel;
          this.OrderModel = OrderModel;
          console.log('ProductCommentService');
        }
        async create(createProductCommentDto) {
          await this.productCommentModel.create(createProductCommentDto);
          await this.OrderModel.findByIdAndUpdate(createProductCommentDto.orderId, {
            status: orderStatus_enum_1.OrderStatus.FINISH,
          });
        }
        async findUserComments(userId) {
          return await this.productCommentModel.find({ userId });
        }
        async findProductComments(productId) {
          return await this.productCommentModel.find({ productId });
        }
      };
      ProductCommentService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(product_comment_model_1.ProductComment)),
          __param(1, (0, nestjs_typegoose_1.InjectModel)(order_model_1.Order)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _b
              : Object,
          ]),
        ],
        ProductCommentService,
      );
      exports.ProductCommentService = ProductCommentService;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.ProductCommentController = void 0;
      const common_1 = __webpack_require__(5);
      const product_comment_service_1 = __webpack_require__(102);
      const create_product_comment_dto_1 = __webpack_require__(104);
      const swagger_1 = __webpack_require__(2);
      const passport_1 = __webpack_require__(12);
      const current_user_decorator_1 = __webpack_require__(83);
      const user_model_1 = __webpack_require__(34);
      const ResponseResultModel_1 = __webpack_require__(8);
      const parse_id_pipe_1 = __webpack_require__(81);
      const platform_express_1 = __webpack_require__(13);
      const web_service_1 = __webpack_require__(15);
      let ProductCommentController = class ProductCommentController {
        constructor(productCommentService, webService) {
          this.productCommentService = productCommentService;
          this.webService = webService;
          console.log('ProductCommentController');
        }
        async create(createProductCommentDto, user, images, req) {
          createProductCommentDto.userId = user === null || user === void 0 ? void 0 : user._id;
          const domain = `${req.protocol}://${req.headers.host}`;
          const imgs = await this.webService.multipleUpload(images, domain);
          createProductCommentDto.images = imgs;
          await this.productCommentService.create(createProductCommentDto);
          return (0, ResponseResultModel_1.apiSucceed)();
        }
        async findUserComments(user) {
          const res = await this.productCommentService.findUserComments(
            user === null || user === void 0 ? void 0 : user._id,
          );
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
        async findProductComments(id) {
          const res = await this.productCommentService.findProductComments(id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Post)(),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, swagger_1.ApiOperation)({ summary: '创建商品评论' }),
          (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images')),
          (0, swagger_1.ApiConsumes)('multipart/form-data'),
          __param(0, (0, common_1.Body)()),
          __param(1, (0, current_user_decorator_1.CurrentUser)()),
          __param(2, (0, common_1.UploadedFiles)()),
          __param(3, (0, common_1.Req)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof create_product_comment_dto_1.CreateProductCommentDto !== 'undefined' &&
              create_product_comment_dto_1.CreateProductCommentDto) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _b
              : Object,
            typeof (_c = typeof Array !== 'undefined' && Array) === 'function' ? _c : Object,
            Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductCommentController.prototype,
        'create',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('user/comments'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, swagger_1.ApiOperation)({ summary: '获取用户商品评论列表' }),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_d =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _d
              : Object,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ProductCommentController.prototype,
        'findUserComments',
        null,
      );
      __decorate(
        [
          (0, common_1.Get)('product/:id'),
          (0, swagger_1.ApiParam)({ name: 'id', description: '商品id' }),
          (0, swagger_1.ApiOperation)({ summary: '获取指定商品评论列表' }),
          __param(0, (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe())),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [String]),
          __metadata('design:returntype', Promise),
        ],
        ProductCommentController.prototype,
        'findProductComments',
        null,
      );
      ProductCommentController = __decorate(
        [
          (0, swagger_1.ApiTags)('商品评价'),
          (0, common_1.Controller)('productComment'),
          __metadata('design:paramtypes', [
            typeof (_e =
              typeof product_comment_service_1.ProductCommentService !== 'undefined' &&
              product_comment_service_1.ProductCommentService) === 'function'
              ? _e
              : Object,
            typeof (_f =
              typeof web_service_1.WebService !== 'undefined' && web_service_1.WebService) ===
            'function'
              ? _f
              : Object,
          ]),
        ],
        ProductCommentController,
      );
      exports.ProductCommentController = ProductCommentController;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
        };
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateProductCommentDto = void 0;
      const swagger_1 = __webpack_require__(2);
      class CreateProductCommentDto {}
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '订单id' }), __metadata('design:type', String)],
        CreateProductCommentDto.prototype,
        'orderId',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '商品id' }), __metadata('design:type', String)],
        CreateProductCommentDto.prototype,
        'productId',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({ title: '评价星级', type: Number }),
          __metadata('design:type', Number),
        ],
        CreateProductCommentDto.prototype,
        'rate',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '评论内容' }), __metadata('design:type', String)],
        CreateProductCommentDto.prototype,
        'content',
        void 0,
      );
      __decorate(
        [
          (0, swagger_1.ApiProperty)({
            type: 'array',
            items: { type: 'string', format: 'binary' },
          }),
          __metadata(
            'design:type',
            typeof (_a = typeof Array !== 'undefined' && Array) === 'function' ? _a : Object,
          ),
        ],
        CreateProductCommentDto.prototype,
        'images',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '物流星级' }), __metadata('design:type', Number)],
        CreateProductCommentDto.prototype,
        'logisticsRate',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '服务星级' }), __metadata('design:type', Number)],
        CreateProductCommentDto.prototype,
        'serviceRate',
        void 0,
      );
      __decorate(
        [(0, swagger_1.ApiProperty)({ title: '是否匿名' }), __metadata('design:type', Boolean)],
        CreateProductCommentDto.prototype,
        'anonymous',
        void 0,
      );
      exports.CreateProductCommentDto = CreateProductCommentDto;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ChatNessageModule = void 0;
      const common_1 = __webpack_require__(5);
      const chat_nessage_service_1 = __webpack_require__(106);
      const chat_nessage_controller_1 = __webpack_require__(107);
      let ChatNessageModule = class ChatNessageModule {};
      ChatNessageModule = __decorate(
        [
          (0, common_1.Module)({
            controllers: [chat_nessage_controller_1.ChatNessageController],
            providers: [chat_nessage_service_1.ChatNessageService],
          }),
        ],
        ChatNessageModule,
      );
      exports.ChatNessageModule = ChatNessageModule;

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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.ChatNessageService = void 0;
      const common_1 = __webpack_require__(5);
      const typegoose_1 = __webpack_require__(16);
      const chat_messages_model_1 = __webpack_require__(62);
      const nestjs_typegoose_1 = __webpack_require__(26);
      let ChatNessageService = class ChatNessageService {
        constructor(chatMessageModel) {
          this.chatMessageModel = chatMessageModel;
        }
        async getChatMessageList(id, userId) {
          return await this.chatMessageModel
            .find({
              $or: [
                {
                  userId: id,
                  targetId: userId,
                },
                {
                  targetId: id,
                  userId: userId,
                },
              ],
            })
            .populate({ path: 'user', select: ['name', 'avatar'] })
            .populate({ path: 'target', select: ['name', 'avatar'] });
        }
      };
      ChatNessageService = __decorate(
        [
          (0, common_1.Injectable)(),
          __param(0, (0, nestjs_typegoose_1.InjectModel)(chat_messages_model_1.ChatMessages)),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof typegoose_1.ReturnModelType !== 'undefined' && typegoose_1.ReturnModelType) ===
            'function'
              ? _a
              : Object,
          ]),
        ],
        ChatNessageService,
      );
      exports.ChatNessageService = ChatNessageService;

      /***/
    },
    /* 107 */
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
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
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
      exports.ChatNessageController = void 0;
      const common_1 = __webpack_require__(5);
      const passport_1 = __webpack_require__(12);
      const swagger_1 = __webpack_require__(2);
      const ResponseResultModel_1 = __webpack_require__(8);
      const user_model_1 = __webpack_require__(34);
      const current_user_decorator_1 = __webpack_require__(83);
      const chat_nessage_service_1 = __webpack_require__(106);
      let ChatNessageController = class ChatNessageController {
        constructor(chatNessageService) {
          this.chatNessageService = chatNessageService;
        }
        async getChatMessageList(user, cuServiceId) {
          const res = await this.chatNessageService.getChatMessageList(cuServiceId, user._id);
          return (0, ResponseResultModel_1.apiSucceed)(res);
        }
      };
      __decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiQuery)({ name: 'cuServiceId', description: '客服id' }),
          __param(0, (0, current_user_decorator_1.CurrentUser)()),
          __param(1, (0, common_1.Query)('cuServiceId')),
          __metadata('design:type', Function),
          __metadata('design:paramtypes', [
            typeof (_a =
              typeof user_model_1.UserDocument !== 'undefined' && user_model_1.UserDocument) ===
            'function'
              ? _a
              : Object,
            String,
          ]),
          __metadata('design:returntype', Promise),
        ],
        ChatNessageController.prototype,
        'getChatMessageList',
        null,
      );
      ChatNessageController = __decorate(
        [
          (0, swagger_1.ApiTags)('客服聊天信息'),
          (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
          (0, swagger_1.ApiBearerAuth)(),
          (0, common_1.Controller)('chatMessage'),
          __metadata('design:paramtypes', [
            typeof (_b =
              typeof chat_nessage_service_1.ChatNessageService !== 'undefined' &&
              chat_nessage_service_1.ChatNessageService) === 'function'
              ? _b
              : Object,
          ]),
        ],
        ChatNessageController,
      );
      exports.ChatNessageController = ChatNessageController;

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
    const port_config_1 = __webpack_require__(3);
    const validate_dto_pipe_1 = __webpack_require__(4);
    const path_1 = __webpack_require__(9);
    const web_module_1 = __webpack_require__(10);
    async function bootstrap() {
      const app = await core_1.NestFactory.create(web_module_1.WebModule);
      app.useGlobalPipes(new validate_dto_pipe_1.ValidationDtoPipe());
      app.enableCors();
      app.useStaticAssets((0, path_1.join)(__dirname, './uploads-images/'), {
        prefix: '/uploads-images/',
      });
      const config = new swagger_1.DocumentBuilder()
        .setTitle('Web-Api文档')
        .setDescription('web站Api文档')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
      const document = swagger_1.SwaggerModule.createDocument(app, config);
      swagger_1.SwaggerModule.setup('api-docs', app, document);
      await app.listen(port_config_1.webPort);
      console.log(`http://localhost:${port_config_1.webPort}/api-docs`);
    }
    bootstrap();
  })();

  /******/
})();
