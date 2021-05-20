const getRestaurants = require("../services/getRestaurants");

module.exports = (req, res, next) => {
  getRestaurants({ _id: req.params.id })
    .then((restaurant) => {
      res.render("viewRestaurant", {
        user: req.user,
        restaurant: restaurant,
      });
    })
    .catch((error) => {
      return next(error);
    });
};
