import { MyException, callMe } from "../src/exception";

test("exception", () => {
  expect(() => callMe("Wiedy")).toThrow();
  expect(() => callMe("Wiedy")).toThrow(MyException);
  expect(() => callMe("Wiedy")).toThrow("Ups my exceptions happens");
});

test("exception not happens", () => {
  expect(callMe("Budi")).toBe("OK");
});
