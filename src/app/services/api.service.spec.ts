import { HttpClient } from "@angular/common/http"
import { of } from "rxjs"
import { UserSearchResults } from "../interfaces/searchResults.interface"

import { ApiService } from "./api.service"

describe("UserService", () => {
  let httpClientSpy: { get: jasmine.Spy }
  let apiService: ApiService

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj<HttpClient>("HttpClient", ["get"])
    apiService = new ApiService(httpClientSpy as any)
  })

  it("should be created", () => {
    expect(apiService).toBeTruthy()
  })

  it("API results on user search should be formatted to return list github usernames (HttpClient called once)", (done: DoneFn) => {
    const apiResultSample: UserSearchResults = {
      total_count: 2,
      incomplete_results: false,
      items: [
        {
          id: 23,
          login: "johnpapa",
        },
        {
          id: 28,
          login: "johnpapa24",
        },
      ],
    }

    const expectedResultSample = ["johnpapa", "johnpapa24"]

    httpClientSpy.get.and.returnValue(of(apiResultSample))

    apiService.getUsers("johnpapa").subscribe((results) => {
      expect(results).toEqual(expectedResultSample, "expected output")
      done()
    }, done.fail)

    expect(httpClientSpy.get.calls.count()).toBe(1, "one call")
  })
})
