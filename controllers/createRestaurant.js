const Restaurant = require("../models/Restaurant");

module.exports = (req, res, next) => {
  Restaurant.create(req.body, (error, document) => {
    if (error) {
      return next(error);
    }

    res.redirect("/restaurants");
  });
};
