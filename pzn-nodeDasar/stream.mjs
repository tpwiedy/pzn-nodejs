import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Wiedy ");
writer.write(" Tira ");
writer.write("Pratama");
writer.close();

const reader = fs.createReadStream("target.log");
reader.on("data", function (data) {
  console.info(data.toString());
  reader.close();
});
