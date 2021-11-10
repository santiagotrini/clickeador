const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  player: String,
  score: Number,
  date: { type: Date, default: Date.now }
});

const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;
