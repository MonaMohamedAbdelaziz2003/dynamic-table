/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { DatasheetService } from './datasheet.service';
import { CreateDatasheetDto } from './dto/create-datasheet.dto';
import { UpdateDatasheetDto } from './dto/update-datasheet.dto';

@Controller('datasheet')
export class DatasheetController {
  constructor(private readonly datasheetService: DatasheetService) {}

  @Post()
  create(@Body() createDatasheetDto: CreateDatasheetDto) {
    return this.datasheetService.create(createDatasheetDto);
  }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('size') size: number = 10,
    @Query('search') search?: string,
  ) {
    return this.datasheetService.findAll(page, size, search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datasheetService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDatasheetDto: UpdateDatasheetDto,
  ) {
    return this.datasheetService.update(+id, updateDatasheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datasheetService.remove(+id);
  }
}
