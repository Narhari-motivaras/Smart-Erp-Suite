const mongoose = require("mongoose");

clientSchema = new mongoose.Schema({
  clientname: { type: String, required: true, minlength: 3, maxlength: 20 },
  emailid: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
  billingaddress: { type: String, required: true },
  contactnumber: { type: Number, required: true },
  pannumber: { type: String, required: true },
  gstin: { type: String, required: true },
  type: { type: String, required: true },
  openingbalance: { type: Number, required: true },
  creditallowed: { type: Boolean, required: true },
  creditlimit: { type: Number, required: true },
  creditremark: { type: String, required: true },
});

module.exports = mongoose.model("Client", clientSchema);
