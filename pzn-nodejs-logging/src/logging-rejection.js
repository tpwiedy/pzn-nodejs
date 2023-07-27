import winston from "winston";

const logger = winston.createLogger({
  level: "info", //untuk menentukan batas minimum log level yang akan dikirim ke transport
  // handleExceptions: true,
  // handleRejections: true,
  // format: winston.format.simple(),
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "rejection.log",
    }),
  ],
});

async function callAsync() {
  return Promise.reject("Ups");
}

callAsync();
