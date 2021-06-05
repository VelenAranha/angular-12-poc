import { UpperMaxNumPipe } from "./upper-max-num.pipe"

describe("UpperMaxNumPipe", () => {
  let pipe: UpperMaxNumPipe

  beforeAll(() => {
    pipe = new UpperMaxNumPipe()
  })

  it("create an instance", () => {
    expect(pipe).toBeTruthy()
  })

  it("transforms any value over max value to max value; default max value is 100", () => {
    expect(pipe.transform(107)).toBe(100, "max value is 100(default)")

    // different max value
    expect(pipe.transform(507, 500)).toBe(500, "max value changed to 500")
  })

  it("DOES NOT transform any value below max value; default max value is 100", () => {
    expect(pipe.transform(90)).toBe(90)
    // different max value
    expect(pipe.transform(507, 507)).toBe(507, "max value changed to 507")
  })
})
