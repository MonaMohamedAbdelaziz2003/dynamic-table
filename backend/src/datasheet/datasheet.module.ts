import { Module } from '@nestjs/common';
import { DatasheetService } from './datasheet.service';
import { DatasheetController } from './datasheet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Datasheet } from './entities/datasheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Datasheet])],
  controllers: [DatasheetController],
  providers: [DatasheetService],
})
export class DatasheetModule {}
