const express = require("express");
const bcrypt = require("bcrypt");
const { customers, schema } = require("../models/signupschema");
const { ValidationError } = require("joi");

const router = express.Router();

router.post("/", async (req, res, next) => {
    const {name,company,email,password} = req.body;
    const { error, value } = schema.validate({
    name,
    company,
    email,
    password,
  });
  if (error) return res.json({ status: "error", error: error.message});
  const User = await customers.findOne({ email: email });
  if (User)
     return res.json({ status: "error", error: "User Already Regsitered" });

  const customer = new customers({
    name,
    company,
    email,
    password: await bcrypt.hash(password, 10),
  });

   try {
     await customer.save();
   } catch (err) {
     console.log(err);
     return next(err);
   }

  res.json({ status: "ok" });
});

module.exports = router;

