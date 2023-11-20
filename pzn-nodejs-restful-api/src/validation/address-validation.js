import Joi from "joi";

const createAddressValidation = Joi.object({
  street: Joi.string().optional().max(255),
  city: Joi.string().optional().max(100),
  province: Joi.string().optional().max(100),
  country: Joi.string().required().max(100),
  postal_code: Joi.string().required().max(10),
});

const updateAddressValidation = Joi.object({
  id: Joi.number().min(1).positive().required(),
  street: Joi.string().optional().max(255),
  city: Joi.string().optional().max(100),
  province: Joi.string().optional().max(100),
  country: Joi.string().required().max(100),
  postal_code: Joi.string().required().max(10),
});

const getAddressValidation = Joi.number().min(1).positive().required();
export {
  createAddressValidation,
  getAddressValidation,
  updateAddressValidation,
};
