import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "wiedy",
        customer_id: "wiedy",
        balance: 10000000,
      },
      include: {
        customer: true,
      },
    });
    console.info(wallet);
  });

  it("should can create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "asep5",
        name: "Asep 5",
        email: "asep5@pzn.com",
        phone: "234235234",
        wallet: {
          create: {
            id: "asep5",
            balance: 500000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });

  it("should can find one to one with relation ", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "wiedy",
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });

  it("should can find one to one with relation filter ", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });
});
