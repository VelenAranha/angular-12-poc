import { Component, Input } from "@angular/core"
import { Repo } from "src/app/interfaces/repo.interface"

@Component({
  selector: "app-user-repos",
  templateUrl: "./user-repos.component.html",
  styleUrls: ["./user-repos.component.scss"],
})
export class UserReposComponent {
  @Input()
  isLoading = true

  @Input()
  repos: Repo[] = []

  counter(i: number): number[] {
    return new Array(i) as number[]
  }
}
