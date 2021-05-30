import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"

import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap"
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader"

import { AppComponent } from "./app.component"
import { UserSearchComponent } from "./components/user-search/user-search.component"
import { HeaderComponent } from "./components/header/header.component"
import { UserDetailsComponent } from "./components/user-details/user-details.component"
import { UserReposComponent } from "./components/user-repos/user-repos.component"
import { UserRepoCardComponent } from "./components/user-repo-card/user-repo-card.component"
import { UpperMaxNumPipe } from "./pipes/upper-max-num.pipe"
import { UserRepoLoadingComponent } from "./components/user-repo-loading/user-repo-loading.component"
import { UserDetailsLoadingComponent } from "./components/user-details-loading/user-details-loading.component"

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    HeaderComponent,
    UserDetailsComponent,
    UserReposComponent,
    UserRepoCardComponent,
    UpperMaxNumPipe,
    UserRepoLoadingComponent,
    UserDetailsLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgxSkeletonLoaderModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
