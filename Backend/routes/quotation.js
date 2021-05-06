const express = require("express");
const Quotation = require("../models/Sale/quotationschema");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const {
    quotationtype,
    quotationnumber,
    customername,
    contactnumber,
    customergstin,
    placeofsupply,
    address,
    productname,
    quantity,
    unit,
    productdescription,
    saleprice,
    tax,
    amount,
    freightcharge,
    paymentterms,
    vehicalnumber,
  } = req.body;

  const createdQuotation = new Quotation({
    quotationtype,
    quotationnumber,
    customername,
    contactnumber,
    customergstin,
    placeofsupply,
    address,
    productname,
    quantity,
    unit,
    productdescription,
    saleprice,
    tax,
    amount,
    freightcharge,
    paymentterms,
    vehicalnumber,
  });

  try {
    await createdQuotation.save();
  } catch (err) {
    console.log(err);
    return next(err);
  }

  res.status(201).json("Data saved");
});

module.exports = router;
