import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ReposService } from './repos.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('repos')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get(':username')
  @ApiOkResponse({ type: Array })
  async getUserRepos(@Param('username') username: string) {
    try {
      const userRepos = await this.reposService.getUserRepos(username);
      return { data: userRepos };
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get(':username/:repoName')
  @ApiOkResponse({ type: Array })
  async getRepoDetails(
    @Param('username') username: string,
    @Param('repoName') repoName: string,
  ) {
    try {
      const repoDetails = await this.reposService.getRepoDetails(
        username,
        repoName,
      );
      return { data: repoDetails };
    } catch (error) {
      return { error: error.message };
    }
  }
}
