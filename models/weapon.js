const mongoose = require('mongoose');
const { Schema } = mongoose;

const weapon = new Schema(
  {
    name: { type: String },
    level: { type: Number },
    description: { type: String },
    damage: { type: String },
    criticalStrikeChance: { type: String },
    level: { type: String },
    stats: { type: String },
    location: { type: String },
    purchacePrice: { type: String },
    sellPrice: { type: String },
    read: { type: Boolean, default: false },
  }
);

module.exports = mongoose.model('Weapon', weapon);
