const mongoose = require('mongoose');

const { Schema } = mongoose;

const fish = new Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: String },
  }
);

module.exports = mongoose.model('Fish', fish);
