function fishesController(Fish) {

    
    function get(req, res) {
      const query = {};
      if (req.query.name) {
        query.name = req.query.name;
      }
      Fish.find(query, (err, fishes) => {
        if (err) {
          return res.send(err);
        }
        const returnFishes = fishes.map((fish) => {
          const newFish = fish.toJSON();
          newFish.links = {};
          newFish.links.self = `http://${req.headers.host}/api/fishes/${fish._id}`;
          return newFish;
        });
        return res.json(returnFishes);
      });
    }
    return {  get };
  }
  
  module.exports = fishesController;
  