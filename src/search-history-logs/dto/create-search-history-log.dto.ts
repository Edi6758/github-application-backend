/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateSearchHistoryLogDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  authorId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  foundRepos: number;
}
