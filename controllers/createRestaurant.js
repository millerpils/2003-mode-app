const Restaurant = require("../models/Restaurant");

module.exports = (req, res, next) => {
  console.log(req.body);

  Restaurant.create(req.body, (error, document) => {
    if (error) {
      console.log(error.message);
      // prints error on front end
      next(error);
    }

    res.redirect("/");
  });
};
