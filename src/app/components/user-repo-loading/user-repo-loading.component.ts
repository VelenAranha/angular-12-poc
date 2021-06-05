import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  selector: "app-user-repo-loading",
  templateUrl: "./user-repo-loading.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRepoLoadingComponent {}
