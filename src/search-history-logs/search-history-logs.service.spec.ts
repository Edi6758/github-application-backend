import { Test, TestingModule } from '@nestjs/testing';
import { SearchHistoryLogsService } from './search-history-logs.service';

describe('SearchHistoryLogsService', () => {
  let service: SearchHistoryLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchHistoryLogsService],
    }).compile();

    service = module.get<SearchHistoryLogsService>(SearchHistoryLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
