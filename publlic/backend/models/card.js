const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  amount : {type: String, required: true}
});

module.exports = mongoose.model("Card", cardSchema);
