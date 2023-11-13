import Joi from "joi";

describe("Joi", () => {
  it("should can create schema", () => {
    const schema = Joi.string().min(3).max(100).required();

    const result = schema.validate("wiedy");

    if (result.error) {
      console.info(result.error);
    }
  });

  it("should can validate basic data type", () => {
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().required().min(1000).max(10000000);

    const resultUsername = usernameSchema.validate("wiedy@pzn.com");
    console.info(resultUsername);

    const resultIsAdmin = isAdminSchema.validate("true");
    console.info(resultIsAdmin);

    const resultPrice = priceSchema.validate(2000000);
    console.info(resultPrice);
  });
});
