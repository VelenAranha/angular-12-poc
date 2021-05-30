import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class GithubUserSearchService {
  public githubUserSub$ = new BehaviorSubject<string>("johnpapa")
  githubUser$ = this.githubUserSub$.asObservable()

  public currentPageSub$ = new BehaviorSubject(1)
  currentPage$ = this.currentPageSub$.asObservable()

  updateUser(username: string): undefined {
    this.githubUserSub$.next(username)
    this.resetCurrentPage()
    return
  }

  resetCurrentPage(): undefined {
    this.currentPageSub$.next(1)
    return
  }

  updateCurrentPage(page: number): undefined {
    this.currentPageSub$.next(page)
    return
  }
}
