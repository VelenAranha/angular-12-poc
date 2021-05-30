import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

import { map } from "rxjs/operators"
import { Observable } from "rxjs"

import { Repo } from "../interfaces/repo.interface"
import { UserSearchResults } from "../interfaces/searchResults.interface"
import { GithubUser } from "../interfaces/user.interface"

@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiUrl = "https://api.github.com"

  constructor(private http: HttpClient) {}

  getUsers(searchQuery: string): Observable<string[]> {
    return this.http
      .get<UserSearchResults>(
        `${this.apiUrl}/search/users?q=${searchQuery}&per_page=10`
      )
      .pipe(map(({ items }) => items.map((item) => item.login)))
  }

  getUserDetails(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.apiUrl}/users/${username}`)
  }

  getUserRepos(username: string, page = 1): Observable<Repo[]> {
    return this.http.get<Array<Repo>>(
      `${this.apiUrl}/users/${username}/repos?per_page=10&page=${page}`
    )
  }

  getRepoTopics(languages_url: string): Observable<string[]> {
    return this.http.get(languages_url).pipe(
      map((topics) => {
        return Object.keys(topics)
      })
    )
  }
}
