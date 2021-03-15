const Restaurant = require("../models/Restaurant");

module.exports = (req, res) => {
  Restaurant.findOneAndUpdate(
    { title: req.body.title },
    req.body,
    {
      returnNewDocument: true,
    },
    (error, document) => {
      console.log(document);
    }
  );
};
