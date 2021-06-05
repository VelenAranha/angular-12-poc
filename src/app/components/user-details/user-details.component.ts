import { ChangeDetectionStrategy, Component, Input } from "@angular/core"
import { GithubUser } from "src/app/interfaces/user.interface"

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  @Input()
  isLoading = false

  @Input()
  userDetails: GithubUser | null = null
}
