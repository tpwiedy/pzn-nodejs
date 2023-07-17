test("test toBe", () => {
  const name = "Wiedy";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Wiedy");
});

test("test toEqual", () => {
  let person = { id: "wiedy" };
  Object.assign(person, { name: "Wiedy" });

  expect(person).toEqual({ id: "wiedy", name: "Wiedy" });
});
