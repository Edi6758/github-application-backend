import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { SearchHistoryLogsService } from './search-history-logs.service';
import { SearchHistoryLogEntity } from './entities/search-history-log.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSearchHistoryLogDto } from './dto/create-search-history-log.dto';
import { UpdateSearchHistoryLogDto } from './dto/update-search-history-log.dto';

@Controller('search-history-logs')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('search-history-logs')
export class SearchHistoryLogsController {
  constructor(
    private readonly searchHistoryLogsService: SearchHistoryLogsService,
  ) {}

  @Post()
  @ApiBody({ type: CreateSearchHistoryLogDto })
  @ApiCreatedResponse({ type: SearchHistoryLogEntity })
  async createSearchHistoryLog(
    @Body() createSearchHistoryLogDto: CreateSearchHistoryLogDto,
  ): Promise<SearchHistoryLogEntity> {
    const createdLog =
      await this.searchHistoryLogsService.createSearchHistoryLog(
        createSearchHistoryLogDto,
      );
    return new SearchHistoryLogEntity(createdLog);
  }

  @Get()
  @ApiOkResponse({ type: SearchHistoryLogEntity, isArray: true })
  async getAllSearchHistoryLogs(): Promise<SearchHistoryLogEntity[]> {
    const logs = await this.searchHistoryLogsService.getAllSearchHistoryLogs();
    return logs.map((log) => new SearchHistoryLogEntity(log));
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ type: SearchHistoryLogEntity })
  async getSearchHistoryLogById(
    @Param('id') id: string,
  ): Promise<SearchHistoryLogEntity> {
    const log = await this.searchHistoryLogsService.getSearchHistoryLogById(id);
    if (!log) {
      throw new NotFoundException('Search history log not found');
    }
    return new SearchHistoryLogEntity(log);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateSearchHistoryLogDto })
  @ApiOkResponse({ type: SearchHistoryLogEntity })
  async updateSearchHistoryLog(
    @Param('id') id: string,
    @Body() updateSearchHistoryLogDto: UpdateSearchHistoryLogDto,
  ): Promise<SearchHistoryLogEntity> {
    const updatedLog =
      await this.searchHistoryLogsService.updateSearchHistoryLog(
        id,
        updateSearchHistoryLogDto,
      );
    return new SearchHistoryLogEntity(updatedLog);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ type: SearchHistoryLogEntity })
  async deleteSearchHistoryLog(
    @Param('id') id: string,
  ): Promise<SearchHistoryLogEntity> {
    const deletedLog =
      await this.searchHistoryLogsService.deleteSearchHistoryLog(id);
    return new SearchHistoryLogEntity(deletedLog);
  }
}
