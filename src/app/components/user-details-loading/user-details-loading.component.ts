import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  selector: "app-user-details-loading",
  templateUrl: "./user-details-loading.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsLoadingComponent {}
