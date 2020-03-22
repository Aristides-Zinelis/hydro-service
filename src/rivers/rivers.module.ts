import { Module } from '@nestjs/common';
import { RiversService } from './rivers/rivers.service';
import { RiversController } from './rivers/rivers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { River } from './rivers.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([River]),
  ],
  providers: [RiversService],
  controllers: [RiversController]
})
export class RiversModule {}
