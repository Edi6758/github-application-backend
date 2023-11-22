import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { GitHubService } from 'utils/github-service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private githubService: GitHubService,
  ) {}

  private setGithubData(userDto: any, githubUserData: any) {
    userDto = {
      ...userDto,
      avatar_url: githubUserData.avatar_url,
      name: githubUserData.name,
      html_url: githubUserData.html_url,
      followers: githubUserData.followers,
      following: githubUserData.following,
      public_repos: githubUserData.public_repos,
      blog: githubUserData.blog,
      bio: githubUserData.bio,
      company: githubUserData.company,
      twitter_username: githubUserData.twitter_username,
    };
    return userDto;
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    createUserDto.password = hashedPassword;

    const githubUsername = createUserDto.username;

    if (githubUsername) {
      try {
        const githubUserData =
          await this.githubService.getGitHubUserData(githubUsername);
        createUserDto = this.setGithubData(createUserDto, githubUserData);
      } catch (error) {
        console.error('Error fetching GitHub user data:', error.message);
      }
    }

    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findByUsername(username: string) {
    const user = await this.prisma.user.findUnique({
      where: { username: username },
      include: {
        repositories: true,
        searchHistoryLog: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with username '${username}' not found`);
    }

    return user;
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        repositories: true,
        searchHistoryLog: true,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const existingUserByUsername = await this.prisma.user.findUnique({
      where: { username: updateUserDto.username },
    });

    const existingUserByEmail = await this.prisma.user.findUnique({
      where: { email: updateUserDto.email },
    });

    if (existingUserByUsername && existingUserByUsername.id !== id) {
      throw new ConflictException('Username already exists');
    }

    if (existingUserByEmail && existingUserByEmail.id !== id) {
      throw new ConflictException('Email already exists');
    }

    const githubUsername = updateUserDto.username;

    if (githubUsername) {
      try {
        const githubUserData =
          await this.githubService.getGitHubUserData(githubUsername);
        updateUserDto = this.setGithubData(updateUserDto, githubUserData);
      } catch (error) {
        console.error('Error fetching GitHub user data:', error.message);
      }
    }

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      );
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
