import net from "net";

const connection = net.createConnection({ port: 3000, host: "localhost" });

connection.addListener("data", (data) => {
  console.info(`Receive data from server : ${data.toString()}`);
});

setInterval(() => {
  connection.write(`${process.argv[2]}\r\n`);
}, 2000);
