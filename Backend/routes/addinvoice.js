const express = require("express");
const Invoice = require("../models/Sale/addinvoiceschema");

const router = express.Router();

router.get("/", async (req, res, next) => {
  let product;
  try {
    product = await Invoice.find();
  } catch (err) {
    console.log(err);
    return next(err);
  }
  res.status(201).json({ product });
});

router.post("/", async (req, res, next) => {
  const {
    invoicetype,
    invoiceno,
    date,
    customername,
    contactno,
    customergstin,
    poc,
    address,
    productname,
    quantity,
    unit,
    productdescription,
    saleprice,
    tax,
    amount,
    freightcharge,
    total,
    paymentterms,
    vehicalno,
  } = req.body;

  const createdInvoice = new Invoice({
    invoicetype,
    invoiceno,
    date,
    customername,
    contactno,
    customergstin,
    poc,
    address,
    productname,
    quantity,
    unit,
    productdescription,
    saleprice,
    tax,
    amount,
    freightcharge,
    total,
    paymentterms,
    vehicalno,
  });

  try {
    await createdInvoice.save();
  } catch (err) {
    console.log(err);
    return next(err);
  }

  res.status(201).json("Data saved");
});

module.exports = router;
