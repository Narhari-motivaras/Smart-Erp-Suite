const express = require("express");
const Group = require("../models/Master/addgroupschema");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { groupname, cgst, sgst, igst } = req.body;

  const createdGroup = new Group({
    groupname,
    cgst,
    sgst,
    igst,
  });

  try {
    await createdGroup.save();
  } catch (err) {
    console.log(err);
    return next(err);
  }

  res.status(201).json("Data saved");
});

module.exports = router;
