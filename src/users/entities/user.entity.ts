import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsUrl,
  IsEmail,
} from 'class-validator';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @IsString()
  @ApiProperty()
  id: string;

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

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  company: string;

  @ApiProperty({ required: false })
  @IsUrl()
  @IsOptional()
  blog: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ required: false })
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  bio: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  twitter_username: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  public_repos: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  followers: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  following: number;

  @Exclude()
  password: string;
}
