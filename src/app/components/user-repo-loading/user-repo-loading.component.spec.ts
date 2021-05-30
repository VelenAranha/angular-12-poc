import { ComponentFixture, TestBed } from "@angular/core/testing"

import { UserRepoLoadingComponent } from "./user-repo-loading.component"

describe("UserRepoLoadingComponent", () => {
  let component: UserRepoLoadingComponent
  let fixture: ComponentFixture<UserRepoLoadingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRepoLoadingComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepoLoadingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
