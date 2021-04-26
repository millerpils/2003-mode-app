const Restaurant = require("../models/Restaurant");

module.exports = (req, res, next) => {
  Restaurant.findOneAndUpdate(
    { title: req.body.title },
    req.body,
    (error, document) => {
      if (error) {
        return next(error);
      }

      res.redirect("/");
    }
  );
};
