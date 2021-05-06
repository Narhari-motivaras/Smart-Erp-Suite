const express = require("express");
const Client = require("../models/client/addclientschema");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const {
    clientname,
    emailid,
    city,
    state,
    country,
    pincode,
    billingaddress,
    contactnumber,
    pannumber,
    gstin,
    type,
    openingbalance,
    creditallowed,
    creditlimit,
    creditremark,
  } = req.body;

  const createdClient = new Client({
    clientname,
    emailid,
    city,
    state,
    country,
    pincode,
    billingaddress,
    contactnumber,
    pannumber,
    gstin,
    type,
    openingbalance,
    creditallowed,
    creditlimit,
    creditremark,
  });

  try {
    await createdClient.save();
  } catch (err) {
    console.log(err);
    return next(err);
  }

  res.status(201).json("Data saved");
});

module.exports = router;
