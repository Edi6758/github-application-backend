import { Module } from '@nestjs/common';
import { SearchHistoryLogsService } from './search-history-logs.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SearchHistoryLogsController } from './search-history-logs.controller';

@Module({
  controllers: [SearchHistoryLogsController],
  providers: [SearchHistoryLogsService],
  imports: [PrismaModule],
})
export class SearchHistoryLogsModule {}
