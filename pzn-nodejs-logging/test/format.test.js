import winston, { info } from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    // DEFAULT Format=> format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.logstash(),
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

test("logging with custom format printf", () => {
  const logger = winston.createLogger({
    format: winston.format.printf((info) => {
      return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
    }),
    level: "debug", //untuk menentukan batas minimum log level yang akan dikirim ke transport
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello Format Printf");
  logger.warn("Hello Format Printf");
  logger.error("Hello Format Printf");
});
