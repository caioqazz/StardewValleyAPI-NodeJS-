/* eslint-disable no-param-reassign */
const express = require('express');
const weaponsController = require('../controllers/weaponsController');

function routes() {
    const Weapon = require('../models/weapon');
    const weaponRouter = express.Router();
    const controller = weaponsController(Weapon);
    weaponRouter.route('/weapons')
        .get(controller.get);
    weaponRouter.use('/weapons/:weaponId', (req, res, next) => {
        Weapon.findById(req.params.weaponId, (err, weapon) => {
            if (err) {
                return res.send(err);
            }
            if (weapon) {
                req.weapon = weapon;
                return next();
            }
            return res.sendStatus(404);
        });
    });
    weaponRouter.route('/weapons/:weaponId')
        .get((req, res) => {
            const returnFish = req.weapon.toJSON();
            res.json(returnFish);
        })
    return weaponRouter;
}

module.exports = routes;
