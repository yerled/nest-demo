import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './common/any-exception.filter';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { LoggerMiddleware } from './common/logger.middleware';
import { logger2 } from './common/logger2.middleware';
import { FuckerModule } from './modules/fucker/fucker.module';

@Module({
  imports: [FuckerModule],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger2, LoggerMiddleware)
      .forRoutes({ path: 'fuckers', method: RequestMethod.GET });
  }
}
