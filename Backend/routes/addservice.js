const express = require("express");
const Service = require("../models/Master/addserviceschema");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const {
    servicename,
    group,
    servicecode,
    servicecharge,
    minservicecharge,
    cgst,
    sgst,
    igst,
  } = req.body;

  const createdService = new Service({
    servicename,
    group,
    servicecode,
    servicecharge,
    minservicecharge,
    cgst,
    sgst,
    igst,
  });

  try {
    await createdService.save();
  } catch (err) {
    console.log(err);
    return next(err);
  }

  res.status(201).json("Data saved");
});

module.exports = router;
