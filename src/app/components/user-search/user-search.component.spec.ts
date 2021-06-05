import { HttpClientModule } from "@angular/common/http"
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing"
import { FormsModule } from "@angular/forms"

import { UserSearchComponent } from "./user-search.component"
import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap"
import { of } from "rxjs"
import { first } from "rxjs/operators"
import { ApiService } from "src/app/services/api.service"

describe("UserSearchComponent", () => {
  let component: UserSearchComponent
  let fixture: ComponentFixture<UserSearchComponent>
  let apiServiceStub: jasmine.SpyObj<ApiService>
  const testUsersList = [
    "johnpapa",
    "JohnPapad",
    "johnpaparrizos",
    "JohnPapadopoulos",
    "johnpapajani",
    "JohnPapachronis",
    "johnpapapa",
    "JohnPapagian",
    "JohnPapa1",
    "johnpapa97",
  ]

  beforeEach(async () => {
    apiServiceStub = jasmine.createSpyObj<ApiService>("ApiService", [
      "getUsers",
    ])
    apiServiceStub.getUsers.and.returnValue(of(testUsersList))
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, NgbTypeaheadModule],
      declarations: [UserSearchComponent],
      providers: [{ provide: ApiService, useValue: apiServiceStub }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("search operator must return list of users to type-ahead component", (done: DoneFn) => {
    component.model = "johnpapa"
    fixture.detectChanges()

    /**
     * search is Operator passed in to NgBootstrap typeahead
     * [From the sourccode of NgBootstrap ahead] OperatorFn is piped to the value changes while user enters in the input
     * `of("johnpapa").pipe(first())` is to simulate user search 'johnpapa'
     */
    of("johnpapa")
      .pipe(first(), component.search)
      .subscribe((usersList) => {
        expect(usersList).toEqual(testUsersList)
        done()
      })
  })
})
