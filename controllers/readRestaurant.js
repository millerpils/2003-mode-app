const Restaurant = require("../models/Restaurant");

module.exports = (req, res, next) => {
  Restaurant.findOne({ _id: req.params.id }, (error, restaurant) => {
    if (error) {
      return next(error);
    }

    res.render("viewRestaurant", { user: req.user, restaurant: restaurant });
  });
};
