const mongoose = require('mongoose');

const { Schema } = mongoose;

const fish = new Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: String },
    read: { type: Boolean, default: false },
  }
);

module.exports = mongoose.model('Fish', fish);
