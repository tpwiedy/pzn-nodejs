import { PrismaClient } from "@prisma/client";

describe("Prisma Client", () => {
  it("should be able to connect", async () => {
    const prisma = new PrismaClient();
    await prisma.$connect();

    await prisma.$disconnect();
  });
});
