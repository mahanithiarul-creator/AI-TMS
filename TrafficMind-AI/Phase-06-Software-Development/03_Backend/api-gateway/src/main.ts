import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // The API Gateway sits at the edge and handles CORS
  app.enableCors();

  await app.listen(3000);
  console.log('API Gateway (CMP-015) is running on port 3000');
}
bootstrap();
