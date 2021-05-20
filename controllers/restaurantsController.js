const getRestaurants = require("../services/getRestaurants");

module.exports = (req, res, next) => {
  getRestaurants({})
    .then((restaurants) => {
      res.render("restaurants", { user: req.user, restaurants: restaurants });
    })
    .catch((error) => {
      return next(error);
    });
};
