import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class ReposService {
  async getUserRepos(username: string) {
    try {
      const response: AxiosResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Failed to fetch user repositories');
      }
    } catch (error) {
      console.error('Error fetching user repositories:', error.message);
      throw new Error('Failed to fetch user repositories');
    }
  }

  async getRepoDetails(username: string, repoName: string) {
    try {
      const response: AxiosResponse = await axios.get(
        `https://api.github.com/repos/${username}/${repoName}`,
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Failed to fetch repository details');
      }
    } catch (error) {
      console.error('Error fetching repository details:', error.message);
      throw new Error('Failed to fetch repository details');
    }
  }
}
