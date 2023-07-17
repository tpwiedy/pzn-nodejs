import { sum } from "../src/sum.js";

//bisa dilakukan secara async
beforeAll(async () => {
  console.info("Before All");
});

afterAll(async () => {
  console.info("After All");
});

beforeEach(() => {
  console.info("Before Each");
});

afterEach(() => {
  console.info("After Each");
});

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("first test");
});
test("second test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("second test");
});
