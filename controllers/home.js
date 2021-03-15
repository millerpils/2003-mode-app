const Restaurant = require("../models/Restaurant");

module.exports = (req, res, next) => {
  Restaurant.find({}, (error, restaurants) => {
    res.render("index", { restaurants: restaurants });
  });
};
