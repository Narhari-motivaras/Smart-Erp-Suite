const mongoose = require("mongoose");
const Joi = require("joi");

customerSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 20 },
  email: { type: String, required: true, unique: true },
  company: { type: String, required: true },
  password: { type: String, required: true },
});

const customer = mongoose.model("Customers", customerSchema);

const schema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  company: Joi.string().min(3).max(255).required(),
  password: Joi.string().required(),
});

module.exports.customers = customer;
module.exports.schema = schema;
