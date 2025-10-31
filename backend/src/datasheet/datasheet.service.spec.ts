import { Test, TestingModule } from '@nestjs/testing';
import { DatasheetService } from './datasheet.service';

describe('DatasheetService', () => {
  let service: DatasheetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatasheetService],
    }).compile();

    service = module.get<DatasheetService>(DatasheetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
