import { Component } from "@angular/core"
import { ApiService } from "./services/api.service"

import { GithubUserSearchService } from "./services/github-user-search.service"
import { switchMap, tap, throttleTime } from "rxjs/operators"
import { asyncScheduler, combineLatest, Observable } from "rxjs"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  loadingUserDetails = true
  loadingUserRepos = true

  userDetails$ = this.githubUserSearchService.githubUser$.pipe(
    tap(() => (this.loadingUserDetails = true)),
    switchMap((username) =>
      this.apiService
        .getUserDetails(username)
        .pipe(tap(() => (this.loadingUserDetails = false)))
    )
  )

  userRepos$ = combineLatest([
    this.githubUserSearchService.githubUser$,
    this.githubUserSearchService.currentPage$,
  ]).pipe(
    throttleTime(500, asyncScheduler, { leading: false, trailing: true }),
    tap(() => (this.loadingUserRepos = true)),
    switchMap(([username, page]) =>
      this.apiService
        .getUserRepos(username, page)
        .pipe(tap(() => (this.loadingUserRepos = false)))
    )
  )

  constructor(
    private apiService: ApiService,
    private githubUserSearchService: GithubUserSearchService
  ) {}

  get currentPage$(): Observable<number> {
    return this.githubUserSearchService.currentPage$
  }

  updatePage(page: number): undefined {
    this.githubUserSearchService.updateCurrentPage(page)
    return
  }
}
