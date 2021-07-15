const Restaurant = require('../models/Restaurant');

module.exports = async (query) => {
  // returns a promise
  return await Restaurant.find(query);
};
