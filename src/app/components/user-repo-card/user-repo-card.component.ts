import { Component, Input } from "@angular/core"
import { Observable, of } from "rxjs"
import { Repo } from "src/app/interfaces/repo.interface"
import { ApiService } from "src/app/services/api.service"

@Component({
  selector: "app-user-repo-card",
  templateUrl: "./user-repo-card.component.html",
})
export class UserRepoCardComponent {
  topics$: Observable<string[]> = of([])
  _repo: Repo | null = null

  get repo(): Repo | null {
    return this._repo
  }

  @Input()
  set repo(val: Repo | null) {
    this._repo = val
    if (this._repo !== null) {
      this.topics$ = this.apiService.getRepoTopics(
        this.repo?.languages_url as string
      )
    }
  }

  constructor(private apiService: ApiService) {}
}
