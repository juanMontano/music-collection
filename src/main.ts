import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig: AppConfigService = app.get('AppConfigService');

  const options = new DocumentBuilder()
    .setTitle('Music collections')
    .setDescription('Album, Artist')
    .setVersion('0.0.1')
    .addTag('Albums')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(appConfig.port);
}
bootstrap();
