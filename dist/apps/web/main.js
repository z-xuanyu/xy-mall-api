/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './apps/web/src/auth/auth.controller.ts':
      /*!**********************************************!*\
  !*** ./apps/web/src/auth/auth.controller.ts ***!
  \**********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ '@nestjs/jwt');
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        const auth_service_1 = __webpack_require__(
          /*! ./auth.service */ './apps/web/src/auth/auth.service.ts',
        );
        const web_login_dto_1 = __webpack_require__(
          /*! ./dto/web.login.dto */ './apps/web/src/auth/dto/web.login.dto.ts',
        );
        const web_register_dto_1 = __webpack_require__(
          /*! ./dto/web.register.dto */ './apps/web/src/auth/dto/web.register.dto.ts',
        );
        let AuthController = class AuthController {
          constructor(jwtService, authServe) {
            this.jwtService = jwtService;
            this.authServe = authServe;
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
        };
        __decorate(
          [
            (0, swagger_1.ApiOperation)({ summary: 'web站--会员登录' }),
            (0, common_1.Post)('login'),
            (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-local')),
            __param(0, (0, common_1.Body)()),
            __param(1, (0, common_1.Req)()),
            __metadata('design:type', Function),
            __metadata('design:paramtypes', [
              typeof (_a =
                typeof web_login_dto_1.WebLoginDto !== 'undefined' &&
                web_login_dto_1.WebLoginDto) === 'function'
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
          'webLogin',
          null,
        );
        __decorate(
          [
            (0, common_1.Post)('register'),
            (0, swagger_1.ApiOperation)({ summary: 'web站--会员注册' }),
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
        AuthController = __decorate(
          [
            (0, swagger_1.ApiTags)('登录'),
            (0, common_1.Controller)('auth'),
            __metadata('design:paramtypes', [
              typeof (_d =
                typeof jwt_1.JwtService !== 'undefined' && jwt_1.JwtService) ===
              'function'
                ? _d
                : Object,
              typeof (_e =
                typeof auth_service_1.AuthService !== 'undefined' &&
                auth_service_1.AuthService) === 'function'
                ? _e
                : Object,
            ]),
          ],
          AuthController,
        );
        exports.AuthController = AuthController;

        /***/
      },

    /***/ './apps/web/src/auth/auth.module.ts':
      /*!******************************************!*\
  !*** ./apps/web/src/auth/auth.module.ts ***!
  \******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.AuthModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ '@nestjs/jwt');
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const jwt_config_1 = __webpack_require__(
          /*! libs/common/config/jwt.config */ './libs/common/src/config/jwt.config.ts',
        );
        const auth_controller_1 = __webpack_require__(
          /*! ./auth.controller */ './apps/web/src/auth/auth.controller.ts',
        );
        const web_jwt_strategy_1 = __webpack_require__(
          /*! ./web.jwt.strategy */ './apps/web/src/auth/web.jwt.strategy.ts',
        );
        const web_local_strategy_1 = __webpack_require__(
          /*! ./web.local.strategy */ './apps/web/src/auth/web.local.strategy.ts',
        );
        const auth_service_1 = __webpack_require__(
          /*! ./auth.service */ './apps/web/src/auth/auth.service.ts',
        );
        let AuthModule = class AuthModule {};
        AuthModule = __decorate(
          [
            (0, common_1.Module)({
              imports: [
                passport_1.PassportModule,
                jwt_1.JwtModule.register({
                  secret: jwt_config_1.webJwtConfig.secret,
                  signOptions: {
                    expiresIn: jwt_config_1.webJwtConfig.expiresIn,
                  },
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

    /***/ './apps/web/src/auth/auth.service.ts':
      /*!*******************************************!*\
  !*** ./apps/web/src/auth/auth.service.ts ***!
  \*******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.AuthService = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const user_model_1 = __webpack_require__(
          /*! libs/db/modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        let AuthService = class AuthService {
          constructor(userModel) {
            this.userModel = userModel;
          }
          async register(registerDto) {
            return this.userModel.create(registerDto);
          }
        };
        AuthService = __decorate(
          [
            (0, common_1.Injectable)(),
            __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.User)),
            __metadata('design:paramtypes', [
              typeof (_a =
                typeof typegoose_1.ReturnModelType !== 'undefined' &&
                typegoose_1.ReturnModelType) === 'function'
                ? _a
                : Object,
            ]),
          ],
          AuthService,
        );
        exports.AuthService = AuthService;

        /***/
      },

    /***/ './apps/web/src/auth/current-user.decorator.ts':
      /*!*****************************************************!*\
  !*** ./apps/web/src/auth/current-user.decorator.ts ***!
  \*****************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.CurrentUser = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        exports.CurrentUser = (0, common_1.createParamDecorator)(
          (data, ctx) => {
            const req = ctx.switchToHttp().getRequest();
            return req.user;
          },
        );

        /***/
      },

    /***/ './apps/web/src/auth/dto/web.login.dto.ts':
      /*!************************************************!*\
  !*** ./apps/web/src/auth/dto/web.login.dto.ts ***!
  \************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.WebLoginDto = void 0;
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const class_validator_1 = __webpack_require__(
          /*! class-validator */ 'class-validator',
        );
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

    /***/ './apps/web/src/auth/dto/web.register.dto.ts':
      /*!***************************************************!*\
  !*** ./apps/web/src/auth/dto/web.register.dto.ts ***!
  \***************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.WebRegisterDto = void 0;
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const class_validator_1 = __webpack_require__(
          /*! class-validator */ 'class-validator',
        );
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
          [
            (0, swagger_1.ApiProperty)({ title: '手机号码' }),
            __metadata('design:type', String),
          ],
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
          [
            (0, swagger_1.ApiProperty)({ title: '头像' }),
            __metadata('design:type', String),
          ],
          WebRegisterDto.prototype,
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
          WebRegisterDto.prototype,
          'gender',
          void 0,
        );
        exports.WebRegisterDto = WebRegisterDto;

        /***/
      },

    /***/ './apps/web/src/auth/web.jwt.strategy.ts':
      /*!***********************************************!*\
  !*** ./apps/web/src/auth/web.jwt.strategy.ts ***!
  \***********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.WebJwtStrategy = void 0;
        const passport_jwt_1 = __webpack_require__(
          /*! passport-jwt */ 'passport-jwt',
        );
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const user_model_1 = __webpack_require__(
          /*! libs/db/modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
        const jwt_config_1 = __webpack_require__(
          /*! libs/common/config/jwt.config */ './libs/common/src/config/jwt.config.ts',
        );
        let WebJwtStrategy = class WebJwtStrategy extends (0,
        passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'web-jwt') {
          constructor(userModel) {
            super({
              jwtFromRequest:
                passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
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
                typeof typegoose_1.ReturnModelType !== 'undefined' &&
                typegoose_1.ReturnModelType) === 'function'
                ? _a
                : Object,
            ]),
          ],
          WebJwtStrategy,
        );
        exports.WebJwtStrategy = WebJwtStrategy;

        /***/
      },

    /***/ './apps/web/src/auth/web.local.strategy.ts':
      /*!*************************************************!*\
  !*** ./apps/web/src/auth/web.local.strategy.ts ***!
  \*************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.WebLocalStrategy = void 0;
        const passport_local_1 = __webpack_require__(
          /*! passport-local */ 'passport-local',
        );
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const bcryptjs_1 = __webpack_require__(/*! bcryptjs */ 'bcryptjs');
        const user_model_1 = __webpack_require__(
          /*! libs/db/modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        let WebLocalStrategy = class WebLocalStrategy extends (0,
        passport_1.PassportStrategy)(passport_local_1.Strategy, 'web-local') {
          constructor(userModel) {
            super({
              usernameField: 'email',
              passwordField: 'password',
            });
            this.userModel = userModel;
          }
          async validate(email, password) {
            const user = await this.userModel
              .findOne({ email })
              .select('+password');
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
                typeof typegoose_1.ReturnModelType !== 'undefined' &&
                typegoose_1.ReturnModelType) === 'function'
                ? _a
                : Object,
            ]),
          ],
          WebLocalStrategy,
        );
        exports.WebLocalStrategy = WebLocalStrategy;

        /***/
      },

    /***/ './apps/web/src/chat-nessage/chat-nessage.controller.ts':
      /*!**************************************************************!*\
  !*** ./apps/web/src/chat-nessage/chat-nessage.controller.ts ***!
  \**************************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.ChatNessageController = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! libs/db/modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
        const current_user_decorator_1 = __webpack_require__(
          /*! ../auth/current-user.decorator */ './apps/web/src/auth/current-user.decorator.ts',
        );
        const chat_nessage_service_1 = __webpack_require__(
          /*! ./chat-nessage.service */ './apps/web/src/chat-nessage/chat-nessage.service.ts',
        );
        let ChatNessageController = class ChatNessageController {
          constructor(chatNessageService) {
            this.chatNessageService = chatNessageService;
          }
          async getChatMessageList(user, cuServiceId) {
            const res = await this.chatNessageService.getChatMessageList(
              cuServiceId,
              user._id,
            );
            return (0, ResponseResultModel_1.apiSucceed)(res);
          }
        };
        __decorate(
          [
            (0, common_1.Get)(),
            (0, swagger_1.ApiQuery)({
              name: 'cuServiceId',
              description: '客服id',
            }),
            __param(0, (0, current_user_decorator_1.CurrentUser)()),
            __param(1, (0, common_1.Query)('cuServiceId')),
            __metadata('design:type', Function),
            __metadata('design:paramtypes', [
              typeof (_a =
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
                typeof chat_nessage_service_1.ChatNessageService !==
                  'undefined' && chat_nessage_service_1.ChatNessageService) ===
              'function'
                ? _b
                : Object,
            ]),
          ],
          ChatNessageController,
        );
        exports.ChatNessageController = ChatNessageController;

        /***/
      },

    /***/ './apps/web/src/chat-nessage/chat-nessage.module.ts':
      /*!**********************************************************!*\
  !*** ./apps/web/src/chat-nessage/chat-nessage.module.ts ***!
  \**********************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ChatNessageModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const chat_nessage_service_1 = __webpack_require__(
          /*! ./chat-nessage.service */ './apps/web/src/chat-nessage/chat-nessage.service.ts',
        );
        const chat_nessage_controller_1 = __webpack_require__(
          /*! ./chat-nessage.controller */ './apps/web/src/chat-nessage/chat-nessage.controller.ts',
        );
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

    /***/ './apps/web/src/chat-nessage/chat-nessage.service.ts':
      /*!***********************************************************!*\
  !*** ./apps/web/src/chat-nessage/chat-nessage.service.ts ***!
  \***********************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.ChatNessageService = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const chat_messages_model_1 = __webpack_require__(
          /*! libs/db/modules/chat-messages.model */ './libs/db/src/modules/chat-messages.model.ts',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
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
            __param(
              0,
              (0, nestjs_typegoose_1.InjectModel)(
                chat_messages_model_1.ChatMessages,
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
          ChatNessageService,
        );
        exports.ChatNessageService = ChatNessageService;

        /***/
      },

    /***/ './apps/web/src/order/dto/create-order.dto.ts':
      /*!****************************************************!*\
  !*** ./apps/web/src/order/dto/create-order.dto.ts ***!
  \****************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.CreateOrderDto = void 0;
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        class BuyProduct {}
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '商品id' }),
            __metadata('design:type', String),
          ],
          BuyProduct.prototype,
          'productId',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '商品选购数量' }),
            __metadata('design:type', Number),
          ],
          BuyProduct.prototype,
          'num',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '商品价格' }),
            __metadata('design:type', Number),
          ],
          BuyProduct.prototype,
          'price',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '商品规格名' }),
            __metadata('design:type', String),
          ],
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
            (0, swagger_1.ApiProperty)({
              title: '选购商品集合',
              type: [BuyProduct],
            }),
            __metadata(
              'design:type',
              typeof (_a = typeof Array !== 'undefined' && Array) === 'function'
                ? _a
                : Object,
            ),
          ],
          CreateOrderDto.prototype,
          'products',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({
              title: '购物车记录id集合',
              default: [],
            }),
            __metadata(
              'design:type',
              typeof (_b = typeof Array !== 'undefined' && Array) === 'function'
                ? _b
                : Object,
            ),
          ],
          CreateOrderDto.prototype,
          'cartIds',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '地址id' }),
            __metadata('design:type', String),
          ],
          CreateOrderDto.prototype,
          'addressId',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '支付方式' }),
            __metadata('design:type', Number),
          ],
          CreateOrderDto.prototype,
          'paymentType',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '订单来源' }),
            __metadata('design:type', String),
          ],
          CreateOrderDto.prototype,
          'source',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '订单总额' }),
            __metadata('design:type', Number),
          ],
          CreateOrderDto.prototype,
          'totalPrice',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '实际付款' }),
            __metadata('design:type', Number),
          ],
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
          [
            (0, swagger_1.ApiProperty)({ title: '备注' }),
            __metadata('design:type', String),
          ],
          CreateOrderDto.prototype,
          'remark',
          void 0,
        );
        exports.CreateOrderDto = CreateOrderDto;

        /***/
      },

    /***/ './apps/web/src/order/dto/query-user-oder.dto.ts':
      /*!*******************************************************!*\
  !*** ./apps/web/src/order/dto/query-user-oder.dto.ts ***!
  \*******************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.QueryUserOrderDto = void 0;
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        class QueryUserOrderDto {}
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '订单状态' }),
            __metadata('design:type', Number),
          ],
          QueryUserOrderDto.prototype,
          'status',
          void 0,
        );
        exports.QueryUserOrderDto = QueryUserOrderDto;

        /***/
      },

    /***/ './apps/web/src/order/order.controller.ts':
      /*!************************************************!*\
  !*** ./apps/web/src/order/order.controller.ts ***!
  \************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.OrderController = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const order_service_1 = __webpack_require__(
          /*! ./order.service */ './apps/web/src/order/order.service.ts',
        );
        const create_order_dto_1 = __webpack_require__(
          /*! ./dto/create-order.dto */ './apps/web/src/order/dto/create-order.dto.ts',
        );
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const parse_id_pipe_1 = __webpack_require__(
          /*! libs/common/pipe/parse-id.pipe */ './libs/common/src/pipe/parse-id.pipe.ts',
        );
        const current_user_decorator_1 = __webpack_require__(
          /*! ../auth/current-user.decorator */ './apps/web/src/auth/current-user.decorator.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! libs/db/modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        const query_user_oder_dto_1 = __webpack_require__(
          /*! ./dto/query-user-oder.dto */ './apps/web/src/order/dto/query-user-oder.dto.ts',
        );
        let OrderController = class OrderController {
          constructor(orderService) {
            this.orderService = orderService;
          }
          async create(createOrderDto, user) {
            createOrderDto.userId =
              user === null || user === void 0 ? void 0 : user._id;
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
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
                ? _c
                : Object,
              typeof (_d =
                typeof query_user_oder_dto_1.QueryUserOrderDto !==
                  'undefined' && query_user_oder_dto_1.QueryUserOrderDto) ===
              'function'
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
            (0, swagger_1.ApiOperation)({ summary: '取消订单' }),
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
            (0, common_1.Put)(':id/take'),
            (0, swagger_1.ApiOperation)({ summary: '确认收货' }),
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
          'confirmTake',
          null,
        );
        OrderController = __decorate(
          [
            (0, swagger_1.ApiTags)('用户订单'),
            (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
            (0, swagger_1.ApiBearerAuth)(),
            (0, common_1.Controller)('order'),
            __metadata('design:paramtypes', [
              typeof (_e =
                typeof order_service_1.OrderService !== 'undefined' &&
                order_service_1.OrderService) === 'function'
                ? _e
                : Object,
            ]),
          ],
          OrderController,
        );
        exports.OrderController = OrderController;

        /***/
      },

    /***/ './apps/web/src/order/order.module.ts':
      /*!********************************************!*\
  !*** ./apps/web/src/order/order.module.ts ***!
  \********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.OrderModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const order_service_1 = __webpack_require__(
          /*! ./order.service */ './apps/web/src/order/order.service.ts',
        );
        const order_controller_1 = __webpack_require__(
          /*! ./order.controller */ './apps/web/src/order/order.controller.ts',
        );
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

    /***/ './apps/web/src/order/order.service.ts':
      /*!*********************************************!*\
  !*** ./apps/web/src/order/order.service.ts ***!
  \*********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.OrderService = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const orderStatus_enum_1 = __webpack_require__(
          /*! libs/common/enum/orderStatus.enum */ './libs/common/src/enum/orderStatus.enum.ts',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        const order_model_1 = __webpack_require__(
          /*! libs/db/modules/order.model */ './libs/db/src/modules/order.model.ts',
        );
        const user_cart_model_1 = __webpack_require__(
          /*! libs/db/modules/user-cart.model */ './libs/db/src/modules/user-cart.model.ts',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        let OrderService = class OrderService {
          constructor(orderModel, userCartModel) {
            this.orderModel = orderModel;
            this.userCartModel = userCartModel;
          }
          async create(createOrderDto) {
            if (!createOrderDto.way) {
              const cartList = [];
              for (const item of createOrderDto.cartIds) {
                const cartInfo = await this.userCartModel.findById(item);
                if (!cartInfo)
                  return new ResponseResultModel_1.ApiFail(101, '订单已提交!');
                cartList.push(cartInfo);
              }
              const products = cartList.map((item) => {
                return {
                  productId: item.productId,
                  num: item.num,
                  price: item.price,
                  skuName: item.skuName,
                };
              });
              createOrderDto.products = products;
              for (const item of createOrderDto.cartIds) {
                await this.userCartModel.findByIdAndDelete(item);
              }
            }
            return await this.orderModel.create(createOrderDto);
          }
          async findAll(userId, queryUserOrderDto) {
            return await this.orderModel
              .find({
                userId,
                isDelete: false,
                status: ~~queryUserOrderDto.status
                  ? queryUserOrderDto.status
                  : { $ne: null },
              })
              .populate({
                path: 'products.productId',
                select: ['title', 'pic'],
              });
          }
          async findOne(id) {
            return await this.orderModel
              .findById(id)
              .populate('addressId')
              .populate({
                path: 'products.productId',
                select: ['title', 'pic'],
              });
          }
          async remove(id) {
            return await this.orderModel.findByIdAndUpdate(id, {
              isDelete: true,
            });
          }
          async confirmTake(orderId) {
            const getStatus = await this.orderModel.findById(orderId);
            if (getStatus.status !== 3) {
              throw new ResponseResultModel_1.ApiFail(
                101,
                '异常操作，订单未发货!',
              );
            }
            return await this.orderModel.findByIdAndUpdate(orderId, {
              status: orderStatus_enum_1.OrderStatus.PENDING_COMMENT,
            });
          }
        };
        OrderService = __decorate(
          [
            (0, common_1.Injectable)(),
            __param(
              0,
              (0, nestjs_typegoose_1.InjectModel)(order_model_1.Order),
            ),
            __param(
              1,
              (0, nestjs_typegoose_1.InjectModel)(user_cart_model_1.UserCart),
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
            ]),
          ],
          OrderService,
        );
        exports.OrderService = OrderService;

        /***/
      },

    /***/ './apps/web/src/product-comment/dto/create-product-comment.dto.ts':
      /*!************************************************************************!*\
  !*** ./apps/web/src/product-comment/dto/create-product-comment.dto.ts ***!
  \************************************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.CreateProductCommentDto = void 0;
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        class CreateProductCommentDto {}
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '订单id' }),
            __metadata('design:type', String),
          ],
          CreateProductCommentDto.prototype,
          'orderId',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '商品id' }),
            __metadata('design:type', String),
          ],
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
          [
            (0, swagger_1.ApiProperty)({ title: '评论内容' }),
            __metadata('design:type', String),
          ],
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
              typeof (_a = typeof Array !== 'undefined' && Array) === 'function'
                ? _a
                : Object,
            ),
          ],
          CreateProductCommentDto.prototype,
          'images',
          void 0,
        );
        exports.CreateProductCommentDto = CreateProductCommentDto;

        /***/
      },

    /***/ './apps/web/src/product-comment/product-comment.controller.ts':
      /*!********************************************************************!*\
  !*** ./apps/web/src/product-comment/product-comment.controller.ts ***!
  \********************************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.ProductCommentController = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const product_comment_service_1 = __webpack_require__(
          /*! ./product-comment.service */ './apps/web/src/product-comment/product-comment.service.ts',
        );
        const create_product_comment_dto_1 = __webpack_require__(
          /*! ./dto/create-product-comment.dto */ './apps/web/src/product-comment/dto/create-product-comment.dto.ts',
        );
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const current_user_decorator_1 = __webpack_require__(
          /*! ../auth/current-user.decorator */ './apps/web/src/auth/current-user.decorator.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! libs/db/modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        const parse_id_pipe_1 = __webpack_require__(
          /*! libs/common/pipe/parse-id.pipe */ './libs/common/src/pipe/parse-id.pipe.ts',
        );
        const platform_express_1 = __webpack_require__(
          /*! @nestjs/platform-express */ '@nestjs/platform-express',
        );
        const web_service_1 = __webpack_require__(
          /*! ../web.service */ './apps/web/src/web.service.ts',
        );
        let ProductCommentController = class ProductCommentController {
          constructor(productCommentService, webService) {
            this.productCommentService = productCommentService;
            this.webService = webService;
          }
          async create(createProductCommentDto, user, images, req) {
            createProductCommentDto.userId =
              user === null || user === void 0 ? void 0 : user._id;
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
            const res = await this.productCommentService.findProductComments(
              id,
            );
            return (0, ResponseResultModel_1.apiSucceed)(res);
          }
        };
        __decorate(
          [
            (0, common_1.Post)(),
            (0, common_1.UseGuards)((0, passport_1.AuthGuard)('web-jwt')),
            (0, swagger_1.ApiBearerAuth)(),
            (0, swagger_1.ApiOperation)({ summary: '创建商品评论' }),
            (0, common_1.UseInterceptors)(
              (0, platform_express_1.FilesInterceptor)('images'),
            ),
            (0, swagger_1.ApiConsumes)('multipart/form-data'),
            __param(0, (0, common_1.Body)()),
            __param(1, (0, current_user_decorator_1.CurrentUser)()),
            __param(2, (0, common_1.UploadedFiles)()),
            __param(3, (0, common_1.Req)()),
            __metadata('design:type', Function),
            __metadata('design:paramtypes', [
              typeof (_a =
                typeof create_product_comment_dto_1.CreateProductCommentDto !==
                  'undefined' &&
                create_product_comment_dto_1.CreateProductCommentDto) ===
              'function'
                ? _a
                : Object,
              typeof (_b =
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
                ? _b
                : Object,
              typeof (_c = typeof Array !== 'undefined' && Array) === 'function'
                ? _c
                : Object,
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
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
            __param(
              0,
              (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
            ),
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
            (0, common_1.Controller)('product-comment'),
            __metadata('design:paramtypes', [
              typeof (_e =
                typeof product_comment_service_1.ProductCommentService !==
                  'undefined' &&
                product_comment_service_1.ProductCommentService) === 'function'
                ? _e
                : Object,
              typeof (_f =
                typeof web_service_1.WebService !== 'undefined' &&
                web_service_1.WebService) === 'function'
                ? _f
                : Object,
            ]),
          ],
          ProductCommentController,
        );
        exports.ProductCommentController = ProductCommentController;

        /***/
      },

    /***/ './apps/web/src/product-comment/product-comment.module.ts':
      /*!****************************************************************!*\
  !*** ./apps/web/src/product-comment/product-comment.module.ts ***!
  \****************************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ProductCommentModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const product_comment_service_1 = __webpack_require__(
          /*! ./product-comment.service */ './apps/web/src/product-comment/product-comment.service.ts',
        );
        const product_comment_controller_1 = __webpack_require__(
          /*! ./product-comment.controller */ './apps/web/src/product-comment/product-comment.controller.ts',
        );
        const web_service_1 = __webpack_require__(
          /*! ../web.service */ './apps/web/src/web.service.ts',
        );
        let ProductCommentModule = class ProductCommentModule {};
        ProductCommentModule = __decorate(
          [
            (0, common_1.Module)({
              controllers: [
                product_comment_controller_1.ProductCommentController,
              ],
              providers: [
                product_comment_service_1.ProductCommentService,
                web_service_1.WebService,
              ],
            }),
          ],
          ProductCommentModule,
        );
        exports.ProductCommentModule = ProductCommentModule;

        /***/
      },

    /***/ './apps/web/src/product-comment/product-comment.service.ts':
      /*!*****************************************************************!*\
  !*** ./apps/web/src/product-comment/product-comment.service.ts ***!
  \*****************************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.ProductCommentService = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const orderStatus_enum_1 = __webpack_require__(
          /*! libs/common/enum/orderStatus.enum */ './libs/common/src/enum/orderStatus.enum.ts',
        );
        const order_model_1 = __webpack_require__(
          /*! libs/db/modules/order.model */ './libs/db/src/modules/order.model.ts',
        );
        const product_comment_model_1 = __webpack_require__(
          /*! libs/db/modules/product-comment-model */ './libs/db/src/modules/product-comment-model.ts',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        let ProductCommentService = class ProductCommentService {
          constructor(productCommentModel, OrderModel) {
            this.productCommentModel = productCommentModel;
            this.OrderModel = OrderModel;
          }
          async create(createProductCommentDto) {
            await this.productCommentModel.create(createProductCommentDto);
            await this.OrderModel.findByIdAndUpdate(
              createProductCommentDto.orderId,
              {
                status: orderStatus_enum_1.OrderStatus.FINISH,
              },
            );
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
            __param(
              0,
              (0, nestjs_typegoose_1.InjectModel)(
                product_comment_model_1.ProductComment,
              ),
            ),
            __param(
              1,
              (0, nestjs_typegoose_1.InjectModel)(order_model_1.Order),
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
            ]),
          ],
          ProductCommentService,
        );
        exports.ProductCommentService = ProductCommentService;

        /***/
      },

    /***/ './apps/web/src/product/product.controller.ts':
      /*!****************************************************!*\
  !*** ./apps/web/src/product/product.controller.ts ***!
  \****************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.ProductController = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ '@nestjs/jwt');
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const parse_id_pipe_1 = __webpack_require__(
          /*! libs/common/pipe/parse-id.pipe */ './libs/common/src/pipe/parse-id.pipe.ts',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! libs/db/modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
        const current_user_decorator_1 = __webpack_require__(
          /*! ../auth/current-user.decorator */ './apps/web/src/auth/current-user.decorator.ts',
        );
        const product_service_1 = __webpack_require__(
          /*! ./product.service */ './apps/web/src/product/product.service.ts',
        );
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
                decodedJwtAccessToken === null ||
                decodedJwtAccessToken === void 0
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
            __param(
              0,
              (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
            ),
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
            __param(
              0,
              (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
            ),
            __param(1, (0, current_user_decorator_1.CurrentUser)()),
            __metadata('design:type', Function),
            __metadata('design:paramtypes', [
              String,
              typeof (_a =
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
            __param(
              0,
              (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
            ),
            __param(1, (0, current_user_decorator_1.CurrentUser)()),
            __metadata('design:type', Function),
            __metadata('design:paramtypes', [
              String,
              typeof (_b =
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
              typeof (_d =
                typeof jwt_1.JwtService !== 'undefined' && jwt_1.JwtService) ===
              'function'
                ? _d
                : Object,
            ]),
          ],
          ProductController,
        );
        exports.ProductController = ProductController;

        /***/
      },

    /***/ './apps/web/src/product/product.module.ts':
      /*!************************************************!*\
  !*** ./apps/web/src/product/product.module.ts ***!
  \************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ProductModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const product_service_1 = __webpack_require__(
          /*! ./product.service */ './apps/web/src/product/product.service.ts',
        );
        const product_controller_1 = __webpack_require__(
          /*! ./product.controller */ './apps/web/src/product/product.controller.ts',
        );
        const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ '@nestjs/jwt');
        const jwt_config_1 = __webpack_require__(
          /*! libs/common/config/jwt.config */ './libs/common/src/config/jwt.config.ts',
        );
        let ProductModule = class ProductModule {};
        ProductModule = __decorate(
          [
            (0, common_1.Module)({
              imports: [
                jwt_1.JwtModule.register({
                  secret: jwt_config_1.webJwtConfig.secret,
                  signOptions: {
                    expiresIn: jwt_config_1.webJwtConfig.expiresIn,
                  },
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

    /***/ './apps/web/src/product/product.service.ts':
      /*!*************************************************!*\
  !*** ./apps/web/src/product/product.service.ts ***!
  \*************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.ProductService = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const product_model_1 = __webpack_require__(
          /*! libs/db/modules/product.model */ './libs/db/src/modules/product.model.ts',
        );
        const user_collection_model_1 = __webpack_require__(
          /*! libs/db/modules/user-collection.model */ './libs/db/src/modules/user-collection.model.ts',
        );
        const user_views_history_model_1 = __webpack_require__(
          /*! libs/db/modules/user-views-history.model */ './libs/db/src/modules/user-views-history.model.ts',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        let ProductService = class ProductService {
          constructor(productModel, userCollectionModel, userViewsHistory) {
            this.productModel = productModel;
            this.userCollectionModel = userCollectionModel;
            this.userViewsHistory = userViewsHistory;
          }
          async findAll() {
            return await this.productModel.find();
          }
          async findOne(id, userId) {
            await this.productModel.findByIdAndUpdate(id, {
              $inc: { views: 1 },
            });
            let isCollection = false;
            if (userId) {
              const isHasProduct = await this.userViewsHistory.findOne({
                productId: id,
                userId,
              });
              if (!isHasProduct)
                await this.userViewsHistory.create({ userId, productId: id });
              const isCollectionProduct =
                await this.userCollectionModel.findOne({
                  userId,
                  productId: id,
                });
              if (isCollectionProduct) {
                isCollection = true;
              }
            }
            const res = await this.productModel.findById(id);
            return Object.assign({ isCollection }, res._doc);
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
            return await this.userCollectionModel.create(
              userCollectionProductDto,
            );
          }
          async removeCollection(userCollectionProductDto) {
            return await this.userCollectionModel.findOneAndDelete(
              userCollectionProductDto,
            );
          }
          async getHotProduct() {
            return await this.productModel.find({ isHot: true });
          }
        };
        ProductService = __decorate(
          [
            (0, common_1.Injectable)(),
            __param(
              0,
              (0, nestjs_typegoose_1.InjectModel)(product_model_1.Product),
            ),
            __param(
              1,
              (0, nestjs_typegoose_1.InjectModel)(
                user_collection_model_1.UserCollection,
              ),
            ),
            __param(
              2,
              (0, nestjs_typegoose_1.InjectModel)(
                user_views_history_model_1.UserViewsHistory,
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
          ProductService,
        );
        exports.ProductService = ProductService;

        /***/
      },

    /***/ './apps/web/src/test.dto.ts':
      /*!**********************************!*\
  !*** ./apps/web/src/test.dto.ts ***!
  \**********************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.TestDto = void 0;
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        class TestDto {}
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '文件路径' }),
            __metadata('design:type', String),
          ],
          TestDto.prototype,
          'filePath',
          void 0,
        );
        exports.TestDto = TestDto;

        /***/
      },

    /***/ './apps/web/src/user-cart/dto/create-user-cart.dto.ts':
      /*!************************************************************!*\
  !*** ./apps/web/src/user-cart/dto/create-user-cart.dto.ts ***!
  \************************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.CreateUserCartDto = void 0;
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        class CreateUserCartDto {}
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '用户id' }),
            __metadata('design:type', String),
          ],
          CreateUserCartDto.prototype,
          'userId',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '商品id' }),
            __metadata('design:type', String),
          ],
          CreateUserCartDto.prototype,
          'productId',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '商品标题' }),
            __metadata('design:type', String),
          ],
          CreateUserCartDto.prototype,
          'productName',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '商品封面图' }),
            __metadata('design:type', String),
          ],
          CreateUserCartDto.prototype,
          'productPic',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '选购数量' }),
            __metadata('design:type', Number),
          ],
          CreateUserCartDto.prototype,
          'num',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '选购规格名称' }),
            __metadata('design:type', String),
          ],
          CreateUserCartDto.prototype,
          'skuName',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '选购金额' }),
            __metadata('design:type', Number),
          ],
          CreateUserCartDto.prototype,
          'price',
          void 0,
        );
        exports.CreateUserCartDto = CreateUserCartDto;

        /***/
      },

    /***/ './apps/web/src/user-cart/user-cart.controller.ts':
      /*!********************************************************!*\
  !*** ./apps/web/src/user-cart/user-cart.controller.ts ***!
  \********************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.UserCartController = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const user_cart_service_1 = __webpack_require__(
          /*! ./user-cart.service */ './apps/web/src/user-cart/user-cart.service.ts',
        );
        const create_user_cart_dto_1 = __webpack_require__(
          /*! ./dto/create-user-cart.dto */ './apps/web/src/user-cart/dto/create-user-cart.dto.ts',
        );
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const user_model_1 = __webpack_require__(
          /*! libs/db/modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
        const current_user_decorator_1 = __webpack_require__(
          /*! ../auth/current-user.decorator */ './apps/web/src/auth/current-user.decorator.ts',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const parse_id_pipe_1 = __webpack_require__(
          /*! libs/common/pipe/parse-id.pipe */ './libs/common/src/pipe/parse-id.pipe.ts',
        );
        let UserCartController = class UserCartController {
          constructor(userCartService) {
            this.userCartService = userCartService;
          }
          async create(createUserCartDto, user) {
            createUserCartDto.userId =
              user === null || user === void 0 ? void 0 : user._id;
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
                typeof create_user_cart_dto_1.CreateUserCartDto !==
                  'undefined' && create_user_cart_dto_1.CreateUserCartDto) ===
              'function'
                ? _a
                : Object,
              typeof (_b =
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
            __param(
              0,
              (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
            ),
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
            __param(
              0,
              (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
            ),
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

    /***/ './apps/web/src/user-cart/user-cart.module.ts':
      /*!****************************************************!*\
  !*** ./apps/web/src/user-cart/user-cart.module.ts ***!
  \****************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.UserCartModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const user_cart_service_1 = __webpack_require__(
          /*! ./user-cart.service */ './apps/web/src/user-cart/user-cart.service.ts',
        );
        const user_cart_controller_1 = __webpack_require__(
          /*! ./user-cart.controller */ './apps/web/src/user-cart/user-cart.controller.ts',
        );
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

    /***/ './apps/web/src/user-cart/user-cart.service.ts':
      /*!*****************************************************!*\
  !*** ./apps/web/src/user-cart/user-cart.service.ts ***!
  \*****************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.UserCartService = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const user_cart_model_1 = __webpack_require__(
          /*! libs/db/modules/user-cart.model */ './libs/db/src/modules/user-cart.model.ts',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        let UserCartService = class UserCartService {
          constructor(userCartModel) {
            this.userCartModel = userCartModel;
          }
          async create(createUserCartDto) {
            const has = await this.userCartModel.findOne({
              userId: createUserCartDto.userId,
              productId: createUserCartDto.productId,
            });
            if (has) {
              return this.userCartModel.findOneAndUpdate(
                {
                  userId: createUserCartDto.userId,
                  productId: createUserCartDto.productId,
                },
                { $inc: { num: 1 } },
              );
            }
            return await this.userCartModel.create(createUserCartDto);
          }
          async findAll(userId) {
            return await this.userCartModel
              .find({ userId })
              .populate({ path: 'userId', select: ['name'] })
              .populate({ path: 'productId', select: ['title', 'pic'] });
          }
          async findOne(id) {
            return await this.userCartModel
              .findById(id)
              .populate({ path: 'userId', select: ['name'] })
              .populate({ path: 'productId', select: ['title', 'pic'] });
          }
          async remove(id) {
            await this.userCartModel.findByIdAndDelete(id);
          }
        };
        UserCartService = __decorate(
          [
            (0, common_1.Injectable)(),
            __param(
              0,
              (0, nestjs_typegoose_1.InjectModel)(user_cart_model_1.UserCart),
            ),
            __metadata('design:paramtypes', [
              typeof (_a =
                typeof typegoose_1.ReturnModelType !== 'undefined' &&
                typegoose_1.ReturnModelType) === 'function'
                ? _a
                : Object,
            ]),
          ],
          UserCartService,
        );
        exports.UserCartService = UserCartService;

        /***/
      },

    /***/ './apps/web/src/user/dto/create-user-address.dto.ts':
      /*!**********************************************************!*\
  !*** ./apps/web/src/user/dto/create-user-address.dto.ts ***!
  \**********************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const class_validator_1 = __webpack_require__(
          /*! class-validator */ 'class-validator',
        );
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

    /***/ './apps/web/src/user/dto/update-address-default.dto.ts':
      /*!*************************************************************!*\
  !*** ./apps/web/src/user/dto/update-address-default.dto.ts ***!
  \*************************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.UpdateAddressDefaultDto = void 0;
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        class UpdateAddressDefaultDto {}
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '地址id' }),
            __metadata('design:type', String),
          ],
          UpdateAddressDefaultDto.prototype,
          'id',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '用户id' }),
            __metadata('design:type', String),
          ],
          UpdateAddressDefaultDto.prototype,
          'userId',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({ title: '是否默认' }),
            __metadata('design:type', Boolean),
          ],
          UpdateAddressDefaultDto.prototype,
          'isDefault',
          void 0,
        );
        exports.UpdateAddressDefaultDto = UpdateAddressDefaultDto;

        /***/
      },

    /***/ './apps/web/src/user/dto/update-user-address.dto.ts':
      /*!**********************************************************!*\
  !*** ./apps/web/src/user/dto/update-user-address.dto.ts ***!
  \**********************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.UpdateUserAddressDto = void 0;
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const create_user_address_dto_1 = __webpack_require__(
          /*! ./create-user-address.dto */ './apps/web/src/user/dto/create-user-address.dto.ts',
        );
        class UpdateUserAddressDto extends (0, swagger_1.PartialType)(
          create_user_address_dto_1.CreateUserAddressDto,
        ) {}
        exports.UpdateUserAddressDto = UpdateUserAddressDto;

        /***/
      },

    /***/ './apps/web/src/user/user.controller.ts':
      /*!**********************************************!*\
  !*** ./apps/web/src/user/user.controller.ts ***!
  \**********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.UserController = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const parse_id_pipe_1 = __webpack_require__(
          /*! libs/common/pipe/parse-id.pipe */ './libs/common/src/pipe/parse-id.pipe.ts',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! libs/db/modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
        const current_user_decorator_1 = __webpack_require__(
          /*! ../auth/current-user.decorator */ './apps/web/src/auth/current-user.decorator.ts',
        );
        const create_user_address_dto_1 = __webpack_require__(
          /*! ./dto/create-user-address.dto */ './apps/web/src/user/dto/create-user-address.dto.ts',
        );
        const update_address_default_dto_1 = __webpack_require__(
          /*! ./dto/update-address-default.dto */ './apps/web/src/user/dto/update-address-default.dto.ts',
        );
        const update_user_address_dto_1 = __webpack_require__(
          /*! ./dto/update-user-address.dto */ './apps/web/src/user/dto/update-user-address.dto.ts',
        );
        const user_service_1 = __webpack_require__(
          /*! ./user.service */ './apps/web/src/user/user.service.ts',
        );
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
            const params = Object.assign(
              Object.assign({}, createUserAddressDto),
              { userId: user === null || user === void 0 ? void 0 : user._id },
            );
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
            const res = await this.userService.updateUserAddress(
              id,
              updateUserAddressDto,
            );
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
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
            (0, swagger_1.ApiOperation)({
              summary: '获取用户浏览商品记录列表',
            }),
            __param(0, (0, current_user_decorator_1.CurrentUser)()),
            __metadata('design:type', Function),
            __metadata('design:paramtypes', [
              typeof (_b =
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
                typeof create_user_address_dto_1.CreateUserAddressDto !==
                  'undefined' &&
                create_user_address_dto_1.CreateUserAddressDto) === 'function'
                ? _c
                : Object,
              typeof (_d =
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
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
            __param(
              0,
              (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
            ),
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
            __param(
              0,
              (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
            ),
            __param(1, (0, common_1.Body)()),
            __metadata('design:type', Function),
            __metadata('design:paramtypes', [
              String,
              typeof (_f =
                typeof update_user_address_dto_1.UpdateUserAddressDto !==
                  'undefined' &&
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
            __param(
              0,
              (0, common_1.Param)('id', new parse_id_pipe_1.ParseIdPipe()),
            ),
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
                typeof user_model_1.UserDocument !== 'undefined' &&
                user_model_1.UserDocument) === 'function'
                ? _g
                : Object,
              typeof (_h =
                typeof update_address_default_dto_1.UpdateAddressDefaultDto !==
                  'undefined' &&
                update_address_default_dto_1.UpdateAddressDefaultDto) ===
              'function'
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
                typeof user_service_1.UserService !== 'undefined' &&
                user_service_1.UserService) === 'function'
                ? _j
                : Object,
            ]),
          ],
          UserController,
        );
        exports.UserController = UserController;

        /***/
      },

    /***/ './apps/web/src/user/user.module.ts':
      /*!******************************************!*\
  !*** ./apps/web/src/user/user.module.ts ***!
  \******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.UserModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const user_service_1 = __webpack_require__(
          /*! ./user.service */ './apps/web/src/user/user.service.ts',
        );
        const user_controller_1 = __webpack_require__(
          /*! ./user.controller */ './apps/web/src/user/user.controller.ts',
        );
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

    /***/ './apps/web/src/user/user.service.ts':
      /*!*******************************************!*\
  !*** ./apps/web/src/user/user.service.ts ***!
  \*******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const user_address_model_1 = __webpack_require__(
          /*! libs/db/modules/user-address.model */ './libs/db/src/modules/user-address.model.ts',
        );
        const user_collection_model_1 = __webpack_require__(
          /*! libs/db/modules/user-collection.model */ './libs/db/src/modules/user-collection.model.ts',
        );
        const user_views_history_model_1 = __webpack_require__(
          /*! libs/db/modules/user-views-history.model */ './libs/db/src/modules/user-views-history.model.ts',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        let UserService = class UserService {
          constructor(
            userCollectionModel,
            userViewsHistoryModel,
            userAddressModel,
          ) {
            this.userCollectionModel = userCollectionModel;
            this.userViewsHistoryModel = userViewsHistoryModel;
            this.userAddressModel = userAddressModel;
          }
          async findUserCollectionList(userId) {
            return await this.userCollectionModel.find({ userId }).populate({
              path: 'productId',
              select: ['_id', 'pic', 'title', 'sku', 'price', 'skuType'],
            });
          }
          async findUserViewsHistoryAll(userId) {
            return await this.userViewsHistoryModel.find({ userId }).populate({
              path: 'productId',
              select: ['_id', 'pic', 'title', 'price', 'skuType', 'sku'],
            });
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
            return await this.userAddressModel.findByIdAndUpdate(
              id,
              updateUserAddressDto,
            );
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
            await this.userAddressModel.findByIdAndUpdate(
              updateAddressDefaultDto.id,
              {
                isDefault: updateAddressDefaultDto.isDefault,
              },
            );
          }
        };
        UserService = __decorate(
          [
            (0, common_1.Injectable)(),
            __param(
              0,
              (0, nestjs_typegoose_1.InjectModel)(
                user_collection_model_1.UserCollection,
              ),
            ),
            __param(
              1,
              (0, nestjs_typegoose_1.InjectModel)(
                user_views_history_model_1.UserViewsHistory,
              ),
            ),
            __param(
              2,
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

    /***/ './apps/web/src/web.controller.ts':
      /*!****************************************!*\
  !*** ./apps/web/src/web.controller.ts ***!
  \****************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.WebController = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const passport_1 = __webpack_require__(
          /*! @nestjs/passport */ '@nestjs/passport',
        );
        const platform_express_1 = __webpack_require__(
          /*! @nestjs/platform-express */ '@nestjs/platform-express',
        );
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! libs/common/ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        const test_dto_1 = __webpack_require__(
          /*! ./test.dto */ './apps/web/src/test.dto.ts',
        );
        const web_service_1 = __webpack_require__(
          /*! ./web.service */ './apps/web/src/web.service.ts',
        );
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
          [
            (0, swagger_1.ApiProperty)({ title: '订单id' }),
            __metadata('design:type', String),
          ],
          WeixinPayDto.prototype,
          'orderId',
          void 0,
        );
        let WebController = class WebController {
          constructor(webService) {
            this.webService = webService;
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
            (0, common_1.UseInterceptors)(
              (0, platform_express_1.FilesInterceptor)('files'),
            ),
            (0, swagger_1.ApiConsumes)('multipart/form-data'),
            __param(0, (0, common_1.UploadedFiles)()),
            __param(1, (0, common_1.Req)()),
            __metadata('design:type', Function),
            __metadata('design:paramtypes', [
              typeof (_a = typeof Array !== 'undefined' && Array) === 'function'
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
          WebController.prototype,
          'multipleUpload',
          null,
        );
        __decorate(
          [
            (0, common_1.Post)('upload'),
            (0, swagger_1.ApiOperation)({ summary: '文件上传' }),
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
              typeof (_c = typeof Promise !== 'undefined' && Promise) ===
                'function'
                ? _c
                : Object,
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
              typeof (_d =
                typeof test_dto_1.TestDto !== 'undefined' &&
                test_dto_1.TestDto) === 'function'
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
        WebController = __decorate(
          [
            (0, swagger_1.ApiTags)('首页'),
            (0, common_1.Controller)(),
            __metadata('design:paramtypes', [
              typeof (_e =
                typeof web_service_1.WebService !== 'undefined' &&
                web_service_1.WebService) === 'function'
                ? _e
                : Object,
            ]),
          ],
          WebController,
        );
        exports.WebController = WebController;

        /***/
      },

    /***/ './apps/web/src/web.module.ts':
      /*!************************************!*\
  !*** ./apps/web/src/web.module.ts ***!
  \************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.WebModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const web_controller_1 = __webpack_require__(
          /*! ./web.controller */ './apps/web/src/web.controller.ts',
        );
        const web_service_1 = __webpack_require__(
          /*! ./web.service */ './apps/web/src/web.service.ts',
        );
        const auth_module_1 = __webpack_require__(
          /*! ./auth/auth.module */ './apps/web/src/auth/auth.module.ts',
        );
        const common_2 = __webpack_require__(
          /*! libs/common */ './libs/common/src/index.ts',
        );
        const product_module_1 = __webpack_require__(
          /*! ./product/product.module */ './apps/web/src/product/product.module.ts',
        );
        const user_module_1 = __webpack_require__(
          /*! ./user/user.module */ './apps/web/src/user/user.module.ts',
        );
        const user_cart_module_1 = __webpack_require__(
          /*! ./user-cart/user-cart.module */ './apps/web/src/user-cart/user-cart.module.ts',
        );
        const order_module_1 = __webpack_require__(
          /*! ./order/order.module */ './apps/web/src/order/order.module.ts',
        );
        const product_comment_module_1 = __webpack_require__(
          /*! ./product-comment/product-comment.module */ './apps/web/src/product-comment/product-comment.module.ts',
        );
        const chat_nessage_module_1 = __webpack_require__(
          /*! ./chat-nessage/chat-nessage.module */ './apps/web/src/chat-nessage/chat-nessage.module.ts',
        );
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

    /***/ './apps/web/src/web.service.ts':
      /*!*************************************!*\
  !*** ./apps/web/src/web.service.ts ***!
  \*************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        exports.WebService = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const banner_model_1 = __webpack_require__(
          /*! libs/db/modules/banner.model */ './libs/db/src/modules/banner.model.ts',
        );
        const classify_navigation_model_1 = __webpack_require__(
          /*! libs/db/modules/classify-navigation.model */ './libs/db/src/modules/classify-navigation.model.ts',
        );
        const product_model_1 = __webpack_require__(
          /*! libs/db/modules/product.model */ './libs/db/src/modules/product.model.ts',
        );
        const site_setting_model_1 = __webpack_require__(
          /*! libs/db/modules/site-setting.model */ './libs/db/src/modules/site-setting.model.ts',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        const OSS = __webpack_require__(/*! ali-oss */ 'ali-oss');
        const fs = __webpack_require__(/*! fs */ 'fs');
        const path_1 = __webpack_require__(/*! path */ 'path');
        const has_1 = __webpack_require__(
          /*! libs/common/utils/has */ './libs/common/src/utils/has.ts',
        );
        const order_model_1 = __webpack_require__(
          /*! libs/db/modules/order.model */ './libs/db/src/modules/order.model.ts',
        );
        const orderStatus_enum_1 = __webpack_require__(
          /*! libs/common/enum/orderStatus.enum */ './libs/common/src/enum/orderStatus.enum.ts',
        );
        let WebService = class WebService {
          constructor(
            bannerModel,
            classifyNavigationModel,
            productModel,
            settingModel,
            orderModel,
          ) {
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
            const limitProducts = await this.productModel.find({
              isTimeLimit: true,
            });
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
                      (0, path_1.join)(
                        __dirname,
                        './uploads-images',
                        `${file.originalname}`,
                      ),
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
        };
        WebService = __decorate(
          [
            (0, common_1.Injectable)(),
            __param(
              0,
              (0, nestjs_typegoose_1.InjectModel)(banner_model_1.Banner),
            ),
            __param(
              1,
              (0, nestjs_typegoose_1.InjectModel)(
                classify_navigation_model_1.ClassifyNavigation,
              ),
            ),
            __param(
              2,
              (0, nestjs_typegoose_1.InjectModel)(product_model_1.Product),
            ),
            __param(
              3,
              (0, nestjs_typegoose_1.InjectModel)(
                site_setting_model_1.SiteSettings,
              ),
            ),
            __param(
              4,
              (0, nestjs_typegoose_1.InjectModel)(order_model_1.Order),
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
              typeof (_d =
                typeof typegoose_1.ReturnModelType !== 'undefined' &&
                typegoose_1.ReturnModelType) === 'function'
                ? _d
                : Object,
              typeof (_e =
                typeof typegoose_1.ReturnModelType !== 'undefined' &&
                typegoose_1.ReturnModelType) === 'function'
                ? _e
                : Object,
            ]),
          ],
          WebService,
        );
        exports.WebService = WebService;

        /***/
      },

    /***/ './libs/common/src/ResponseResultModel.ts':
      /*!************************************************!*\
  !*** ./libs/common/src/ResponseResultModel.ts ***!
  \************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ApiFail =
          exports.apiSucceed =
          exports.PaginationResult =
          exports.ApiSucceedResult =
            void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
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

    /***/ './libs/common/src/common.module.ts':
      /*!******************************************!*\
  !*** ./libs/common/src/common.module.ts ***!
  \******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.CommonModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const config_1 = __webpack_require__(
          /*! @nestjs/config */ '@nestjs/config',
        );
        const db_1 = __webpack_require__(
          /*! libs/db */ './libs/db/src/index.ts',
        );
        const common_service_1 = __webpack_require__(
          /*! ./common.service */ './libs/common/src/common.service.ts',
        );
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

    /***/ './libs/common/src/common.service.ts':
      /*!*******************************************!*\
  !*** ./libs/common/src/common.service.ts ***!
  \*******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.CommonService = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        let CommonService = class CommonService {};
        CommonService = __decorate([(0, common_1.Injectable)()], CommonService);
        exports.CommonService = CommonService;

        /***/
      },

    /***/ './libs/common/src/config/db.config.ts':
      /*!*********************************************!*\
  !*** ./libs/common/src/config/db.config.ts ***!
  \*********************************************/
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

    /***/ './libs/common/src/config/jwt.config.ts':
      /*!**********************************************!*\
  !*** ./libs/common/src/config/jwt.config.ts ***!
  \**********************************************/
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

    /***/ './libs/common/src/config/port.config.ts':
      /*!***********************************************!*\
  !*** ./libs/common/src/config/port.config.ts ***!
  \***********************************************/
      /***/ (__unused_webpack_module, exports) => {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.webPort = exports.adminPort = void 0;
        exports.adminPort = 3008;
        exports.webPort = 3009;

        /***/
      },

    /***/ './libs/common/src/enum/banner.enum.ts':
      /*!*********************************************!*\
  !*** ./libs/common/src/enum/banner.enum.ts ***!
  \*********************************************/
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
        })(
          (BannerStatus = exports.BannerStatus || (exports.BannerStatus = {})),
        );

        /***/
      },

    /***/ './libs/common/src/enum/fileStorageMode.enum.ts':
      /*!******************************************************!*\
  !*** ./libs/common/src/enum/fileStorageMode.enum.ts ***!
  \******************************************************/
      /***/ (__unused_webpack_module, exports) => {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.FileStorageModeEnum = void 0;
        var FileStorageModeEnum;
        (function (FileStorageModeEnum) {
          FileStorageModeEnum[(FileStorageModeEnum['LOCAL'] = 1)] = 'LOCAL';
          FileStorageModeEnum[(FileStorageModeEnum['ALIOSS'] = 2)] = 'ALIOSS';
          FileStorageModeEnum[(FileStorageModeEnum['QINIUOSS'] = 3)] =
            'QINIUOSS';
        })(
          (FileStorageModeEnum =
            exports.FileStorageModeEnum || (exports.FileStorageModeEnum = {})),
        );

        /***/
      },

    /***/ './libs/common/src/enum/orderStatus.enum.ts':
      /*!**************************************************!*\
  !*** ./libs/common/src/enum/orderStatus.enum.ts ***!
  \**************************************************/
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

    /***/ './libs/common/src/enum/product.enum.ts':
      /*!**********************************************!*\
  !*** ./libs/common/src/enum/product.enum.ts ***!
  \**********************************************/
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
            exports.ProductSkuSelectType ||
            (exports.ProductSkuSelectType = {})),
        );

        /***/
      },

    /***/ './libs/common/src/enum/user.enum.ts':
      /*!*******************************************!*\
  !*** ./libs/common/src/enum/user.enum.ts ***!
  \*******************************************/
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

    /***/ './libs/common/src/index.ts':
      /*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
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
        __exportStar(
          __webpack_require__(
            /*! ./common.module */ './libs/common/src/common.module.ts',
          ),
          exports,
        );
        __exportStar(
          __webpack_require__(
            /*! ./common.service */ './libs/common/src/common.service.ts',
          ),
          exports,
        );

        /***/
      },

    /***/ './libs/common/src/pipe/parse-id.pipe.ts':
      /*!***********************************************!*\
  !*** ./libs/common/src/pipe/parse-id.pipe.ts ***!
  \***********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ParseIdPipe = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const mongoose_1 = __webpack_require__(/*! mongoose */ 'mongoose');
        const ResponseResultModel_1 = __webpack_require__(
          /*! ../ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
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

    /***/ './libs/common/src/pipe/validate-dto.pipe.ts':
      /*!***************************************************!*\
  !*** ./libs/common/src/pipe/validate-dto.pipe.ts ***!
  \***************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ValidationDtoPipe = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const class_validator_1 = __webpack_require__(
          /*! class-validator */ 'class-validator',
        );
        const class_transformer_1 = __webpack_require__(
          /*! class-transformer */ 'class-transformer',
        );
        const ResponseResultModel_1 = __webpack_require__(
          /*! ../ResponseResultModel */ './libs/common/src/ResponseResultModel.ts',
        );
        let ValidationDtoPipe = class ValidationDtoPipe {
          async transform(value, { metatype }) {
            if (!metatype || !this.toValidate(metatype)) {
              return value;
            }
            const object = (0, class_transformer_1.plainToClass)(
              metatype,
              value,
            );
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

    /***/ './libs/common/src/utils/has.ts':
      /*!**************************************!*\
  !*** ./libs/common/src/utils/has.ts ***!
  \**************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.createMkdir = exports.dirIsExist = void 0;
        const fs = __webpack_require__(/*! fs */ 'fs');
        const path_1 = __webpack_require__(/*! path */ 'path');
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

    /***/ './libs/db/src/db.module.ts':
      /*!**********************************!*\
  !*** ./libs/db/src/db.module.ts ***!
  \**********************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.DbModule = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        const db_config_1 = __webpack_require__(
          /*! libs/common/config/db.config */ './libs/common/src/config/db.config.ts',
        );
        const nestjs_typegoose_1 = __webpack_require__(
          /*! nestjs-typegoose */ 'nestjs-typegoose',
        );
        const db_service_1 = __webpack_require__(
          /*! ./db.service */ './libs/db/src/db.service.ts',
        );
        const admin_model_1 = __webpack_require__(
          /*! ./modules/admin.model */ './libs/db/src/modules/admin.model.ts',
        );
        const banner_model_1 = __webpack_require__(
          /*! ./modules/banner.model */ './libs/db/src/modules/banner.model.ts',
        );
        const category_model_1 = __webpack_require__(
          /*! ./modules/category.model */ './libs/db/src/modules/category.model.ts',
        );
        const chat_conversation_record_model_1 = __webpack_require__(
          /*! ./modules/chat-conversation-record.model */ './libs/db/src/modules/chat-conversation-record.model.ts',
        );
        const chat_messages_model_1 = __webpack_require__(
          /*! ./modules/chat-messages.model */ './libs/db/src/modules/chat-messages.model.ts',
        );
        const classify_navigation_model_1 = __webpack_require__(
          /*! ./modules/classify-navigation.model */ './libs/db/src/modules/classify-navigation.model.ts',
        );
        const customer_service_model_1 = __webpack_require__(
          /*! ./modules/customer-service.model */ './libs/db/src/modules/customer-service.model.ts',
        );
        const library_category_model_1 = __webpack_require__(
          /*! ./modules/library-category.model */ './libs/db/src/modules/library-category.model.ts',
        );
        const media_library_model_1 = __webpack_require__(
          /*! ./modules/media-library.model */ './libs/db/src/modules/media-library.model.ts',
        );
        const menu_model_1 = __webpack_require__(
          /*! ./modules/menu.model */ './libs/db/src/modules/menu.model.ts',
        );
        const news_model_1 = __webpack_require__(
          /*! ./modules/news.model */ './libs/db/src/modules/news.model.ts',
        );
        const order_model_1 = __webpack_require__(
          /*! ./modules/order.model */ './libs/db/src/modules/order.model.ts',
        );
        const product_comment_model_1 = __webpack_require__(
          /*! ./modules/product-comment-model */ './libs/db/src/modules/product-comment-model.ts',
        );
        const product_param_model_1 = __webpack_require__(
          /*! ./modules/product-param.model */ './libs/db/src/modules/product-param.model.ts',
        );
        const product_sku_attr_model_1 = __webpack_require__(
          /*! ./modules/product-sku-attr.model */ './libs/db/src/modules/product-sku-attr.model.ts',
        );
        const product_sku_model_1 = __webpack_require__(
          /*! ./modules/product-sku.model */ './libs/db/src/modules/product-sku.model.ts',
        );
        const product_topic_model_1 = __webpack_require__(
          /*! ./modules/product-topic.model */ './libs/db/src/modules/product-topic.model.ts',
        );
        const product_unit_model_1 = __webpack_require__(
          /*! ./modules/product-unit.model */ './libs/db/src/modules/product-unit.model.ts',
        );
        const product_model_1 = __webpack_require__(
          /*! ./modules/product.model */ './libs/db/src/modules/product.model.ts',
        );
        const role_model_1 = __webpack_require__(
          /*! ./modules/role.model */ './libs/db/src/modules/role.model.ts',
        );
        const site_setting_model_1 = __webpack_require__(
          /*! ./modules/site-setting.model */ './libs/db/src/modules/site-setting.model.ts',
        );
        const tag_model_1 = __webpack_require__(
          /*! ./modules/tag.model */ './libs/db/src/modules/tag.model.ts',
        );
        const user_address_model_1 = __webpack_require__(
          /*! ./modules/user-address.model */ './libs/db/src/modules/user-address.model.ts',
        );
        const user_cart_model_1 = __webpack_require__(
          /*! ./modules/user-cart.model */ './libs/db/src/modules/user-cart.model.ts',
        );
        const user_collection_model_1 = __webpack_require__(
          /*! ./modules/user-collection.model */ './libs/db/src/modules/user-collection.model.ts',
        );
        const user_views_history_model_1 = __webpack_require__(
          /*! ./modules/user-views-history.model */ './libs/db/src/modules/user-views-history.model.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! ./modules/user.model */ './libs/db/src/modules/user.model.ts',
        );
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

    /***/ './libs/db/src/db.service.ts':
      /*!***********************************!*\
  !*** ./libs/db/src/db.service.ts ***!
  \***********************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.DbService = void 0;
        const common_1 = __webpack_require__(
          /*! @nestjs/common */ '@nestjs/common',
        );
        let DbService = class DbService {};
        DbService = __decorate([(0, common_1.Injectable)()], DbService);
        exports.DbService = DbService;

        /***/
      },

    /***/ './libs/db/src/index.ts':
      /*!******************************!*\
  !*** ./libs/db/src/index.ts ***!
  \******************************/
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
        __exportStar(
          __webpack_require__(/*! ./db.module */ './libs/db/src/db.module.ts'),
          exports,
        );
        __exportStar(
          __webpack_require__(
            /*! ./db.service */ './libs/db/src/db.service.ts',
          ),
          exports,
        );

        /***/
      },

    /***/ './libs/db/src/modules/admin.model.ts':
      /*!********************************************!*\
  !*** ./libs/db/src/modules/admin.model.ts ***!
  \********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const bcryptjs_1 = __webpack_require__(/*! bcryptjs */ 'bcryptjs');
        const role_model_1 = __webpack_require__(
          /*! ./role.model */ './libs/db/src/modules/role.model.ts',
        );
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

    /***/ './libs/db/src/modules/banner.model.ts':
      /*!*********************************************!*\
  !*** ./libs/db/src/modules/banner.model.ts ***!
  \*********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const banner_enum_1 = __webpack_require__(
          /*! libs/common/enum/banner.enum */ './libs/common/src/enum/banner.enum.ts',
        );
        const product_model_1 = __webpack_require__(
          /*! ./product.model */ './libs/db/src/modules/product.model.ts',
        );
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

    /***/ './libs/db/src/modules/category.model.ts':
      /*!***********************************************!*\
  !*** ./libs/db/src/modules/category.model.ts ***!
  \***********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
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

    /***/ './libs/db/src/modules/chat-conversation-record.model.ts':
      /*!***************************************************************!*\
  !*** ./libs/db/src/modules/chat-conversation-record.model.ts ***!
  \***************************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const customer_service_model_1 = __webpack_require__(
          /*! ./customer-service.model */ './libs/db/src/modules/customer-service.model.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! ./user.model */ './libs/db/src/modules/user.model.ts',
        );
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

    /***/ './libs/db/src/modules/chat-messages.model.ts':
      /*!****************************************************!*\
  !*** ./libs/db/src/modules/chat-messages.model.ts ***!
  \****************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
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

    /***/ './libs/db/src/modules/classify-navigation.model.ts':
      /*!**********************************************************!*\
  !*** ./libs/db/src/modules/classify-navigation.model.ts ***!
  \**********************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
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

    /***/ './libs/db/src/modules/customer-service.model.ts':
      /*!*******************************************************!*\
  !*** ./libs/db/src/modules/customer-service.model.ts ***!
  \*******************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const bcryptjs_1 = __webpack_require__(/*! bcryptjs */ 'bcryptjs');
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

    /***/ './libs/db/src/modules/library-category.model.ts':
      /*!*******************************************************!*\
  !*** ./libs/db/src/modules/library-category.model.ts ***!
  \*******************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
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

    /***/ './libs/db/src/modules/media-library.model.ts':
      /*!****************************************************!*\
  !*** ./libs/db/src/modules/media-library.model.ts ***!
  \****************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const library_category_model_1 = __webpack_require__(
          /*! ./library-category.model */ './libs/db/src/modules/library-category.model.ts',
        );
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

    /***/ './libs/db/src/modules/menu.model.ts':
      /*!*******************************************!*\
  !*** ./libs/db/src/modules/menu.model.ts ***!
  \*******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
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

    /***/ './libs/db/src/modules/news.model.ts':
      /*!*******************************************!*\
  !*** ./libs/db/src/modules/news.model.ts ***!
  \*******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const tag_model_1 = __webpack_require__(
          /*! ./tag.model */ './libs/db/src/modules/tag.model.ts',
        );
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
            (0, typegoose_1.prop)({
              required: true,
              ref: () => tag_model_1.Tag,
            }),
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

    /***/ './libs/db/src/modules/order.model.ts':
      /*!********************************************!*\
  !*** ./libs/db/src/modules/order.model.ts ***!
  \********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const orderStatus_enum_1 = __webpack_require__(
          /*! libs/common/enum/orderStatus.enum */ './libs/common/src/enum/orderStatus.enum.ts',
        );
        const product_model_1 = __webpack_require__(
          /*! ./product.model */ './libs/db/src/modules/product.model.ts',
        );
        const user_address_model_1 = __webpack_require__(
          /*! ./user-address.model */ './libs/db/src/modules/user-address.model.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! ./user.model */ './libs/db/src/modules/user.model.ts',
        );
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

    /***/ './libs/db/src/modules/product-comment-model.ts':
      /*!******************************************************!*\
  !*** ./libs/db/src/modules/product-comment-model.ts ***!
  \******************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const product_model_1 = __webpack_require__(
          /*! ./product.model */ './libs/db/src/modules/product.model.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! ./user.model */ './libs/db/src/modules/user.model.ts',
        );
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

    /***/ './libs/db/src/modules/product-param.model.ts':
      /*!****************************************************!*\
  !*** ./libs/db/src/modules/product-param.model.ts ***!
  \****************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
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

    /***/ './libs/db/src/modules/product-sku-attr.model.ts':
      /*!*******************************************************!*\
  !*** ./libs/db/src/modules/product-sku-attr.model.ts ***!
  \*******************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const product_model_1 = __webpack_require__(
          /*! ./product.model */ './libs/db/src/modules/product.model.ts',
        );
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

    /***/ './libs/db/src/modules/product-sku.model.ts':
      /*!**************************************************!*\
  !*** ./libs/db/src/modules/product-sku.model.ts ***!
  \**************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const product_model_1 = __webpack_require__(
          /*! ./product.model */ './libs/db/src/modules/product.model.ts',
        );
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

    /***/ './libs/db/src/modules/product-topic.model.ts':
      /*!****************************************************!*\
  !*** ./libs/db/src/modules/product-topic.model.ts ***!
  \****************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const category_model_1 = __webpack_require__(
          /*! ./category.model */ './libs/db/src/modules/category.model.ts',
        );
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

    /***/ './libs/db/src/modules/product-unit.model.ts':
      /*!***************************************************!*\
  !*** ./libs/db/src/modules/product-unit.model.ts ***!
  \***************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
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

    /***/ './libs/db/src/modules/product.model.ts':
      /*!**********************************************!*\
  !*** ./libs/db/src/modules/product.model.ts ***!
  \**********************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const product_enum_1 = __webpack_require__(
          /*! libs/common/enum/product.enum */ './libs/common/src/enum/product.enum.ts',
        );
        const category_model_1 = __webpack_require__(
          /*! ./category.model */ './libs/db/src/modules/category.model.ts',
        );
        const tag_model_1 = __webpack_require__(
          /*! ./tag.model */ './libs/db/src/modules/tag.model.ts',
        );
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
            (0, swagger_1.ApiProperty)({
              title: '是否限时精选',
              example: false,
            }),
            (0, typegoose_1.prop)({ default: false }),
            __metadata('design:type', Boolean),
          ],
          Product.prototype,
          'isTimeLimit',
          void 0,
        );
        __decorate(
          [
            (0, swagger_1.ApiProperty)({
              title: '是否热门推荐',
              example: false,
            }),
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

    /***/ './libs/db/src/modules/role.model.ts':
      /*!*******************************************!*\
  !*** ./libs/db/src/modules/role.model.ts ***!
  \*******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const menu_model_1 = __webpack_require__(
          /*! ./menu.model */ './libs/db/src/modules/menu.model.ts',
        );
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
            (0, typegoose_1.prop)({
              ref: () => menu_model_1.Menu,
              default: [],
            }),
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

    /***/ './libs/db/src/modules/site-setting.model.ts':
      /*!***************************************************!*\
  !*** ./libs/db/src/modules/site-setting.model.ts ***!
  \***************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const fileStorageMode_enum_1 = __webpack_require__(
          /*! libs/common/enum/fileStorageMode.enum */ './libs/common/src/enum/fileStorageMode.enum.ts',
        );
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

    /***/ './libs/db/src/modules/tag.model.ts':
      /*!******************************************!*\
  !*** ./libs/db/src/modules/tag.model.ts ***!
  \******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
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

    /***/ './libs/db/src/modules/user-address.model.ts':
      /*!***************************************************!*\
  !*** ./libs/db/src/modules/user-address.model.ts ***!
  \***************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const user_model_1 = __webpack_require__(
          /*! ./user.model */ './libs/db/src/modules/user.model.ts',
        );
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

    /***/ './libs/db/src/modules/user-cart.model.ts':
      /*!************************************************!*\
  !*** ./libs/db/src/modules/user-cart.model.ts ***!
  \************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const product_model_1 = __webpack_require__(
          /*! ./product.model */ './libs/db/src/modules/product.model.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! ./user.model */ './libs/db/src/modules/user.model.ts',
        );
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

    /***/ './libs/db/src/modules/user-collection.model.ts':
      /*!******************************************************!*\
  !*** ./libs/db/src/modules/user-collection.model.ts ***!
  \******************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const product_model_1 = __webpack_require__(
          /*! ./product.model */ './libs/db/src/modules/product.model.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! ./user.model */ './libs/db/src/modules/user.model.ts',
        );
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

    /***/ './libs/db/src/modules/user-views-history.model.ts':
      /*!*********************************************************!*\
  !*** ./libs/db/src/modules/user-views-history.model.ts ***!
  \*********************************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const product_model_1 = __webpack_require__(
          /*! ./product.model */ './libs/db/src/modules/product.model.ts',
        );
        const user_model_1 = __webpack_require__(
          /*! ./user.model */ './libs/db/src/modules/user.model.ts',
        );
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

    /***/ './libs/db/src/modules/user.model.ts':
      /*!*******************************************!*\
  !*** ./libs/db/src/modules/user.model.ts ***!
  \*******************************************/
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
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
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
        const swagger_1 = __webpack_require__(
          /*! @nestjs/swagger */ '@nestjs/swagger',
        );
        const typegoose_1 = __webpack_require__(
          /*! @typegoose/typegoose */ '@typegoose/typegoose',
        );
        const bcryptjs_1 = __webpack_require__(/*! bcryptjs */ 'bcryptjs');
        const user_enum_1 = __webpack_require__(
          /*! libs/common/enum/user.enum */ './libs/common/src/enum/user.enum.ts',
        );
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

    /***/ '@nestjs/common':
      /*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require('@nestjs/common');

        /***/
      },

    /***/ '@nestjs/config':
      /*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require('@nestjs/config');

        /***/
      },

    /***/ '@nestjs/core':
      /*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
      /***/ (module) => {
        module.exports = require('@nestjs/core');

        /***/
      },

    /***/ '@nestjs/jwt':
      /*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
      /***/ (module) => {
        module.exports = require('@nestjs/jwt');

        /***/
      },

    /***/ '@nestjs/passport':
      /*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
      /***/ (module) => {
        module.exports = require('@nestjs/passport');

        /***/
      },

    /***/ '@nestjs/platform-express':
      /*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
      /***/ (module) => {
        module.exports = require('@nestjs/platform-express');

        /***/
      },

    /***/ '@nestjs/swagger':
      /*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
      /***/ (module) => {
        module.exports = require('@nestjs/swagger');

        /***/
      },

    /***/ '@typegoose/typegoose':
      /*!***************************************!*\
  !*** external "@typegoose/typegoose" ***!
  \***************************************/
      /***/ (module) => {
        module.exports = require('@typegoose/typegoose');

        /***/
      },

    /***/ 'ali-oss':
      /*!**************************!*\
  !*** external "ali-oss" ***!
  \**************************/
      /***/ (module) => {
        module.exports = require('ali-oss');

        /***/
      },

    /***/ bcryptjs:
      /*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
      /***/ (module) => {
        module.exports = require('bcryptjs');

        /***/
      },

    /***/ 'class-transformer':
      /*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
      /***/ (module) => {
        module.exports = require('class-transformer');

        /***/
      },

    /***/ 'class-validator':
      /*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
      /***/ (module) => {
        module.exports = require('class-validator');

        /***/
      },

    /***/ mongoose:
      /*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
      /***/ (module) => {
        module.exports = require('mongoose');

        /***/
      },

    /***/ 'nestjs-typegoose':
      /*!***********************************!*\
  !*** external "nestjs-typegoose" ***!
  \***********************************/
      /***/ (module) => {
        module.exports = require('nestjs-typegoose');

        /***/
      },

    /***/ 'passport-jwt':
      /*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
      /***/ (module) => {
        module.exports = require('passport-jwt');

        /***/
      },

    /***/ 'passport-local':
      /*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require('passport-local');

        /***/
      },

    /***/ fs:
      /*!*********************!*\
  !*** external "fs" ***!
  \*********************/
      /***/ (module) => {
        module.exports = require('fs');

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require('path');

        /***/
      },

    /******/
  };
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
    /*!******************************!*\
  !*** ./apps/web/src/main.ts ***!
  \******************************/

    Object.defineProperty(exports, '__esModule', { value: true });
    const core_1 = __webpack_require__(/*! @nestjs/core */ '@nestjs/core');
    const swagger_1 = __webpack_require__(
      /*! @nestjs/swagger */ '@nestjs/swagger',
    );
    const port_config_1 = __webpack_require__(
      /*! libs/common/config/port.config */ './libs/common/src/config/port.config.ts',
    );
    const validate_dto_pipe_1 = __webpack_require__(
      /*! libs/common/pipe/validate-dto.pipe */ './libs/common/src/pipe/validate-dto.pipe.ts',
    );
    const path_1 = __webpack_require__(/*! path */ 'path');
    const web_module_1 = __webpack_require__(
      /*! ./web.module */ './apps/web/src/web.module.ts',
    );
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
