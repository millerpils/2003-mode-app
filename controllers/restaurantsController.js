const getRestaurants = require('../services/getRestaurants');
const Restaurant = require('../models/Restaurant');

const restaurantsController = {
  get: function (req, res, next) {
    let query = {};

    if (req.params.id) {
      query._id = req.params.id;
    }

    getRestaurants(query)
      .then((restaurants) => {
        res.json(restaurants);
      })
      .catch((error) => {
        return next(error);
      });
  },
  post: function (req, res, next) {
    Restaurant.create(req.body, (error, restaurant) => {
      if (error) {
        return next(error);
      }

      res.status(201).json(restaurant);
    });
  },
  put: function (req, res, next) {
    Restaurant.findOneAndUpdate(
      { title: req.params.id },
      req.body,
      (error, restaurant) => {
        if (error) {
          return next(error);
        }

        res.json(restaurant);
      }
    );
  },
};

module.exports = restaurantsController;
