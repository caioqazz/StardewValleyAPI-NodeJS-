/* eslint-disable no-param-reassign */
const express = require('express');
const fishesController = require('../controllers/fishesController');

function routes() {
  const Fish = require('../models/fish');
  const fishRouter = express.Router();
  const controller = fishesController(Fish);
  fishRouter.route('/fishes')
    .get(controller.get);
  fishRouter.use('/fishes/:fishId', (req, res, next) => {
    Fish.findById(req.params.fishId, (err, fish) => {
      if (err) {
        return res.send(err);
      }
      if (fish) {
        req.fish = fish;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  fishRouter.route('/fishes/:fishId')
    .get((req, res) => {
      res.json(req.fish.toJSON());
    })
  return fishRouter;
}

module.exports = routes;
