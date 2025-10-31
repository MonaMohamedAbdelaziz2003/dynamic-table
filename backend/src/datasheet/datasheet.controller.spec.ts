import { Test, TestingModule } from '@nestjs/testing';
import { DatasheetController } from './datasheet.controller';
import { DatasheetService } from './datasheet.service';

describe('DatasheetController', () => {
  let controller: DatasheetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatasheetController],
      providers: [DatasheetService],
    }).compile();

    controller = module.get<DatasheetController>(DatasheetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
