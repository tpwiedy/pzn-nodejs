import { sayHelloAsync } from "../src/async.js";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("Wiedy")).resolves.toBe("Hello Wiedy");
});
test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Wiedy")).resolves.toBe("Hello Wiedy");
});
test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Wiedy")).resolves.toBe("Hello Wiedy");
});

// Concurrent will execute all the code at the same time it's because that is async code
