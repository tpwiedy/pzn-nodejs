function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag function", () => {
  const name = "Wiedy";
  const lastName = "Pratama";

  tagFunction`Hello ${name} ${lastName}!, How are your?`;
  tagFunction`Bye ${name} ${lastName}!, see you later?`;
});

test("tag function SQL", () => {
  const name = "Wiedy";
  const age = 27;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
