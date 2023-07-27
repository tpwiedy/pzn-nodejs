import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

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
      new DailyRotateFile({
        filename: "app-%DATE%.log",
        zippedArchive: true,
        maxSize: "100m",
        maxFiles: "14d",
      }),
    ],
  });

  for (let i = 0; i < 100000; i++) {
    logger.info(`Hello World ${i}`);
  }
});
