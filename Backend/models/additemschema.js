const mongoose = require("mongoose");

productSchema = new mongoose.Schema({
  productname: { type: String, required: true, minlength: 3, maxlength: 20 },
  supplier: { type: String, required: true },
  productgroup: { type: String, required: true },
  brand: { type: String, required: true },
  productdescription: { type: String, required: true },
  weights: { type: String, required: true },
  tags: { type: String },
  initialstock: { type: Number, required: true },
  initialstocklocation: { type: String, required: true },
  purchaseprice: { type: Number, required: true },
  saleprice: { type: Number, required: true },
  wholesaleprice: { type: Number, required: true },
  retailprice: { type: Number, required: true },
});

module.exports = mongoose.model("Products", productSchema);


