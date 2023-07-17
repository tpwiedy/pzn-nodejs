import { sayHelloAsync } from "../src/async.js";

test("test async function", async () => {
  const result = await sayHelloAsync("Wiedy");
  expect(result).toBe("Hello Wiedy");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Wiedy")).resolves.toBe("Hello Wiedy");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
