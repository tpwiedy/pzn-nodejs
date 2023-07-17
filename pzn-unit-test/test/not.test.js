test("string.not", () => {
  const name = "Wiedy Tira Pratama";

  expect(name).not.toBe("Asep");
  expect(name).not.toEqual("Asep");
  expect(name).not.toMatch(/asep/);
});

test("numbers.not", () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(10);
});
