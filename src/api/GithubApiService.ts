import * as request from 'request'
import axios from 'axios'

import { User } from '../module/User'
import { Repos } from '../module/Repos'
import { Users } from '../module/Users'

const requestOptions = {
  headers: {
    'User-Agent': 'request'
  },
  json: true
}

const http = axios.create({
  baseURL: 'https://api.github.com',
  headers: { 'User-Agent': 'axios' }
})

export class GithubApiService {
  getUserInfo(userName: string, cb: (user: User) => any) {
    request.get(
      `https://api.github.com/users/${userName}`,
      requestOptions,
      (error: any, response: any, body: any) => {
        // let user: User = new User(JSON.parse(body));
        let user: User = new User(body)
        cb && cb(user)
      }
    )
  }

  async getRepos(userName: string) {
    try {
      let response = await http.get(`/users/${userName}/repos`)
      let repos: Repos[] = response.data.map((repo: any) => new Repos(repo))
      return repos
    } catch (error) {
      console.log(error)
    }
  }

  async getAllUsers() {
    try {
      let response = await http.get('/users')
      let users: Users[] = response.data.map((user: any) => new Users(user))
      return users
    } catch (error) {
      console.log(error)
    }
  }
}
