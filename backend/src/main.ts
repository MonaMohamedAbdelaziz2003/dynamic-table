import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { NestExpressApplication } from '@nestjs/platform-express';
import { FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  // const app = await NestFactory.create(AppModule); // default express
  app.enableCors(); // ✅ السماح بالاتصال من Angular

  await app.listen(process.env.PORT ?? 3000);
}
// bootstrap();
void bootstrap();
