import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new transport", () => {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }
    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
      );
    }
  }

  const logger = winston.createLogger({
    level: "info",
    transports: [new MyTransport({})],
  });

  logger.info("Hellow New Transport");
});
