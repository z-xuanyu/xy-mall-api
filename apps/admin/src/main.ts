/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:54:20
 * @LastEditTime: 2022-03-03 11:42:45
 * @Description: Modify here please
 */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { adminPort } from 'libs/common/config/port.config';
import { ValidationDtoPipe } from 'libs/common/pipe/validate-dto.pipe';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationDtoPipe());
  app.enableCors(); // 允许跨域
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
