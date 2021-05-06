const mongoose = require("mongoose");

deliverySchema = new mongoose.Schema({
  challannumber: { type: String, required: true, minlength: 3, maxlength: 20 },
  customername: { type: String, required: true },
  contactnumber: { type: Number, required: true },
  address: { type: String, required: true },
  placeofsupply: { type: String, required: true },
  customergstin: { type: String, required: true },
  productname: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: Number, required: true },
  productdescription: { type: String, required: true },
  deliveryterms: { type: String, required: true },
  vehicalnumber: { type: Number, required: true },
  //date: { type: Number, required: true },
});

module.exports = mongoose.model("Delivery", deliverySchema);
