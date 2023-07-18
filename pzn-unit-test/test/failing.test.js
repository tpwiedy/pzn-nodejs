import { sayHello } from "../src/sayHello";

test("sayHello success", () => {
  expect(sayHello("Wiedy")).toBe("Hello Wiedy");
});

test.failing("sayHello error", () => {
  sayHello(null);
});

test("sayHello error matchers", () => {
  expect(() => sayHello(null)).toThrow();
});
