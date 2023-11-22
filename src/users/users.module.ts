import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GitHubService } from '../../utils/github-service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, GitHubService],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
