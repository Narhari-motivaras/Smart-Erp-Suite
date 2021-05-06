const mongoose = require("mongoose");

groupSchema = new mongoose.Schema({
  groupname: { type: String, required: true, minlength: 3, maxlength: 20 },
  cgst: { type: Number, required: true },
  sgst: { type: Number, required: true },
  igst: { type: Number, required: true },
});

module.exports = mongoose.model("Group", groupSchema);
