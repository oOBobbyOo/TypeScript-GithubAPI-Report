import { GithubApiService } from './api/GithubApiService'

let githubApi: GithubApiService = new GithubApiService()

githubApi.getAllUsers().then(users => {
  console.log(users)
})

if (process.argv.length < 3) {
  console.log('必须传入用户名')
} else {
  githubApi.getUserInfo(process.argv[2], user => {
    console.log(user)
  })

  githubApi.getRepos(process.argv[2]).then(repo => {
    console.log(repo)
  })
}
