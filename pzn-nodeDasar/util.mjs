import util from "util";

const firstName = "Wiedy";
const lastName = "Pratama";
console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Wiedy",
  lastName: "Pratama",
};

console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("Person: %j", person));
