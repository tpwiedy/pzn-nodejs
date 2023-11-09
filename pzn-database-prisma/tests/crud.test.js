import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "asep",
        email: "asep.stroberi@pzn.com",
        name: "Astro",
        phone: "0812234259009",
      },
    });
    expect(customer.id).toBe("asep");
    expect(customer.email).toBe("asep.stroberi@pzn.com");
    expect(customer.name).toBe("Astro");
    expect(customer.phone).toBe("0812234259009");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Wiedy Tira Pratama",
        email: "wiedy.onyx@pzn.com",
      },
      where: {
        id: "wiedy",
      },
    });
    expect(customer.id).toBe("wiedy");
    expect(customer.email).toBe("wiedy.onyx@pzn.com");
    expect(customer.name).toBe("Wiedy Tira Pratama");
    expect(customer.phone).toBe("08123456789009");
  });

  it("should be able to findUnique customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "wiedy",
      },
    });
    expect(customer.id).toBe("wiedy");
    expect(customer.email).toBe("wiedy.onyx@pzn.com");
    expect(customer.name).toBe("Wiedy Tira Pratama");
    expect(customer.phone).toBe("08123456789009");
  });

  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "asep",
      },
    });
    expect(customer.id).toBe("asep");
    expect(customer.email).toBe("asep.stroberi@pzn.com");
    expect(customer.name).toBe("Astro");
    expect(customer.phone).toBe("0812234259009");
  });
});
