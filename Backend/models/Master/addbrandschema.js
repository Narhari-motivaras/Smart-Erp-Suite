const mongoose = require("mongoose");

brandSchema = new mongoose.Schema({
  brand: { type: String, required: true, minlength: 0, maxlength: 20 },
});

module.exports = mongoose.model("Brand", brandSchema);
