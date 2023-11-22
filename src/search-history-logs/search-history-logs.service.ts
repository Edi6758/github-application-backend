import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Importe seu serviço Prisma aqui
import { SearchHistoryLog } from '.prisma/client'; // Importe seu modelo Prisma aqui

@Injectable()
export class SearchHistoryLogsService {
  constructor(private prisma: PrismaService) {}

  async createSearchHistoryLog(data: {
    authorId: string;
    username: string;
    status: string;
    foundRepos: number;
  }): Promise<SearchHistoryLog> {
    return this.prisma.searchHistoryLog.create({ data });
  }

  async getAllSearchHistoryLogs(): Promise<SearchHistoryLog[]> {
    return this.prisma.searchHistoryLog.findMany();
  }

  async getSearchHistoryLogById(id: string): Promise<SearchHistoryLog | null> {
    return this.prisma.searchHistoryLog.findUnique({
      where: { id },
    });
  }

  async updateSearchHistoryLog(
    id: string,
    data: {
      authorId?: string;
      username?: string;
      status?: string;
      foundRepos?: number;
    },
  ): Promise<SearchHistoryLog> {
    return this.prisma.searchHistoryLog.update({
      where: { id },
      data,
    });
  }

  async deleteSearchHistoryLog(id: string): Promise<SearchHistoryLog> {
    return this.prisma.searchHistoryLog.delete({
      where: { id },
    });
  }
}
