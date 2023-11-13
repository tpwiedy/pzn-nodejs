import Joi from "joi";

describe("Joi", () => {
  it("should can validate array", () => {
    const hobbieSchema = Joi.array()
      .items(Joi.string().required().min(3).max(100))
      .min(1)
      .unique();

    const hobbies = ["A", "Touring", "Touring"];

    const result = hobbieSchema.validate(hobbies, {
      abortEarly: false,
    });

    console.info(result);
  });

  it("should can validate array of object", () => {
    const addressSchema = Joi.array()
      .min(1)
      .items(
        Joi.object({
          street: Joi.string().required().max(200),
          city: Joi.string().required().max(100),
          country: Joi.string().required().max(100),
          zipCode: Joi.string().required().max(10),
        })
      );

    const addresses = [
      {
        street: "Jalan sama siapa",
      },
    ];

    const result = addressSchema.validate(addresses, {
      abortEarly: false,
    });

    console.info(result);
  });
});
