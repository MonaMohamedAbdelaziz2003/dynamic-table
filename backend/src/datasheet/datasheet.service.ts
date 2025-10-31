/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateDatasheetDto } from './dto/create-datasheet.dto';
import { UpdateDatasheetDto } from './dto/update-datasheet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Datasheet } from './entities/datasheet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DatasheetService {
  constructor(
    @InjectRepository(Datasheet)
    private shhtRepository: Repository<Datasheet>,
  ) {}

  create(createDatasheetDto: CreateDatasheetDto) {
    return 'This action adds a new datasheet';
  }

  async findAll(page = 1, size = 10, search?: string) {
    const skip = (page - 1) * size;
    const take = size;

    const [pageData, total] = await this.shhtRepository
      .createQueryBuilder('datasheet')
      .skip(skip)
      .take(take)
      .getManyAndCount();

    let filteredData = pageData;
    if (search && search.trim() !== '') {
      const searchNum = Number(search);
      if (!isNaN(searchNum)) {
        filteredData = pageData.filter(
          (item) => item.idDatasheet === searchNum,
        );
      }
    }

    return {
      data: filteredData,
      total: total,
    };
  }

  async findOne(id: number): Promise<Datasheet | null> {
    return await this.shhtRepository.findOne({
      where: { idDatasheet: id },
    });
  }

  update(id: number, updateDatasheetDto: UpdateDatasheetDto) {
    return `This action updates a #${id} datasheet`;
  }

  remove(id: number) {
    return `This action removes a #${id} datasheet`;
  }
}
