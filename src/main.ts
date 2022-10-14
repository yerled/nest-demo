import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger2 } from './common/logger2.middleware';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger2);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
