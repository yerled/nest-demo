import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './common/any-exception.filter';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { LoggerMiddleware } from './common/logger.middleware';
import { logger2 } from './common/logger2.middleware';
import { FuckerModule } from './modules/fucker/fucker.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [FuckerModule, AuthModule, UsersModule],
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
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger2, LoggerMiddleware)
      .forRoutes({ path: 'fuckers', method: RequestMethod.GET });
  }
}
