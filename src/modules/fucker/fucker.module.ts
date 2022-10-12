import { Module } from '@nestjs/common';
import { FuckerService } from './fucker.service';
import { FuckerController } from './fucker.controller';

@Module({
  providers: [FuckerService],
  controllers: [FuckerController],
})
export class FuckerModule {}
