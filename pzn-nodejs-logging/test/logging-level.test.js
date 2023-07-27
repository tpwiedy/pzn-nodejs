import winston from "winston";

test("create new logger with logging level", () => {
  const logger = winston.createLogger({
    level: "debug", //untuk menentukan batas minimum log level yang akan dikirim ke transport
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Hello Error" });
  logger.log({ level: "warn", message: "Hello Warn" });
  logger.log({ level: "info", message: "Hello Info" });
  logger.log({ level: "http", message: "Hello HTTP" });
  logger.log({ level: "verbose", message: "Hello Verbose" });
  logger.log({ level: "debug", message: "Hello Debug" });
  logger.log({ level: "silly", message: "Hello Silly" });
});

test("create new logger with shorcut function", () => {
  const logger = winston.createLogger({
    level: "debug", //untuk menentukan batas minimum log level yang akan dikirim ke transport
    transports: [new winston.transports.Console({})],
  });

  logger.error("Error Message");
  logger.warn("Warn Message");
  logger.info("Info Message");
  logger.http("Http Message");
  logger.verbose("Verbose Message");
  logger.debug("Debug Message");
  logger.silly("Silly Message");
});
