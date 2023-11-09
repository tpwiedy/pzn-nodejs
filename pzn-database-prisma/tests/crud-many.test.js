import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be create many record", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "asep3",
          name: "Asep",
          email: "asep3@pzn.com",
          phone: "23457890",
        },
        {
          id: "liwet",
          name: "Liwet",
          email: "liwet@pzn.com",
          phone: "89809807909",
        },
      ],
    });
    expect(count).toBe(2);
  });

  it("should be update many record", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "liwetlagi@pzn.com",
      },
      where: {
        name: "Liwet",
      },
    });
    expect(count).toBe(1);
  });

  it("should be delete many record", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Stroberi",
      },
    });
    expect(count).toBe(3);
  });

  it("should be read all data record ", async () => {
    const customers = await prismaClient.customer.findMany({});
    expect(customers.length).toBe(6);
  });
});
