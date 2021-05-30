import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class GithubUserSearchService {
  constructor() {}

  public githubUserSub$ = new BehaviorSubject<string>("johnpapa")
  githubUser$ = this.githubUserSub$.asObservable()

  public currentPageSub$ = new BehaviorSubject(1)
  currentPage$ = this.currentPageSub$.asObservable()

  updateUser(username: string) {
    this.githubUserSub$.next(username)
    this.resetCurrentPage()
  }

  resetCurrentPage() {
    this.currentPageSub$.next(1)
  }

  updateCurrentPage(page: number) {
    this.currentPageSub$.next(page)
  }
}
