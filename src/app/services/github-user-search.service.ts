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

  updateUser(username: string): void {
    this.githubUserSub$.next(username)
    this.resetCurrentPage()
    return
  }

  resetCurrentPage(): void {
    this.currentPageSub$.next(1)
    return
  }

  updateCurrentPage(page: number): void {
    this.currentPageSub$.next(page)
    return
  }
}
