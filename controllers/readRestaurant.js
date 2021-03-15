const Restaurant = require("../models/Restaurant");

module.exports = (req, res, next) => {
  Restaurant.findOne({ title: req.body.title }, (error, restaurant) => {
    res.send(restaurant);
  });
};
