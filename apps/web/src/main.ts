/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-03-03 09:56:14
 * @LastEditTime: 2022-03-03 11:40:49
 * @Description: Modify here please
 */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { webPort } from 'libs/common/config/port.config';
import { ValidationDtoPipe } from 'libs/common/pipe/validate-dto.pipe';
import { WebModule } from './web.module';

async function bootstrap() {
  const app = await NestFactory.create(WebModule);
  app.useGlobalPipes(new ValidationDtoPipe());
  app.enableCors(); // 允许跨域
  const config = new DocumentBuilder()
    .setTitle('Web-Api文档')
    .setDescription('web站Api文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(webPort);
  console.log(`http://localhost:${webPort}/api-docs`);
}
bootstrap();
