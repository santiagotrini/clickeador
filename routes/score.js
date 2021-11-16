const express = require('express');
const Score = require('../models/Score');

const router = express.Router();

router.get('/api/scores', (req, res) => {
  Score
    .find()
    .sort({ score: -1 })
    .limit(3)
    .exec((err, scores) => {
      res.status(200).json(scores);
  });
});

router.post('/api/scores', (req, res) => {
  const { score, player } = req.body
  const newScore = new Score({ score, player });
  newScore.save((err, score) => res.json(score));
});

module.exports = router;
