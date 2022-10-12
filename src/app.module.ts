import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuckerModule } from './modules/fucker/fucker.module';

@Module({
  imports: [FuckerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
