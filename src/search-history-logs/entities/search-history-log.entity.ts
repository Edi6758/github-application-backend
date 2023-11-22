/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class SearchHistoryLogEntity {
  constructor(partial: Partial<SearchHistoryLogEntity>) {
    Object.assign(this, partial);
  }
  
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  authorId: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  status: string;

  @IsNumber()
  @ApiProperty()
  foundRepos: number;
}
