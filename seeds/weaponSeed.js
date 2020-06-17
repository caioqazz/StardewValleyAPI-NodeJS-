const data = require('./Data/weapon.json');
const weapon = require('../models/weapon');

function circulationRepo() {
  
  async function init() {
    weapon.insertMany(data);
  }
  return { init }

}

module.exports = circulationRepo();