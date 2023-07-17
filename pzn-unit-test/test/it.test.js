import { sumAll } from "../src/sum.js";

describe("When  call sumAll()", () => {
  it("should get 30 with parameter", () => {
    expect(sumAll([10, 10, 10])).toBe(30);
  });

  it("should get 50 with parameter", () => {
    expect(sumAll([10, 10, 10, 10, 10])).toBe(50);
  });
});
