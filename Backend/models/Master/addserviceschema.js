const mongoose = require("mongoose");

serviceSchema = new mongoose.Schema({
  servicename: { type: String, required: true },
  group: { type: String, required: true, minlength: 3, maxlength: 20 },
  servicecode: { type: String, required: true, unique: true },
  servicecharge: { type: Number, required: true },
  minservicecharge: { type: Number, required: true },
  cgst: { type: Number, required: true },
  sgst: { type: Number, required: true },
  igst: { type: Number, required: true },
});

module.exports = mongoose.model("Service", serviceSchema);
