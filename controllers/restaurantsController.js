const Restaurant = require("../models/Restaurant");

module.exports = (req, res, next) => {
  Restaurant.find({}, (error, restaurants) => {
    if (error) {
      return next(error);
    }

    res.render("restaurants", { user: req.user, restaurants: restaurants });
  });
};
