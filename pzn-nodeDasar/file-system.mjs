// Synchronous
// import fs from "fs";

// const buffer = fs.readFileSync("file-system.mjs");

// console.info(buffer.toString());
// fs.writeFileSync("temp.txt", "hello world");

// Asynchronous
import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs");
console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello NodeJS");
