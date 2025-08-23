import Joi from '@hapi/joi';

export const filterSchema = Joi.object({
  category: Joi.string().optional(),     // optional string
  minPrice: Joi.number().optional(),     // optional number
  maxPrice: Joi.number().optional()      // optional number
});
