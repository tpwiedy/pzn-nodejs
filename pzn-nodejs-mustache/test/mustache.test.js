import Mustache, { render } from "mustache";
import fs from "fs/promises";

test("Menggunakan Mustache", () => {
  const data = Mustache.render("Hello {{name}}", { name: "Wiedy" }); // render(template, data)
  expect(data).toBe("Hello Wiedy");
});

test("Menggunakan Mustache Cache", () => {
  Mustache.parse("Hello {{name}}"); //cache -> template sudah dirender dimemori terlebih dulu sehingga proses loadingnya lebih cepat.

  const data = Mustache.render("Hello {{name}}", { name: "Wiedy" }); // render(template, data)
  expect(data).toBe("Hello Wiedy");
});

test("Tags", () => {
  const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
    // {{{}}} -> kurung kurawal 3 menandakan bahwa kode HTML tidak akan di escape atau kode html akan ditampilkan pada output
    name: "Wiedy",
    hobby: "<b>Programming</b>",
  }); // render(template, data)
  expect(data).toBe("Hello Wiedy, my hobby is <b>Programming</b>");
});

test("Nested Object", () => {
  const data = Mustache.render("Hello {{person.name}}", {
    // Menggunakan nested object
    person: {
      name: "Wiedy",
    },
  });
  expect(data).toBe("Hello Wiedy");
});

test("Mustache File", async () => {
  const helloTemplate = await fs
    .readFile("./templates/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    title: "Programmer Zaman Now",
  });

  console.info(data);
  expect(data).toContain("Programmer Zaman Now");
});

test("Mustache Sections not shows", async () => {
  const personTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(personTemplate, {});

  console.info(data);
  expect(data).not.toContain("Hello Person");
});

test("Mustache Sections shows", async () => {
  const personTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(personTemplate, {
    person: {
      name: "Wiedy",
    },
  });

  console.info(data);
  expect(data).toContain("Hello Person");
});

test("Mustache Sections Data", async () => {
  const personTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(personTemplate, {
    person: {
      name: "Wiedy",
    },
  });

  console.info(data);
  expect(data).toContain("Hello Person Wiedy!");
});

test("Mustache Inverted Sections ", async () => {
  const personTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(personTemplate, {});

  console.info(data);
  expect(data).toContain("Hello Guest");
});

test("Mustache List ", async () => {
  const hobbiesTemplate = await fs
    .readFile("./templates/hobbies.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(hobbiesTemplate, {
    hobbies: ["Swimming", "Touring", "Football"],
  });

  console.info(data);
  expect(data).toContain("Swimming");
  expect(data).toContain("Touring");
  expect(data).toContain("Football");
});

test("Mustache List Object ", async () => {
  const studentsTemplate = await fs
    .readFile("./templates/students.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(studentsTemplate, {
    students: [
      { name: "Wiedy", value: 100 },
      { name: "Asep", value: 90 },
    ],
  });

  console.info(data);
  expect(data).toContain("Wiedy");
  expect(data).toContain("100");
});

test("Functions", () => {
  const parameter = {
    name: "Wiedy",
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      };
    },
  };

  const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
  console.info(data);
  expect(data).toBe("Hello WIEDY");
});

test("Comment", async () => {
  const helloTemplate = await fs
    .readFile("./templates/comment.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    title: "Wiedy",
  });

  console.info(data);
  expect(data).toContain("Wiedy");
  expect(data).not.toContain("Komentar");
});

test("Partials", async () => {
  const headerTemplate = await fs
    .readFile("./templates/header.mustache")
    .then((data) => data.toString());

  const footerTemplate = await fs
    .readFile("./templates/footer.mustache")
    .then((data) => data.toString());

  const contentTemplate = await fs
    .readFile("./templates/content.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(
    contentTemplate,
    {
      title: "Wiedy",
      content: "Belajar Partials",
    },
    {
      header: headerTemplate,
      footer: footerTemplate,
    }
  );

  console.info(data);
  expect(data).toContain("Wiedy");
  expect(data).toContain("Belajar Partials");
});
