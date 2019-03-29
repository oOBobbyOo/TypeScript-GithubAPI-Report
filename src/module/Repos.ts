export class Repos {
  name: string
  description: string
  url: string
  size: number
  forks_count: number

  constructor(reposResponse: any) {
    this.name = reposResponse.name
    this.description = reposResponse.description
    this.url = reposResponse.html_url
    this.size = reposResponse.size
    this.forks_count = reposResponse.forks_count
  }
}
