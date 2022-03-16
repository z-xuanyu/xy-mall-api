/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:54:20
 * @LastEditTime: 2022-03-16 11:51:21
 * @Description: Modify here please
 */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { adminPort } from 'libs/common/config/port.config';
import { HttpExceptionFilter } from 'libs/common/filters/http-exception.filter';
import { ValidationDtoPipe } from 'libs/common/pipe/validate-dto.pipe';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Web漏洞的
  app.use(helmet());
  // 访问频率限制
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15分钟
      max: 50000, // 限制15分钟内最多只能访问50000次
    }),
  );
  // dto参数校验管道
  app.useGlobalPipes(new ValidationDtoPipe());
  // 允许跨域
  app.enableCors();
  // 静态文件管理
  app.useStaticAssets(join(__dirname, './uploads-images/'), {
    prefix: '/uploads-images/',
  });
  // 全局注册错误的过滤器(错误异常)
  app.useGlobalFilters(new HttpExceptionFilter());
  // swagger 文档配置
  const config = new DocumentBuilder()
    .setTitle('Admin-Api文档')
    .setDescription('管理站Api文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(adminPort);
  console.log(`http://localhost:${adminPort}/api-docs`);
}
bootstrap();
