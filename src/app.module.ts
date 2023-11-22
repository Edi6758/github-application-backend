import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ReposModule } from './repos/repos.module';
import { SearchHistoryLogsModule } from './search-history-logs/search-history-logs.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, ReposModule, SearchHistoryLogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
