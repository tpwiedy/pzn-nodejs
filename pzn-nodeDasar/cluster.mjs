import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if (cluster.isPrimary) {
  // Run the Worker
  console.info(`primary : ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.addListener("exit", (worker) => {
    console.info(`Worker-${worker.id} is exit`);
    cluster.fork();
  });
}

if (cluster.isWorker) {
  const server = http.createServer((req, res) => {
    res.write(`Response from process ${process.pid}`);
    res.end();
    process.exit();
  });
  server.listen(3000);
  console.info(`Start cluster worker : ${process.pid}`);
}
