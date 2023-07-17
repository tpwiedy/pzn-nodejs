test("string", () => {
  const name = "Wiedy Tira Pratama";

  expect(name).toBe("Wiedy Tira Pratama");

  /*Check by regex*/
  expect(name).toMatch(/ira/);
});
