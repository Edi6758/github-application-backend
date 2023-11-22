/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateSearchHistoryLogDto } from './create-search-history-log.dto';

export class UpdateSearchHistoryLogDto extends PartialType(
  CreateSearchHistoryLogDto,
) {}
