import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('Insurance Policy Management API')
    .setDescription(
      'This API allows for managing insurance policies, including operations for creating, reading, updating, and deleting policies. It features basic authentication and connects to a mock database.',
    )
    .setVersion('1.0')
    .addTag('Policies')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
