import Joi from "joi";

describe("Joi", () => {
  it("should can create custome validation", () => {
    const registerSchema = Joi.object({
      username: Joi.string().required().min(3).max(100).email(),
      password: Joi.string()
        .required()
        .min(6)
        .max(100)
        .custom((value, helpers) => {
          if (value.startsWith("wiedy")) {
            return helpers.error("password.wrong");
          }
          return value;
        })
        .messages({
          "password.wrong": "password can not start with 'wiedy'",
        }),
      confirmPassword: Joi.string().required().min(3).max(100),
    })
      .custom((value, helpers) => {
        if (value.password !== value.confirmPassword) {
          return helpers.error("register.password.different");
        }
        return value;
      })
      .messages({
        "register.password.different":
          "password and confirmPassword is different",
      });

    const request = {
      username: "wiedy@pzn.com",
      password: "123456",
      confirmPassword: "123456",
    };
    const result = registerSchema.validate(request, {
      abortEarly: false,
    });

    console.info(result);
  });
});
