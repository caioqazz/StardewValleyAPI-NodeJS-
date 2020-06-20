const { getAllowedQuery } = require('../util');

function weaponsController(Weapon) {


  function get(req, res) {
    let filter = ["name", "level", "description"];
    let query = getAllowedQuery(req.query, filter);


    Weapon.find(query, (err, weapons) => {
      if (err) {
        return res.send(err);
      }
      const returnWeapons = weapons.map((fish) => {
        const newWeapon = fish.toJSON();
        newWeapon.links = {};
        newWeapon.links.self = `http://${req.headers.host}/api/weapons/${fish._id}`;
        return newWeapon;
      });
      return res.json(returnWeapons);
    });
  }
  return { get };
}

module.exports = weaponsController;
