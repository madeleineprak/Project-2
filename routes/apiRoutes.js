var db = require("../models");

// adding default place for testing
// db.Places.create({
//     name: "FOB Poke",
//     lat: 47.613767,
//     lng: -122.3459567
//   });

module.exports = function(app) {
  // Get all examples
  app.get("/api/places", function(req, res) {
    db.Places.findAll({}).then(function(Places) {
      res.json(Places);
    });
  });

  // Create a new example
  app.post("/api/places", function(req, res) {
    db.Places.create({
      // name: stored in object in madeline's logic
      // lng: stored in object in madeline's logic
      // lat: stored in object in madeline's logic
      // photo: stored in object in madeline's logic

      recommendation: req.body.recommendation,
      category: req.body.category
    })
      
      .then(function(Places) {
      res.json(Places);
    });
  });

  // Delete an example by id
  // app.delete("/api/all/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
