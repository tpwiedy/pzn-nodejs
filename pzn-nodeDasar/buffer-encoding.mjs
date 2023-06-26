const buffer = Buffer.from("Wiedy tira Pratama", "utf-8");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const buffer2 = Buffer.from("V2llZHkgdGlyYSBQcmF0YW1h", "base64");
console.info(buffer2.toString("utf-8"));
