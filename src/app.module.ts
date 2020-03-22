import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiversModule } from './rivers/rivers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [RiversModule ,       
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
   }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
