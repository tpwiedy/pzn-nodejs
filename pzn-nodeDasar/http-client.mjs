import https from "https";

const endpoint = "https://eo2adcx50fw0n6.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data: ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  fristName: "Wiedy",
  lastName: "Pratama",
});

request.write(body);
request.end();
