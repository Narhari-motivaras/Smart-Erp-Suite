const express = require("express");
const Delivery = require("../models/Sale/deliverychallanschema");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const {
    challannumber,
    customername,
    contactnumber,
    address,
    placeofsupply,
    customergstin,
    productname,
    quantity,
    unit,
    productdescription,
    deliveryterms,
    vehicalnumber,
    // date,
  } = req.body;

  const createdDelivery = new Delivery({
    challannumber,
    customername,
    contactnumber,
    address,
    placeofsupply,
    customergstin,
    productname,
    quantity,
    unit,
    productdescription,
    deliveryterms,
    vehicalnumber,
    // date,
  });

  try {
    await createdDelivery.save();
  } catch (err) {
    console.log(err);
    return next(err);
  }

  res.status(201).json("Data saved");
});

module.exports = router;
