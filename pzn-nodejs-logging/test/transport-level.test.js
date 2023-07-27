import winston from "winston";

test("logging file transport level", () => {
  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.simple()
    ),
    level: "info", //untuk menentukan batas minimum log level yang akan dikirim ke transport
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "application-error.log",
      }),
    ],
  });

  logger.info("Hello Format Info");
  logger.warn("Hello Format Warning");
  logger.error("Hello Format Error");
});
