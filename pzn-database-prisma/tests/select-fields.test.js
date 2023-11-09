import { prismaClient } from "../src/prisma-client";

describe("Prima Client", () => {
  it("should can create and select fields", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "rully",
        email: "rully@pzn.com",
        phone: "32423123",
        name: "Rully Astro",
      },
      select: {
        id: true,
        name: true,
      },
    });
    expect(customer.id).toBe("rully");
    expect(customer.name).toBe("Rully Astro");
    expect(customer.phone).toBeUndefined();
    expect(customer.email).toBeUndefined();
  });

  it("should can select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    console.info(customers);

    for (let customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
