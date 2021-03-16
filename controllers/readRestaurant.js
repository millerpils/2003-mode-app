const Restaurant = require("../models/Restaurant");

module.exports = (req, res, next) => {

  console.log(req.params)

  Restaurant.findOne({ _id: req.params.id}, (error, restaurant) => {
    if (error) {
      return next(error);
    }

    res.render("viewRestaurant", { restaurant: restaurant });
  });
};
