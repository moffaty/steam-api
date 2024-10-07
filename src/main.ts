import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Steam API')
        .setDescription('Steam API description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true, // Чтобы преобразовывать входящие данные в тип DTO
            whitelist: true, // Удалять свойства, которые не указаны в классе
            forbidNonWhitelisted: true, // Возвращать ошибку, если в запросе есть неразрешенные свойства
        }),
    );
    await app.listen(3000);
}
bootstrap();
