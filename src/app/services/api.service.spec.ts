import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"

import { ApiService } from "./api.service"

describe("UserService", () => {
  let service: ApiService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })

    service = TestBed.inject(ApiService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })
})
