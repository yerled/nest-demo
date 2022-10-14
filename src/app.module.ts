import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/logger.middleware';
import { logger2 } from './common/logger2.middleware';
import { FuckerModule } from './modules/fucker/fucker.module';

@Module({
  imports: [FuckerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger2, LoggerMiddleware)
      .forRoutes({ path: 'fuckers', method: RequestMethod.GET });
  }
}
