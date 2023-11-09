import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can insert and include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "wiedy",
        title: "Insert Comment",
        description: "Description Comment",
      },
      include: {
        customer: true,
      },
    });
    console.info(comment);
  });

  it("should can insert and many relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "yunyi",
        name: "yunyi",
        email: "yunyi@pzn.com",
        phone: "9809809809",
        comment: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "Description 1",
              },
              {
                title: "Comment 2",
                description: "Description 2",
              },
            ],
          },
        },
      },
      include: {
        comment: true,
      },
    });

    console.info(customer);
  });

  it("should can find many with filter relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        comment: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
      },
      include: {
        comment: true,
      },
    });
    console.info(JSON.stringify(customer));
  });
});
