import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should execute sequencetial transaction", async () => {
    const [asep, stroberi] = await prismaClient.$transaction(
      [
        prismaClient.customer.create({
          data: {
            id: "asep",
            name: "Asep",
            email: "asep@pzn.com",
            phone: "123457890987",
          },
        }),
        prismaClient.customer.create({
          data: {
            id: "stroberi",
            name: "Stroberi",
            email: "astro@pzn.com",
            phone: "123457890000",
          },
        }),
      ],
      { timeout: 5 }
    );

    expect(asep.name).toBe("Asep");
    expect(stroberi.name).toBe("Stroberi");
  });

  it("should execute interactive transaction", async () => {
    const [asep, stroberi] = await prismaClient.$transaction(
      async (prisma) => {
        const asep = await prisma.customer.create({
          data: {
            id: "asep2",
            name: "Asep",
            email: "asep2@pzn.com",
            phone: "12345789098700",
          },
        });

        const stroberi = await prisma.customer.create({
          data: {
            id: "stroberi2",
            name: "Stroberi",
            email: "astro2@pzn.com",
            phone: "12345789000070",
          },
        });

        return [asep, stroberi];
      },
      { timeout: 5 }
    );

    expect(asep.name).toBe("Asep");
    expect(stroberi.name).toBe("Stroberi");
  });
});
