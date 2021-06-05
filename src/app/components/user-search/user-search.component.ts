import { Component } from "@angular/core"
import { Observable, of, OperatorFunction } from "rxjs"
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from "rxjs/operators"
import { GithubUserSearchService } from "src/app/services/github-user-search.service"
import { ApiService } from "src/app/services/api.service"

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.component.html",
})
export class UserSearchComponent {
  model = ""

  searching = false
  searchFailed = false

  constructor(
    private apiService: ApiService,
    private githubUserSearch: GithubUserSearchService
  ) {}

  update(username: string): void {
    this.githubUserSearch.updateUser(username)
    return
  }

  /**
   * @method search is operator function that recieves and returns an Observable
   * @param text$ is the text to be searched in API
   * @returns List of github user matched from API
   */
  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      tap(() => {
        this.searchFailed = false
        this.searching = true
      }),
      switchMap((term) => {
        if (term.length < 3) {
          return of([])
        } else {
          return this.apiService.getUsers(term).pipe(
            tap(() => {
              this.searchFailed = false
            }),
            catchError(() => {
              this.searchFailed = true
              return of([])
            })
          )
        }
      }),
      tap(() => (this.searching = false))
    )
}
