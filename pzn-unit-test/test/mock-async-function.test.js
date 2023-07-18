import { getBalance } from "../src/async.js";

test("mock async function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  expect(getBalance("Wiedy", from)).resolves.toEqual({
    name: "Wiedy",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000); //karena mockResolvedValueOnce adl Async, maka expected valuenya juga perlu dikembalikan sbg async dengan menambahkan await dan resolves
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("ERROR 💥"));

  await getBalance("Wiedy", from);
});

test("mock async function rejected matchers", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Rejected 💥");

  await expect(getBalance("Wiedy", from)).rejects.toBe("Rejected 💥");
});
