import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as express from 'express';
import * as path from 'path';
import { config } from 'dotenv';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

    config({ path: join(__dirname, '../.env') });

    //swagger
    const swagger_config = new DocumentBuilder()
        .setTitle('Texas Ashram')
        .setDescription('Texas Ashram API Documentation')
        .setVersion('1.0')
        .addTag('Auth')
        .addTag('Books')
        .addTag('Events')
        .addTag('Users')
        .addTag('Sermons')
        .addTag('Posts')
        .addTag('Prayer Requests')
        .addTag('Announcements')
        .addSecurity('bearer', {
            type: 'http',
            scheme: 'bearer',
        })
        .build();
    const document = SwaggerModule.createDocument(app, swagger_config);
    SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
