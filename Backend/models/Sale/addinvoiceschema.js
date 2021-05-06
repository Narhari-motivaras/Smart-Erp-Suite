const mongoose = require("mongoose");

invoiceSchema = new mongoose.Schema({
  invoicetype: { type: String, required: true, minlength: 3, maxlength: 20 },
  invoiceno: { type: Number, required: true },
  date:{type:String ,required:false},
  customername: { type: String, required: true },
  contactno: { type: Number, required: true },
  customergstin: { type: String, required: true },
  poc: { type: String, required: true },
  address: { type: String, required: true },
  productname: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  productdescription: { type: String, required: true },
  saleprice: { type: Number, required: true },
  tax: { type: Number, required: true },
  amount: { type: Number, required: true },
  freightcharge: { type: Number, required: true },
  total:{type:Number,required:true},
  paymentterms: { type: String, required: true },
  vehicalno: { type: String, required: true },
  //  date: { type:, required: true },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
