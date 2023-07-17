test("array", () => {
  const names = ["Wiedy", "Tira", "Pratama"];
  expect(names).toEqual(["Wiedy", "Tira", "Pratama"]);
  expect(names).toContain("Wiedy");
});

test("array object", () => {
  const persons = [
    {
      name: "Wiedy",
    },
    {
      name: "Asep",
    },
  ];
  expect(persons).toContainEqual({
    name: "Wiedy",
  });
});
