import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class GithubUserSearchService {
  /**
   * @property githubUserSub$
   * @description - emits the user name searched for
   * - johnpapa is emitted as default/first value
   */
  public githubUserSub$ = new BehaviorSubject<string>("johnpapa")
  githubUser$ = this.githubUserSub$.asObservable()

  /**
   * @description - emits the current-page pagination value
   * - Default value is `1`
   */
  public currentPageSub$ = new BehaviorSubject(1)
  currentPage$ = this.currentPageSub$.asObservable()

  updateUser(username: string): void {
    this.githubUserSub$.next(username)
    this.resetCurrentPage()
    return
  }

  /**
   * @method resetCurrentPage Emits default pagination value `1`
   */
  resetCurrentPage(): void {
    this.currentPageSub$.next(1)
    return
  }

  updateCurrentPage(page: number): void {
    this.currentPageSub$.next(page)
    return
  }
}
