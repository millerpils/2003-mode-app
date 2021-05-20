const Restaurant = require("../models/Restaurant");

module.exports = async (query) => {
  return await Restaurant.find(query);
};
