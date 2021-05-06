const mongoose = require("mongoose");

quotationSchema = new mongoose.Schema({
  quotationtype: { type: String, required: true, minlength: 3, maxlength: 20 },
  quotationnumber: { type: String, required: true },
  customername: { type: String, required: true },
  contactnumber: { type: Number, required: true },
  customergstin: { type: String, required: true },
  placeofsupply: { type: String, required: true },
  address: { type: String, required: true },
  productname: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: Number, required: true },
  productdescription: { type: String, required: true },
  saleprice: { type: Number, required: true },
  tax: { type: Number, required: true },
  amount: { type: Number, required: true },
  freightcharge: { type: Number, required: true },
  paymentterms: { type: Number, required: true },
  vehicalnumber: { type: Number, required: true },
  //date: { type: Number, required: true },
});

module.exports = mongoose.model("Quotation", quotationSchema);
