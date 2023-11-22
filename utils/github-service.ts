/* eslint-disable prettier/prettier */
import axios, { AxiosResponse } from 'axios';

export class GitHubService {
  async getGitHubUserData(username: string) {
    try {
      const response: AxiosResponse = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Failed to fetch GitHub user data');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('GitHub API error:', error.response.data);
          throw new Error('Failed to fetch GitHub user data');
        } else if (error.request) {
          console.error('GitHub API request:', error.request);
          throw new Error('Failed to connect to GitHub API');
        } else {
          console.error('GitHub API setup:', error.message);
          throw new Error('Error setting up GitHub API request');
        }
      } else {
        console.error('Non-Axios error:', error.message);
        throw new Error('Failed to fetch GitHub user data');
      }
    }
  }

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
}
