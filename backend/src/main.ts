import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

    //swagger
    const config = new DocumentBuilder()
        .setTitle('Texas Ashram')
        .setDescription('Texas Ashram API Documentation')
        .setVersion('1.0')
        .addTag('Auth')
        .addTag('Users')
        .addSecurity('bearer', {
            type: 'http',
            scheme: 'bearer',
        })
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

  await app.listen(3023);
}
bootstrap();
