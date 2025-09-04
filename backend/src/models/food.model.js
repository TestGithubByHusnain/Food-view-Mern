const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  foodPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "foodPartner"
  }
});

// ✅ Prevent OverwriteModelError
const foodModel = mongoose.models.food || mongoose.model('food', foodSchema);

module.exports = foodModel;
