import { Test, TestingModule } from '@nestjs/testing';
import { SearchHistoryLogsController } from './SearchHistoryLogsController';
import { SearchHistoryLogsService } from './search-history-logs.service';

describe('SearchHistoryLogsController', () => {
  let controller: SearchHistoryLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchHistoryLogsController],
      providers: [SearchHistoryLogsService],
    }).compile();

    controller = module.get<SearchHistoryLogsController>(
      SearchHistoryLogsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
