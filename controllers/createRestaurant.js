const Restaurant = require("../models/Restaurant");

module.exports = (req, res, next) => {
  console.log(req.body);

  Restaurant.create(req.body, (error, document) => {
    if (error) {
      // prints error on front end
      return next(error);
    }

    res.redirect("/");
  });
};
