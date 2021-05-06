const express = require("express");
const bcrypt = require("bcrypt");
const { customers, schema } = require("../models/signupschema");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;
  const User = await customers.findOne({
    email: email,
  });
  if (User && (await bcrypt.compare(password, User.password))) {
    return res.json({ status: "ok" });
  }

  return res.json({ status: "error", error: "Invalid User/Password" });
});

module.exports = router;
