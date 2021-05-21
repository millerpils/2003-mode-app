const getRestaurants = require("../services/getRestaurants");

module.exports = (req, res, next) => {
  getRestaurants({})
    .then((restaurants) => {
      console.log(restaurants);
      res.render("restaurants", { user: req.user, restaurants: restaurants });
    })
    .catch((error) => {
      return next(error);
    });
};
