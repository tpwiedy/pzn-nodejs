import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be can do sorting", async () => {
    const customer = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: "asc",
        },
        {
          email: "desc",
        },
      ],
    });
    console.info(customer);
  });
});
