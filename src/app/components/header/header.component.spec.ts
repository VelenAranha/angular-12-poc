import { NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"

import { HeaderComponent } from "./header.component"

describe("HeaderComponent", () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("title must be 'Github search'", () => {
    const appHeaderEl: HTMLElement = fixture.nativeElement as HTMLElement
    const titleEl = appHeaderEl.getElementsByClassName("navbar-brand")[0]
    expect(titleEl.textContent).toEqual("Github search")
  })

  it("'user search' input field should be available in header", () => {
    const appHeaderEl: HTMLElement = fixture.nativeElement as HTMLElement
    expect(appHeaderEl.querySelector("app-user-search")).not.toBe(null)
  })
})
