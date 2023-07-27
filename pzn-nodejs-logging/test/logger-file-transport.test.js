import winston from "winston";

test("logging with console & file transport", () => {
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
    ],
  });

  logger.info("Hello Format Printf");
  logger.warn("Hello Format Printf");
  logger.error("Hello Format Printf");
});
