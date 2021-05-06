const express = require("express");
const Brand = require("../models/Master/addbrandschema");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { brand } = req.body;

  const createdBrand = new Brand({
    brand,
  });

  try {
    await createdBrand.save();
  } catch (err) {
    console.log(err);
    return next(err);
  }

  res.status(201).json("Data saved");
});

module.exports = router;
