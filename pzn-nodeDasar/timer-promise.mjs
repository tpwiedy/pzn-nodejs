import timers from "timers/promises";

// console.info(new Date());
// const wait = await timers.setTimeout(5000, "Wait");
// console.info(new Date());
// console.info(wait);

for await (const startTime of timers.setInterval(1000, "ignored")) {
  console.info(`Start time at ${new Date()}`);
}
