export class Users {
  login: string
  avatar: string
  url: string

  constructor(UsersResponse: any) {
    this.login = UsersResponse.login
    this.avatar = UsersResponse.avatar_url
    this.url = UsersResponse.html_url
  }
}
