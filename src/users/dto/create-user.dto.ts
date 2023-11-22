import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsUrl,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  avatar_url: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  html_url: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  company: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  blog: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  bio: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  twitter_username: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  public_repos: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  followers: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  following: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
