import { ComponentFixture, TestBed } from "@angular/core/testing"

import { UserDetailsLoadingComponent } from "./user-details-loading.component"

describe("UserDetailsLoadingComponent", () => {
  let component: UserDetailsLoadingComponent
  let fixture: ComponentFixture<UserDetailsLoadingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsLoadingComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsLoadingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
