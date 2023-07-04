import { sayHello, sum } from "pzn-nodejs-npm-library";
import { max, min } from "pzn-nodejs-npm-library/number";

console.info(sayHello("Wiedy"));

const numbers = [10, 10, 10, 10, 10];
console.info(sum(numbers));

console.info(min(10, 20));
console.info(max(10, 20));
