const { getAllowedQuery } = require('../util');

function weaponsController(Weapon) {


  function get(req, res) {
    let filter = ["name", "level", "description"];
    let query = getAllowedQuery(req.query, filter);


    Weapon.find(query, (err, weapons) => {
      if (err) {
        return res.send(err);
      }
      const returnWeapons = weapons.map((weapon) => {
        const newWeapon = weapon.toJSON();
        newWeapon.image =  `http://${req.headers.host}/public/images/${newWeapon.name.split(' ').join('_')}.png`;
        newWeapon.links = {};
        newWeapon.links.self = `http://${req.headers.host}/api/weapons/${weapon._id}`;
        return newWeapon;
      });
      return res.json(returnWeapons);
    });
  }
  return { get };
}

module.exports = weaponsController;
